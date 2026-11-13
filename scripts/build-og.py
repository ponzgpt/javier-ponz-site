#!/usr/bin/env python3
"""Generates public/og.jpg, the link-preview card, in the site's one palette.

Draws from the same sources the page does: the palette in src/data/skins.mjs
and the ASCII portrait in src/data/portrait.mjs. Neither is retyped here, so
the card cannot drift from the site.

Needs Pillow, and is deliberately outside the npm build: it produces a static
asset that changes only when the palette, the portrait or the hero line does.

    python3 scripts/build-og.py
"""
import re
import pathlib
from PIL import Image, ImageDraw, ImageFont

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'public' / 'og.jpg'
W, H = 1200, 630

MONO = '/System/Library/Fonts/Menlo.ttc'                  # stand-in for JetBrains Mono
DISPLAY = '/System/Library/Fonts/Supplemental/Impact.ttf'  # stand-in for Big Shoulders


def colour(name):
    src = (ROOT / 'src/data/skins.mjs').read_text()
    return re.search(rf"\n\s*{name}: '(#[0-9a-fA-F]{{6}})'", src).group(1)


def portrait():
    src = (ROOT / 'src/data/portrait.mjs').read_text()
    return re.search(r'export const portrait = `(.*?)`;', src, re.S).group(1).split('\n')


def hero_line():
    src = (ROOT / 'src/data/pages.mjs').read_text()
    return re.search(r'line: "(.*?)",', src).group(1)


def mix(a, b, t):
    a = tuple(int(a[i:i + 2], 16) for i in (1, 3, 5))
    b = tuple(int(b[i:i + 2], 16) for i in (1, 3, 5))
    return tuple(round(x + (y - x) * t) for x, y in zip(a, b))


def wrap(d, text, font, width):
    lines, cur = [], ''
    for word in text.split():
        trial = (cur + ' ' + word).strip()
        if d.textlength(trial, font=font) > width and cur:
            lines.append(cur)
            cur = word
        else:
            cur = trial
    return lines + [cur]


def main():
    bg, fg, accent, accent2 = (colour(n) for n in ('bg', 'fg', 'accent', 'accent2'))
    im = Image.new('RGB', (W, H), bg)
    d = ImageDraw.Draw(im)

    # Venetian-blind light, as on the hero: slanted bands a touch lighter than bg.
    band = mix(bg, fg, 0.035)
    for x in range(-H, W + H, 58):
        d.polygon([(x, H), (x + 22, H), (x + 22 + H * 0.25, 0), (x + H * 0.25, 0)], fill=band)

    # Portrait on the right, in amber, the same glyphs the hero draws.
    art = ImageFont.truetype(MONO, 7)
    rows = portrait()
    x0, y0 = W - 64 - int(max(map(len, rows)) * 4.2), 70
    for i, row in enumerate(rows):
        d.text((x0, y0 + i * 7), row, font=art, fill=mix(bg, accent, 0.85))

    small = ImageFont.truetype(MONO, 22)
    d.text((64, 70), 'javier@techn0ir:~$ whoami', font=small, fill=accent2)
    name = ImageFont.truetype(DISPLAY, 132)
    d.text((60, 108), 'JAVIER', font=name, fill=fg)
    d.text((60, 246), 'PONZ', font=name, fill=fg)
    pw = d.textlength('PONZ', font=name)
    d.rectangle([70 + pw, 352, 70 + pw + 62, 362], fill=accent)

    body = ImageFont.truetype(MONO, 22)
    y = 418
    for line in wrap(d, hero_line(), body, 560):
        d.text((64, y), line, font=body, fill=fg)
        y += 32
    d.text((64, H - 64), 'javierponz.technoir.cloud', font=small, fill=accent)

    im.save(OUT, quality=88)
    print(f'wrote {OUT} ({OUT.stat().st_size // 1024} KB)')


if __name__ == '__main__':
    main()
