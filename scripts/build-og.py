#!/usr/bin/env python3
"""Generates public/og-omakase.jpg — the link-preview card.

The previous card was drawn in the Hermes palette and carried copy the site no
longer uses, so every link pasted into a chat advertised a version of the site
that no longer existed. This draws it from the same two sources the page does:
the ASCII wordmark out of src/components/Terminal.astro, and the Omakase
colours out of src/data/skins.mjs. Neither is retyped here, so the card cannot
drift from the site the way the last one did.

Needs Pillow, and is deliberately outside the npm build: it produces a static
asset that changes only when the default skin or the wordmark changes.

    python3 scripts/build-og.py
"""
import re
import pathlib
from PIL import Image, ImageDraw, ImageFont

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'public' / 'og-omakase.jpg'
W, H = 1200, 630

FONT = '/System/Library/Fonts/Menlo.ttc'   # metrics-compatible stand-in for JetBrains Mono


def skin(name):
    """Pull one colour token out of the first skin in skins.mjs."""
    src = (ROOT / 'src/data/skins.mjs').read_text()
    block = src.split("id: 'omarchy'", 1)[1]
    return re.search(rf"\n\s*{name}: '(#[0-9a-fA-F]{{6}})'", block).group(1)


def wordmark():
    src = (ROOT / 'src/components/Terminal.astro').read_text()
    return re.search(r'const banner = `(.*?)`;', src, re.S).group(1).split('\n')


def mix(a, b, t):
    a = tuple(int(a[i:i + 2], 16) for i in (1, 3, 5))
    b = tuple(int(b[i:i + 2], 16) for i in (1, 3, 5))
    return tuple(round(x + (y - x) * t) for x, y in zip(a, b))


def main():
    bg, fg, accent, accent2 = (skin(n) for n in ('bg', 'fg', 'accent', 'accent2'))
    im = Image.new('RGB', (W, H), bg)
    d = ImageDraw.Draw(im)

    art = ImageFont.truetype(FONT, 22)
    small = ImageFont.truetype(FONT, 20)
    body = ImageFont.truetype(FONT, 25)
    tiny = ImageFont.truetype(FONT, 19)

    d.text((64, 52), '❯ javier-ponz', font=small, fill=accent)
    d.text((W - 64, 52), 'ABERDEEN, SCOTLAND', font=small, fill=accent2, anchor='ra')

    # The wordmark, in the same top-to-bottom accent -> accent2 ramp the site
    # paints it with (see .out .art in Terminal.astro).
    lines = wordmark()
    y = 116
    for i, line in enumerate(lines):
        d.text((64, y), line, font=art, fill=mix(accent, accent2, i / max(1, len(lines) - 1)))
        y += 24

    y = 428
    for line in ['Ten years diagnosing hard problems at Apple Retail.',
                 'Now agent workflows, tools and small products that',
                 'reach production.']:
        d.text((64, y), line, font=body, fill=fg)
        y += 34

    d.line([(64, 556), (W - 64, 556)], fill=mix(bg, fg, 0.25), width=1)
    x = 64
    for tag in ['agents & MCP', 'Docker', 'full stack']:
        tw = d.textlength(tag, font=tiny)
        d.rectangle([x, 578, x + tw + 26, 612], outline=mix(bg, accent2, 0.55))
        d.text((x + 13, 588), tag, font=tiny, fill=accent2)
        x += tw + 42
    d.text((W - 64, 588), 'javierponz.technoir.cloud', font=tiny, fill=fg, anchor='ra')

    im.save(OUT, quality=90)
    print(f'wrote {OUT} ({OUT.stat().st_size // 1024} KB)')


if __name__ == '__main__':
    main()
