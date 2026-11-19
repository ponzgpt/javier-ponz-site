// The notebook's behaviour: rough.js sketches scrubbed by scroll, Rough Notation marks, the corner fold
// (theme), copy-to-clipboard tabs, doodles. Progressive enhancement: the page reads fully
// without it. Strings come from the page's own JSON block (#nb-copy), rendered from src/data/copy.mjs.
import rough from 'roughjs';
import { annotate, annotationGroup } from 'rough-notation';
const RoughNotation = { annotate, annotationGroup };
(function(){
const NS='http://www.w3.org/2000/svg', root=document.documentElement, $=s=>document.querySelector(s), $$=(s,e)=>[...(e||document).querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches, mqDark=matchMedia('(prefers-color-scheme: dark)');
const clamp=v=>v<0?0:v>1?1:v, ease=t=>t*t*(3-2*t), W_=(a,b)=>Object.assign({},a,b);
let C={};
const T_=JSON.parse(document.getElementById("nb-copy").textContent);
function readC(){const cs=getComputedStyle(root),g=n=>cs.getPropertyValue('--'+n).trim();
  C={paper:g('paper'),ink:g('sk-ink'),ink2:g('ink-2'),blue:g('mark'),wash:g('wash'),hatch:g('hatch'),card:g('card'),ghost:g('ghost'),faint:g('faint'),chalk:g('chalk')==='1'};}

/* ---------- theme: the folded corner turns the page (session only) ---------- */
const fold=$('#fold');
try{const s=sessionStorage.getItem('nb-theme');if(s==='dark'||s==='light')root.setAttribute('data-theme',s)}catch(e){}
// language: a click on EN or ES is remembered, and wins over the browser's language from then on (see Layout.astro)
$$('.lang a').forEach(a=>a.addEventListener('click',()=>{try{localStorage.setItem('nb-lang',a.getAttribute('hreflang'))}catch(e){}}));
const isDark=()=>{const t=root.getAttribute('data-theme');return t?t==='dark':mqDark.matches};
function syncFold(){const d=isDark();fold.setAttribute('aria-pressed',String(d));fold.setAttribute('aria-label',d?T_.ui.foldToLight:T_.ui.foldToDark);}
function setTheme(n){root.setAttribute('data-theme',n);try{sessionStorage.setItem('nb-theme',n)}catch(e){}onTheme();}
fold.addEventListener('click',()=>{
  const n=isDark()?'light':'dark';
  if(!document.startViewTransition||matchMedia('(prefers-reduced-motion: reduce)').matches){setTheme(n);return;}
  // peel: the new page is revealed from the top-right corner along a diagonal edge; a shadow band rides the edge
  const W=innerWidth,H=innerHeight,D=W+H+160,L=Math.ceil(Math.hypot(W,H)*1.6),BH=200,k=D/Math.SQRT2;let band=null;
  const vt=document.startViewTransition(()=>{setTheme(n);band=document.createElement('div');band.className='peel';band.setAttribute('aria-hidden','true');
    Object.assign(band.style,{width:L+'px',left:(W-D/2-L/2)+'px',top:(D/2-BH/2)+'px',transform:'rotate(45deg)'});document.body.appendChild(band);});
  vt.ready.then(()=>{const o={duration:740,easing:'cubic-bezier(.55,.06,.28,1)',fill:'both'},P=d=>`polygon(${W-d}px -2px, ${W+2}px -2px, ${W+2}px ${d}px)`;
    root.animate({clipPath:[P(0),P(D)]},Object.assign({pseudoElement:'::view-transition-new(root)'},o));
    root.animate({transform:[`translateY(${-k}px)`,'translateY(0px)']},Object.assign({pseudoElement:'::view-transition-new(peel)'},o));}).catch(()=>{});
  const drop=()=>{if(band){band.remove();band=null}};vt.finished.then(drop,drop);setTimeout(drop,1600);
});

/* ---------- pen: rough.js helpers; every stroke reads token colours; chalk is thicker, rougher, smudged ---------- */
const blue=()=>({stroke:C.blue}), dash={strokeLineDash:[6,7]};
const solid=()=>({fill:C.card,fillStyle:'solid'});
const dotHatch=()=>({stroke:C.blue,fill:C.blue,fillStyle:'hachure',hachureGap:3.6,fillWeight:1.1,hachureAngle:-45});
function pen(svg,seed){
  svg.innerHTML='<g class="pencil"></g><g class="ink"></g><g class="labels"></g>';
  const ink=svg.childNodes[1], lab=svg.lastChild, rc=rough.svg(svg); let n=seed||1, tgt=ink;
  const o=x=>{const s=Object.assign({stroke:C.ink,strokeWidth:1.5,roughness:1.1,bowing:.8,seed:n++},x||{});
    if(C.chalk){s.strokeWidth*=1.5;s.roughness+=.55;if(s.fill&&s.fillStyle==='hachure'&&!s.fine){s.fill=C.hatch;s.fillWeight=Math.max(4,(s.fillWeight||1)*4.2);s.hachureGap=(s.hachureGap||6)*1.8;}}
    return s;};
  const a=el=>(tgt.appendChild(el),el);
  return {
    grp(k){if(!k){tgt=ink;return}tgt=document.createElementNS(NS,'g');tgt.setAttribute('data-k',k);ink.appendChild(tgt);return tgt},
    rect:(x,y,w,h,s)=>a(rc.rectangle(x,y,w,h,o(s))), line:(x1,y1,x2,y2,s)=>a(rc.line(x1,y1,x2,y2,o(s))),
    ell:(x,y,w,h,s)=>a(rc.ellipse(x,y,w,h,o(s))), circ:(x,y,d,s)=>a(rc.circle(x,y,d,o(s))),
    poly:(p,s)=>a(rc.polygon(p,o(s))), curve:(p,s)=>a(rc.curve(p,o(s))), path:(d,s)=>a(rc.path(d,o(s))), lines:(p,s)=>a(rc.linearPath(p,o(s))),
    rrect(x,y,w,h,r,s){return this.path(`M${x+r} ${y}H${x+w-r}Q${x+w} ${y} ${x+w} ${y+r}V${y+h-r}Q${x+w} ${y+h} ${x+w-r} ${y+h}H${x+r}Q${x} ${y+h} ${x} ${y+h-r}V${y+r}Q${x} ${y} ${x+r} ${y}Z`,s);},
    text(x,y,str,cls,anchor){const t=document.createElementNS(NS,'text');t.setAttribute('x',x);t.setAttribute('y',y);t.setAttribute('class',cls);t.setAttribute('text-anchor',anchor||'start');
      str.split('\n').forEach((l,i)=>{const s=document.createElementNS(NS,'tspan');s.setAttribute('x',x);if(i)s.setAttribute('dy','1.3em');s.textContent=l;t.appendChild(s)});lab.appendChild(t);return t;},
  };
}
const rel=(el,r0)=>{const r=el.getBoundingClientRect();return{x:r.left-r0.left,y:r.top-r0.top,w:r.width,h:r.height,cx:r.left-r0.left+r.width/2,cy:r.top-r0.top+r.height/2}};
// the centre of the glyphs themselves, not of their line box (ethos numbers)
function glyph(el,r0){const g=document.createRange();g.selectNodeContents(el);const b=g.getBoundingClientRect(),cs=getComputedStyle(el),x=glyph.x||(glyph.x=document.createElement('canvas').getContext('2d'));
  x.font=`${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;const m=x.measureText(el.textContent);
  if(!m.fontBoundingBoxAscent)return{x:b.left-r0.left+b.width/2,y:b.top-r0.top+b.height*.46};
  const base=b.top+(b.height-m.fontBoundingBoxAscent-m.fontBoundingBoxDescent)/2+m.fontBoundingBoxAscent;
  return{x:b.left-r0.left+(m.actualBoundingBoxRight-m.actualBoundingBoxLeft)/2,y:base-r0.top-(m.actualBoundingBoxAscent-m.actualBoundingBoxDescent)/2};}

/* ---------- sketches: drawn in the order they should ink in ---------- */
const D={
  review(p,W){
    const ev=[0,14,26,36].map((h,i)=>[h,...T_.work.review[i]]), last=ev.length-1;
    const dot=(x,y,i)=>p.circ(x,y,16,i===last?dotHatch():W_(solid(),{strokeWidth:1.6}));
    if(W>=600){
      const x0=24,x1=W-70,y=52,X=h=>x0+(x1-x0)*h/36;
      ev.forEach(([h,t,d],i)=>{const x=X(h),an=i===0?'start':'middle',tx=i===0?x-8:x;
        if(i)p.line(X(ev[i-1][0])+9,y,x-9,y,{strokeWidth:2}); dot(x,y,i);
        p.text(tx,y-20,t,'sk-blue',an); p.text(tx,y+34,d,i===last?'sk-blue':'sk-type',an);});
      return 120;
    }
    const x=12,Y=i=>16+i*54;
    ev.forEach(([h,t,d],i)=>{const y=Y(i);if(i)p.line(x,Y(i-1)+9,x,y-9,{strokeWidth:2});dot(x,y,i);p.text(x+22,y+6,t,'sk-blue');p.text(x+22,y+26,d.replace('\n',' '),i===last?'sk-blue':'sk-type');});
    return Y(last)+40;
  },
  tally(p,W,el){const n=+el.dataset.n;for(let i=0;i<n;i++){const g=Math.floor(i/5),k=i%5,x0=4+g*46;
    if(k<4)p.line(x0+k*8,6,x0+k*8+1,34,{strokeWidth:1.8}); else p.line(x0-5,28,x0+30,10,W_({strokeWidth:2},blue()));}},
  ticket(p,W,el){const H=el.clientHeight,sx=el.querySelector('.stub').offsetWidth;
    p.rect(2,2,W-4,H-4,{strokeWidth:1.4}); p.line(sx,10,sx,H-10,W_(dash,{stroke:C.ink2}));
    for(let y=22;y<H-14;y+=26)p.circ(sx,y,3,{stroke:C.ink2,strokeWidth:.8,roughness:.5});},
  stamp(p,W,el){const H=el.clientHeight;p.rect(1,1,W-2,H-2,W_({strokeWidth:1.8,roughness:1.4},blue()));p.rect(-2,-2,W+4,H+4,W_({strokeWidth:1,roughness:1.2},blue()));},
  card(p,W,el,it){const H=el.clientHeight,r0=el.getBoundingClientRect(),k=el.querySelector('.kind'),ds=el.querySelector('.kind+p');
    p.rect(2,2,W-4,H-4,{strokeWidth:it.hot?2.1:1.4,stroke:it.hot?C.blue:C.ink,roughness:it.hot?1.6:1.1});
    // rules start at the text column, which sits beside the sketch on tablets
    const kx=Math.max(10,rel(k,r0).x-8),ky=rel(k,r0).y+rel(k,r0).h-4; p.line(kx,ky,W-10,ky,{stroke:C.blue,strokeWidth:1.3,roughness:1.2});
    const y0=rel(ds,r0).y,y1=y0+rel(ds,r0).h; for(let y=y0+22;y<=y1;y+=28)p.line(kx,y,W-10,y,{stroke:C.chalk?C.faint:C.hatch,strokeWidth:.9,roughness:.5,bowing:.3});},
  // p. 4 project cards: one small drawing each, fitted into a 220 x 112 box
  pj(p,W,el){const o=Math.max(0,(W-220)/2),X=v=>o+v,B=W_(blue(),{strokeWidth:2}),thin={stroke:C.ink2,strokeWidth:1,roughness:.7};
    switch(el.dataset.pj){
      case 'nn': // a page of standards under a magnifier, with a tick in the lens
        p.rect(X(28),6,96,102,W_(solid(),{strokeWidth:1.4}));p.line(X(40),20,X(92),20,{strokeWidth:1.6});
        [0,1,2,3,4,5].forEach(i=>p.line(X(40),36+i*12,X(40+66-(i%3)*16),36+i*12,thin));
        p.circ(X(132),54,58,W_(solid(),B));p.line(X(153),76,X(184),106,W_(blue(),{strokeWidth:3.2}));
        p.lines([[X(116),54],[X(128),66],[X(148),40]],W_(blue(),{strokeWidth:2.4}));break;
      case 'plw': // a small line chart, a citation bracket on one point and its leader
        p.lines([[X(18),8],[X(18),102],[X(208),102]],{strokeWidth:1.5});
        [40,64,88].forEach(y=>p.line(X(14),y,X(22),y,thin));
        const pts=[[30,86],[62,72],[94,76],[126,54],[158,44],[194,26]].map(([x,y])=>[X(x),y]);
        p.lines(pts,{strokeWidth:1.8});pts.forEach(q=>p.circ(q[0],q[1],7,W_(solid(),{strokeWidth:1.2})));
        p.lines([[X(150),8],[X(145),8],[X(145),26],[X(150),26]],B);p.lines([[X(166),8],[X(171),8],[X(171),26],[X(166),26]],B);
        p.line(X(152),17,X(164),17,W_(blue(),{strokeWidth:1.4}));p.line(X(158),28,X(158),38,W_(blue(),{strokeWidth:1.2,strokeLineDash:[3,3]}));break;
      case 'asi': // a clicker button, and a progress bar from a garage to a data centre
        p.rrect(X(70),4,82,40,12,W_(dotHatch(),{strokeWidth:2}));
        p.poly([[X(140),28],[X(140),52],[X(146),47],[X(150),56],[X(154),54],[X(150),45],[X(158),45]],W_(solid(),{strokeWidth:1.3}));
        p.poly([[X(4),104],[X(4),84],[X(17),72],[X(30),84],[X(30),104]],{strokeWidth:1.4});p.rect(X(11),91,12,13,thin);
        p.rect(X(40),80,142,16,{strokeWidth:1.4});p.rect(X(40),80,88,16,W_(dotHatch(),{strokeWidth:1}));
        [72,88].forEach(y=>{p.rect(X(190),y,28,14,{strokeWidth:1.3});p.circ(X(196),y+7,3,W_(blue(),{strokeWidth:1}));p.line(X(202),y+7,X(213),y+7,thin);});
        p.line(X(188),104,X(220),104,thin);break;}
    return 112;},
  tabs(p,W,el){const r0=el.getBoundingClientRect(),rows={};$$('.tab',el).forEach(a=>{const r=rel(a,r0),on=a.getAttribute('aria-pressed')==='true',off=a.classList.contains('off');
      p.poly([[r.x+1,r.y+r.h],[r.x+6,r.y+2],[r.x+r.w-6,r.y+2],[r.x+r.w-1,r.y+r.h]],on?W_({strokeWidth:2,fill:C.wash,fillStyle:'hachure',hachureGap:5,fine:1},blue()):off?{stroke:C.faint,strokeWidth:1.3,roughness:1.2}:{strokeWidth:1.5,roughness:1.2});
      const k=Math.round(r.y+r.h);(rows[k]=rows[k]||[]).push(r);});
    Object.keys(rows).forEach(k=>{const rs=rows[k],x0=Math.min(...rs.map(r=>r.x)),x1=Math.max(...rs.map(r=>r.x+r.w));p.line(x0-4,+k,x1+4,+k,{strokeWidth:2.2,stroke:C.blue});});},
  btn(p,W,el){const H=el.clientHeight;p.rect(2,2,W-4,H-4,W_(W_({strokeWidth:2},blue()),{fill:C.wash,fillStyle:'hachure',hachureGap:6,fillWeight:1}));},
  tl(p,W,el){const r0=el.getBoundingClientRect(),pts=$$('.tl-dot',el).map(d=>{const r=rel(d,r0);return[r.cx,r.cy]}),n=pts.length;
    // one dot per act, as big as its box, the first (now) hatched; the line runs dot to dot
    const ds=$$('.tl-dot',el);pts.forEach((q,i)=>{const d=ds[i].offsetWidth,g=d/2+3;p.circ(q[0],q[1],d,i===0?dotHatch():W_(solid(),{strokeWidth:1.8}));
      if(i<n-1)p.line(q[0],q[1]+g,pts[i+1][0],pts[i+1][1]-g,{strokeWidth:1.6});});},
  // the notes list: a hand-ruled line under each row, an arrow that redraws on hover
  ruled(p,W,el){const r0=el.getBoundingClientRect(),rule={stroke:C.chalk?C.ink2:C.hatch,strokeWidth:1,roughness:.6,bowing:.4};
    $$('li',el).forEach((li,i)=>{const r=rel(li,r0),u=rel(li.parentNode,r0),ar=li.querySelector('.arr');
      if(ar){const q=rel(ar,r0),x=q.cx-6,y=q.cy+5;p.grp('a'+i);p.line(x,y,x+12,y-12,W_({strokeWidth:1.5},blue()));p.lines([[x+3,y-12],[x+12,y-12],[x+12,y-3]],W_({strokeWidth:1.5},blue()));p.grp();}
      p.line(u.x,r.y+r.h,u.x+u.w,r.y+r.h,rule);});},
  thesis(p,W,el){const r0=el.getBoundingClientRect(),n=el.querySelector('.num'),c=glyph(n,r0),H=el.clientHeight,d=n.offsetWidth<40?32:40;
    // one grid of five, 3 + 2 columns on wide pages: a rule under every rule but the last in its column
    const nx=el.nextElementSibling,last=!nx||Math.abs(nx.offsetLeft-el.offsetLeft)>4;
    p.ell(c.x,c.y,d,d-2,W_({strokeWidth:1.6,roughness:1.3},blue()));
    if(!last)p.line(rel(n,r0).x+6,H-1,W-6,H-1,{stroke:C.ink2,strokeWidth:1.1,roughness:.9,bowing:.6});},
  // p. 3: three points, a small mark each (a closed padlock, a tape measure, a sunrise), hand-ruled apart
  trio(p,W,el){const r0=el.getBoundingClientRect(),lis=$$(':scope > li',el),B=W_(blue(),{strokeWidth:1.8}),side=lis.length>1&&Math.abs(rel(lis[0],r0).y-rel(lis[1],r0).y)<4;
    lis.forEach((li,i)=>{const m=rel(li.querySelector('.mk'),r0),x=m.x,y=m.y,r=rel(li,r0);
      switch(i){
        case 0:p.path(`M${x+14} ${y+21}V${y+12}C${x+14} ${y+2} ${x+32} ${y+2} ${x+32} ${y+12}V${y+21}`,B);p.rect(x+8,y+20,30,23,W_(solid(),{strokeWidth:1.6}));p.circ(x+23,y+29,5,B);p.line(x+23,y+31,x+23,y+37,B);break;
        case 1:p.rect(x+14,y+31,32,8,W_(blue(),{strokeWidth:1.5}));[20,26,32,38].forEach((u,j)=>p.line(x+u,y+31,x+u,y+(j%2?34:36),W_(blue(),{strokeWidth:1.1})));p.line(x+46,y+29,x+46,y+41,W_(blue(),{strokeWidth:2}));
          p.circ(x+15,y+24,28,W_(solid(),{strokeWidth:1.6}));p.circ(x+15,y+24,7,{strokeWidth:1.1});break;
        default:p.line(x,y+36,x+46,y+36,{strokeWidth:1.5});p.path(`M${x+9} ${y+36}C${x+9} ${y+20} ${x+37} ${y+20} ${x+37} ${y+36}`,B);
          [[23,22,23,12],[10,27,4,21],[36,27,42,21],[15,23,11,15],[31,23,35,15]].forEach(([a,b,c,d])=>p.line(x+a,y+b-2,x+c,y+d-2,W_(blue(),{strokeWidth:1.4})));
          p.line(x+6,y+42,x+18,y+42,{stroke:C.ink2,strokeWidth:1,roughness:.7});p.line(x+26,y+42,x+40,y+42,{stroke:C.ink2,strokeWidth:1,roughness:.7});}
      if(!i)return;
      if(side)p.line(r.x-20,r.y+4,r.x-19,r.y+r.h-4,{stroke:C.ink2,strokeWidth:1.1,roughness:.9,bowing:.6});
      else p.line(r.x+4,r.y-14,r.x+r.w-6,r.y-14,{stroke:C.ink2,strokeWidth:1.1,roughness:.9,bowing:.6});});},
  // p. 6: the skills sheet; a box per row (ticked, or empty for what comes next), a hand rule under each row
  sheet(p,W,el){const r0=el.getBoundingClientRect(),rows=$$('.sheet-rows > li',el),rule={stroke:C.chalk?C.ink2:C.hatch,strokeWidth:1,roughness:.6,bowing:.4};
    rows.forEach((li,i)=>{const r=rel(li,r0),b=rel(li.querySelector('.bx'),r0);
      p.rect(b.x+1,b.y+1,b.w-2,b.h-2,W_(solid(),{strokeWidth:1.5}));
      if(!li.classList.contains('next'))p.lines([[b.x+4,b.cy],[b.x+9,b.cy+6],[b.x+b.w+3,b.y-5]],W_(blue(),{strokeWidth:2.2}));
      if(i<rows.length-1)p.line(r.x,r.y+r.h,r.x+r.w,r.y+r.h,rule);});},
  // language tabs: card stock in light (CSS); chalk outlines on the slate edge in dark
  lang(p,W,el){if(!C.chalk)return;const r0=el.getBoundingClientRect(),col=getComputedStyle(el).flexDirection==='column';
    $$('a',el).forEach(a=>{const {x,y,w,h}=rel(a,r0),on=a.hasAttribute('aria-current'),
      pts=col?[[x+w+6,y+1],[x+6,y+1],[x+1,y+7],[x+1,y+h-7],[x+6,y+h-1],[x+w+6,y+h-1]]:[[x+1,y-6],[x+1,y+h-7],[x+6,y+h-1],[x+w-6,y+h-1],[x+w-1,y+h-7],[x+w-1,y-6]];
      p.poly(pts,{fill:C.paper,fillStyle:'solid',strokeWidth:on?1.3:1,roughness:.9,stroke:on?C.ink:C.ink2});if(on)p.poly(pts,{fill:C.wash,fillStyle:'solid',stroke:'none'});});},
};

/* ---------- a quick redraw of one group of strokes (the notes arrows on hover) ---------- */
function pop(svg,sel){if(RM)return;svg.querySelectorAll(sel).forEach((q,i)=>{if((q.getAttribute('fill')||'none')!=='none'||q.dataset.dash)return;
  q.animate([{strokeDashoffset:+q.dataset.len||0},{strokeDashoffset:q.style.strokeDashoffset||0}],{duration:420,delay:Math.min(i*14,300),easing:'cubic-bezier(.3,.6,.3,1)',fill:'backwards'});});}

/* ---------- scroll-scrubbed ink: progress 0 near the bottom edge, 1 at 55% of the viewport ---------- */
function prep(it){
  const ink=it.svg.querySelector('.ink'),pg=it.svg.querySelector('.pencil');
  ink.childNodes.forEach(g=>pg.appendChild(g.cloneNode(true)));
  pg.querySelectorAll('path').forEach(q=>{if((q.getAttribute('fill')||'none')!=='none'){q.remove();return;}q.setAttribute('stroke',C.ghost);q.setAttribute('stroke-width',C.chalk?3.4:Math.min(1,+q.getAttribute('stroke-width')||1));});
  const ps=[...ink.querySelectorAll('path')],n=ps.length,span=Math.min(1,Math.max(.16,2.4/Math.max(1,n)));
  it.paths=ps.map((el,i)=>{const fill=(el.getAttribute('fill')||'none')!=='none';let len=0;if(!fill){try{len=el.getTotalLength()}catch(e){}el.dataset.len=len;
      if(!el.getAttribute('stroke-dasharray'))el.style.strokeDasharray=len+' '+len;else{el.dataset.dash=1;}}
    const a=(n>1?i/(n-1):0)*(1-span);return{el,len,fill,a,b:a+span};});
}
function apply(it,force){if(!it.paths)return;const P=it.prog;if(!force&&Math.abs(P-it.shown)<.0005)return;it.shown=P;
  for(const q of it.paths){const t=ease(clamp((P-q.a)/(q.b-q.a)));if(q.fill||q.el.dataset.dash)q.el.style.opacity=t;else q.el.style.strokeDashoffset=(q.len*(1-t)).toFixed(1);}}
function render(it){
  const W=it.el.clientWidth;if(!W)return;const p=pen(it.svg,it.seed);
  const h=D[it.kind](p,W,it.el,it),H=h||it.el.clientHeight;
  it.svg.setAttribute('width',W);it.svg.setAttribute('height',H);it.svg.setAttribute('viewBox',`0 0 ${W} ${H}`);if(h)it.svg.style.height=H+'px';
  prep(it);apply(it,true);if(it.after)it.after();
}
const items=[];
$$('[data-sketch]').forEach(el=>items.push({el,kind:el.dataset.sketch,svg:el.querySelector(':scope > svg')}));
$$('[data-tabs]').forEach(el=>items.push({el,kind:'tabs',svg:el.querySelector(':scope > svg')}));
items.forEach((it,i)=>{it.seed=3+i*17;it.prog=RM?1:0;it.shown=-1;});
const byEl=new Map(items.map(it=>[it.el,it]));
const vis=new Set();let raf=0;
// sketches that start inside the first screen finish where they sit, so the first screen is complete
const target=(it,vh)=>{if(it.kind==='lang')return 1;const t=it.el.getBoundingClientRect().top,y0=it.y0==null?(it.y0=t+scrollY):it.y0,e=y0<vh*.95?Math.max(vh*.55,y0+2):vh*.55;return clamp((e+vh*.4-t)/(vh*.4))};
function frame(){raf=0;const vh=innerHeight,arr=[...vis],T=arr.map(it=>target(it,vh));let moving=false;   // read all, then write
  arr.forEach((it,i)=>{const d=T[i]-it.prog;if(Math.abs(d)<.003)it.prog=T[i];else{it.prog+=d*.2;moving=true;}apply(it);});
  if(moving)kick();}
function kick(){if(!raf&&vis.size&&!RM)raf=requestAnimationFrame(frame)}
// inner sketches first, so the outlines around them measure their final height
function renderAll(){for(let i=items.length-1;i>=0;i--)render(items[i]);}

/* ---------- hero marks + heading underlines: draw on enter, erase on leave ---------- */
let anns=[];const annVis=new Map();
function notes(){
  anns.forEach(x=>x.a.remove());anns=[];const A=RoughNotation.annotate,an=!RM,k=C.chalk?1.5:1;
  const hs=[
    A($('#hl-a'),{type:'box',color:C.blue,strokeWidth:2*k,padding:[2,6],animate:an,animationDuration:500}),
    A($('#hl-b'),{type:'underline',color:C.blue,strokeWidth:2.2*k,padding:2,multiline:true,animate:an,animationDuration:700,iterations:2}),
    A($('#hl-c'),{type:'highlight',color:C.wash,multiline:true,animate:an,animationDuration:900,iterations:1})],g=RoughNotation.annotationGroup(hs);
  anns.push({el:$('#hero-line'),a:{remove:()=>hs.forEach(h=>h.remove())},show:()=>g.show(),hide:()=>g.hide()});
  $$('h2 span').forEach(s=>{const a=A(s,{type:'underline',color:C.blue,strokeWidth:2*k,padding:3,animate:an,animationDuration:600});anns.push({el:s,a,show:()=>a.show(),hide:()=>a.hide()});});
  anns.forEach(x=>{if(RM||!window.IntersectionObserver||annVis.get(x.el))x.show()});
}

/* ---------- Email, Discord: copy the value, confirm inside its own tab ---------- */
$$('[data-copy]').forEach(b=>b.addEventListener('click',()=>{const v=b.dataset.copy,sm=b.querySelector('small'),st=b.closest('.lw').querySelector('[role=status]');
  const o=b._o||(b._o=sm.textContent);
  const say=()=>{sm.textContent=T_.ui.copied;sm.classList.add('ok');st.textContent=b.dataset.done;clearTimeout(b._t);b._t=setTimeout(()=>{sm.textContent=o;sm.classList.remove('ok');st.textContent=''},2600)};
  const fb=()=>{sm.textContent=v;sm.classList.remove('ok');const r=document.createRange();r.selectNodeContents(sm);const s=getSelection();s.removeAllRanges();s.addRange(r);st.textContent=b.dataset.sel+' '+v;};
  try{navigator.clipboard.writeText(v).then(say,fb)}catch(e){fb()}}));

/* ---------- doodle: draw on the page with its own material; strokes fade after ~4 s ---------- */
const DD=(function(){
  const cv=$('#doodle'),x=cv.getContext('2d'),oc=document.createElement('canvas'),ox=oc.getContext('2d');
  const OK='html,body,.book,.spread,.main,.margin,.cover-main,.hero,.lw,.h-row,.cards,.plugs,.ruled,.notes,.ethos-cols,.ethos-col,.ethos,.tl-wrap,.tl,.tl li,.links-row,.sheet,.sheet-rows,.sheet-rows>li,.sk,.sk *';
  const NO='a,button,input,textarea,select,label,summary,[contenteditable],.photo,.fold,nav';
  const LIFE=4000,FADE=1200;let dpr=1,strokes=[],specks=[],cur=null,pend=null,raf=0,pat=null,patKey='';
  function size(){dpr=Math.min(1.5,devicePixelRatio||1);cv.width=oc.width=Math.round(innerWidth*dpr);cv.height=oc.height=Math.round(innerHeight*dpr);}
  function pattern(){const key=C.blue;if(pat&&patKey===key)return pat;const S=96,c=document.createElement('canvas');c.width=c.height=S;const g=c.getContext('2d'),im=g.createImageData(S,S),q=8,G=[];
    for(let i=0;i<(S/q+1)*(S/q+1);i++)G.push(Math.random());const gv=(a,b)=>G[(b%(S/q+1))*(S/q+1)+(a%(S/q+1))];
    const m=C.blue.match(/\d+/g)||[251,251,246],[r0,g0,b0]=C.blue[0]==='#'?[1,3,5].map(i=>parseInt(C.blue.slice(i,i+2),16)):m.map(Number);
    for(let y=0;y<S;y++)for(let X=0;X<S;X++){const u=X/q,v=y/q,i0=u|0,j0=v|0,fu=u-i0,fv=v-j0,co=gv(i0,j0)*(1-fu)*(1-fv)+gv(i0+1,j0)*fu*(1-fv)+gv(i0,j0+1)*(1-fu)*fv+gv(i0+1,j0+1)*fu*fv;
      const a=clamp((co*.55+Math.random()*.75-.38)*1.9),k=(y*S+X)*4;im.data[k]=r0;im.data[k+1]=g0;im.data[k+2]=b0;im.data[k+3]=a*255;}
    g.putImageData(im,0,0);pat=x.createPattern(c,'repeat');patKey=key;return pat;}
  function add(e){const t=performance.now(),px=e.clientX+scrollX,py=e.clientY+scrollY,P=cur.pts,l=P[P.length-1];
    if(!l){P.push({x:px,y:py,t,w:cur.chalk?5:1.7});return}
    const d=Math.hypot(px-l.x,py-l.y);if(d<1.5)return;const v=d/Math.max(1,t-l.t);
    const w=cur.chalk?5.4*(.8+.4*Math.random()):l.w*.7+Math.max(.9,Math.min(2.3,2.4-v*.6))*.3;P.push({x:px,y:py,t,w});
    if(cur.chalk&&!RM&&Math.random()<.4)specks.push({x:px+(Math.random()-.5)*w,y:py+Math.random()*w*.4,vx:(Math.random()-.5)*.01,vy:.012+Math.random()*.03,s:.7+Math.random()*1.2,t0:t,life:600+Math.random()*700});
    let n=0;strokes.forEach(s=>n+=s.pts.length);while(n>3000&&strokes.length>1)n-=strokes.shift().pts.length;if(specks.length>300)specks.splice(0,specks.length-300);}
  function begin(e){if(DD.onBegin)DD.onBegin();cur={id:e.pointerId,pts:[],chalk:C.chalk,col:C.blue,end:0,touch:e.pointerType==='touch'};strokes.push(cur);add(e);kick();}
  function end(){if(cur){cur.end=performance.now();cur=null;kick();}}
  function trace(g,P,k){const n=P.length;g.lineCap=g.lineJoin='round';
    if(n===1){g.beginPath();g.arc(P[0].x,P[0].y,P[0].w*k/2,0,7);g.fillStyle=g.strokeStyle;g.fill();return}
    let px=P[0].x,py=P[0].y;for(let i=1;i<n;i++){const last=i===n-1,ex=last?P[i].x:(P[i].x+P[i+1].x)/2,ey=last?P[i].y:(P[i].y+P[i+1].y)/2;
      g.beginPath();g.moveTo(px,py);if(last)g.lineTo(ex,ey);else g.quadraticCurveTo(P[i].x,P[i].y,ex,ey);g.lineWidth=P[i].w*k;g.stroke();px=ex;py=ey;}}
  function draw(t){x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,cv.width,cv.height);
    strokes=strokes.filter(s=>!s.end||t-s.end<LIFE+(RM?0:FADE));specks=specks.filter(s=>t-s.t0<s.life);
    const T=[dpr,0,0,dpr,-scrollX*dpr,-scrollY*dpr];
    for(const s of strokes){const age=s.end?t-s.end:0,a=age<LIFE?1:1-(age-LIFE)/FADE;
      ox.setTransform(1,0,0,1,0,0);ox.clearRect(0,0,oc.width,oc.height);ox.setTransform(...T);
      if(s.chalk){const pt=pattern();pt.setTransform(new DOMMatrix());ox.strokeStyle=pt;ox.globalAlpha=.95;trace(ox,s.pts,1);pt.setTransform(new DOMMatrix([1,0,0,1,37,19]));ox.globalAlpha=.7;trace(ox,s.pts,.5);ox.globalAlpha=1;}
      else{ox.strokeStyle=s.col;trace(ox,s.pts,1);}
      x.globalAlpha=a;x.drawImage(oc,0,0);}
    x.globalAlpha=1;x.setTransform(...T);x.fillStyle=C.blue;
    for(const s of specks){const age=t-s.t0;x.globalAlpha=.8*(1-age/s.life);x.fillRect(s.x+s.vx*age,s.y+s.vy*age+age*age*.00002,s.s,s.s);}
    x.globalAlpha=1;}
  function loop(t){raf=0;draw(t);if(strokes.length||specks.length)raf=requestAnimationFrame(loop);}
  function kick(){if(!raf)raf=requestAnimationFrame(loop)}
  function startable(t){return t instanceof Element&&t.matches(OK)&&!t.closest(NO)}
  document.addEventListener('pointerdown',e=>{if(cur||!e.isPrimary||e.button!==0||!startable(e.target))return;
    if(e.pointerType==='touch'){clearTimeout(pend&&pend.tm);pend={pointerId:e.pointerId,pointerType:'touch',clientX:e.clientX,clientY:e.clientY};
      pend.tm=setTimeout(()=>{if(pend){begin(pend);pend=null}},350);return;}
    e.preventDefault();begin(e);});
  addEventListener('pointermove',e=>{
    if(pend&&e.pointerId===pend.pointerId){if(Math.hypot(e.clientX-pend.clientX,e.clientY-pend.clientY)>8){clearTimeout(pend.tm);pend=null}return;}
    if(cur&&e.pointerId===cur.id){const es=e.getCoalescedEvents?e.getCoalescedEvents():[];(es.length?es:[e]).forEach(add);kick();}},{passive:true});
  const stop=e=>{if(pend&&e.pointerId===pend.pointerId){clearTimeout(pend.tm);pend=null}if(cur&&e.pointerId===cur.id)end();};
  addEventListener('pointerup',stop);addEventListener('pointercancel',stop);
  document.addEventListener('touchmove',e=>{if(cur&&cur.touch)e.preventDefault()},{passive:false});
  document.addEventListener('contextmenu',e=>{if(cur)e.preventDefault()});
  document.addEventListener('selectstart',e=>{if(cur)e.preventDefault()});
  size();
  const DD={clear(){strokes=[];specks=[];cur=null;pat=null;kick();},resize(wide){if(cv.width!==Math.round(innerWidth*dpr)||cv.height!==Math.round(innerHeight*dpr))size();if(wide)this.clear();kick();}};
  return DD;
})();

/* ---------- the doodle demo: a cursor draws, the line fades; three plays at most, never after a real doodle ---------- */
(function(){const d=$('#demo');if(!d||RM||!window.IntersectionObserver||!(window.CSS&&CSS.supports&&CSS.supports('offset-distance','0%')))return;
  let plays=0,on=false,dead=false;const cur=d.querySelector('.cur');root.classList.add('js-demo');d.dataset.v='0';
  const kill=()=>{if(dead)return;dead=true;d.classList.add('gone');setTimeout(()=>{d.classList.remove('play');root.classList.remove('js-demo')},600);};
  DD.onBegin=kill;
  let started=false;const go=()=>{if(dead)return;d.classList.remove('play');void d.offsetWidth;d.classList.add('play');d.classList.toggle('paused',!on);};
  cur.addEventListener('animationend',e=>{if(e.target!==cur||dead)return;if(++plays>=3){kill();return;}d.dataset.v=String(plays%3);go();});
  new IntersectionObserver(es=>es.forEach(e=>{on=e.isIntersecting&&getComputedStyle(d).display!=='none';if(on&&!started){started=true;setTimeout(go,900);}else d.classList.toggle('paused',!on);}),{threshold:.6}).observe(d);
})();

let themeKey='';
function onTheme(){const k=isDark()?'d':'l';syncFold();if(k===themeKey)return;themeKey=k;readC();DD.clear();renderAll();notes();}
function start(){
  themeKey=isDark()?'d':'l';readC();syncFold();
  root.classList.add('js');
  renderAll();notes();
  new MutationObserver(onTheme).observe(root,{attributes:true,attributeFilter:['data-theme']});
  mqDark.addEventListener('change',()=>{if(!root.getAttribute('data-theme'))onTheme()});
  $$('.notes a').forEach((a,i)=>{const go=()=>pop(byEl.get(a.closest('.ruled')).svg,`.ink [data-k="a${i}"] path`);a.addEventListener('pointerenter',go);a.addEventListener('focus',go);});
  if(RM||!window.IntersectionObserver){items.forEach(it=>{it.prog=1;apply(it,true)});}
  else{
    const io=new IntersectionObserver(es=>{es.forEach(e=>{const it=byEl.get(e.target);if(e.isIntersecting)vis.add(it);else{vis.delete(it);it.prog=e.boundingClientRect.top>0?0:1;apply(it);}});kick();});
    items.forEach(it=>io.observe(it.el));addEventListener('scroll',kick,{passive:true});
    const nio=new IntersectionObserver(es=>es.forEach(e=>{const x=anns.find(a=>a.el===e.target);annVis.set(e.target,e.isIntersecting);if(!x)return;e.isIntersecting?x.show():x.hide();}),{rootMargin:'0px 0px -12% 0px'});
    anns.forEach(x=>nio.observe(x.el));
    items.filter(it=>!['ruled','thesis','sheet'].includes(it.kind)).forEach(it=>{
      const sub=it.kind==='card'&&byEl.get(it.el.querySelector('[data-sketch="pj"]'));
      const wob=()=>{it.seed=1+(Math.random()*9e4|0);render(it);if(sub){sub.seed=1+(Math.random()*9e4|0);render(sub);}};
      it.el.addEventListener('pointerenter',e=>{if(e.buttons)return;it.hot=it.kind==='card';wob()});it.el.addEventListener('focusin',()=>{if(it.hot)return;it.hot=it.kind==='card';wob()});
      if(it.kind==='card'){const off=()=>{it.hot=false;render(it)};it.el.addEventListener('pointerleave',off);it.el.addEventListener('focusout',e=>{if(!it.el.contains(e.relatedTarget))off()});}
    });
  }
  // re-measure when the width changes: sketches and the hero / heading marks
  let t,lastW=root.clientWidth;
  const onSize=()=>{clearTimeout(t);t=setTimeout(()=>{const w=root.clientWidth;DD.resize(w!==lastW);if(w===lastW)return;lastW=w;items.forEach(it=>{it.y0=null});renderAll();notes();kick();},160)};
  addEventListener('resize',onSize);if(window.ResizeObserver)new ResizeObserver(onSize).observe(root);
}
syncFold();
(document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(start);
})();
