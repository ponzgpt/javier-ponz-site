// The notebook's behaviour: rough.js sketches scrubbed by scroll, Rough Notation marks, the corner fold
// (theme), the p. 6 map, copy-to-clipboard tabs, doodles. Progressive enhancement: the page reads fully
// without it. Strings come from the page's own JSON block (#nb-copy), rendered from src/data/copy.mjs.
import rough from 'roughjs';
import { annotate, annotationGroup } from 'rough-notation';
const RoughNotation = { annotate, annotationGroup };
(function(){
const NS='http://www.w3.org/2000/svg', root=document.documentElement, $=s=>document.querySelector(s), $$=(s,e)=>[...(e||document).querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches, mqDark=matchMedia('(prefers-color-scheme: dark)');
const clamp=v=>v<0?0:v>1?1:v, ease=t=>t*t*(3-2*t), W_=(a,b)=>Object.assign({},a,b);
let C={};
const T_=JSON.parse(document.getElementById("nb-copy").textContent), M_=T_.map;
function readC(){const cs=getComputedStyle(root),g=n=>cs.getPropertyValue('--'+n).trim();
  C={paper:g('paper'),ink:g('sk-ink'),ink2:g('ink-2'),blue:g('mark'),wash:g('wash'),hatch:g('hatch'),card:g('card'),ghost:g('ghost'),faint:g('faint'),chalk:g('chalk')==='1'};}

/* ---------- theme: the folded corner turns the page (session only) ---------- */
const fold=$('#fold');
try{const s=sessionStorage.getItem('nb-theme');if(s==='dark'||s==='light')root.setAttribute('data-theme',s)}catch(e){}
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
const blue=()=>({stroke:C.blue}), dash={strokeLineDash:[6,7]}, pencil=()=>({stroke:C.ink2,strokeWidth:1.3,strokeLineDash:[7,6],roughness:.45,disableMultiStroke:true});
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
    arrow(p,s){const b=p[p.length-1],q=p[p.length-2],t=Math.atan2(b[1]-q[1],b[0]-q[0]);(p.length>2?this.curve(p,s):this.line(q[0],q[1],b[0],b[1],s));
      return this.lines([[b[0]-10*Math.cos(t+.45),b[1]-10*Math.sin(t+.45)],b,[b[0]-10*Math.cos(t-.45),b[1]-10*Math.sin(t-.45)]],W_(s,{strokeLineDash:null}));},
    rrect(x,y,w,h,r,s){return this.path(`M${x+r} ${y}H${x+w-r}Q${x+w} ${y} ${x+w} ${y+r}V${y+h-r}Q${x+w} ${y+h} ${x+w-r} ${y+h}H${x+r}Q${x} ${y+h} ${x} ${y+h-r}V${y+r}Q${x} ${y} ${x+r} ${y}Z`,s);},
    text(x,y,str,cls,anchor){const t=document.createElementNS(NS,'text');t.setAttribute('x',x);t.setAttribute('y',y);t.setAttribute('class',cls);t.setAttribute('text-anchor',anchor||'start');
      str.split('\n').forEach((l,i)=>{const s=document.createElementNS(NS,'tspan');s.setAttribute('x',x);if(i)s.setAttribute('dy','1.3em');s.textContent=l;t.appendChild(s)});lab.appendChild(t);return t;},
    // the doodles: machines (k scales the drawing, never the stroke), clouds, models
    tower(x,y,s,k){k=k||1;const t=W_(s,{strokeWidth:1,roughness:.6}),R=(u,v,w,h,q)=>this.rect(x+u*k,y+v*k,w*k,h*k,q||t),O=(u,v,d,q)=>this.circ(x+u*k,y+v*k,d*k,q||t),L=(a,b,c,d,q)=>this.line(x+a*k,y+b*k,x+c*k,y+d*k,q||t);
      R(0,0,64,96,s);R(8,14,48,74);O(32,7,5);L(10,7,24,7);L(40,7,54,7);
      O(23,30,20);O(23,30,5);L(17,24,29,36);L(17,36,29,24);R(39,20,3,20);R(45,20,3,20);
      R(12,49,40,14,W_(t,solid()));O(22,56,9);O(42,56,9);R(12,73,40,11);[19,26,33].forEach(u=>L(u,76,u,81));
      L(8,96,8,101,s);L(56,96,56,101,s);},
    laptop(cx,yb,s,k){k=k||1;const t=W_(s,{strokeWidth:1,roughness:.6}),X=u=>cx+u*k,Y=v=>yb+v*k;this.rect(X(-48),Y(-74),96*k,64*k,s);this.rect(X(-41),Y(-68),82*k,52*k,t);
      [[0,30],[8,24],[8,14],[0,20]].forEach(([i,l],j)=>this.line(X(-34+i),Y(-59+j*9),X(-34+i+l),Y(-59+j*9),t));
      this.poly([[X(-50),Y(-10)],[X(50),Y(-10)],[X(62),Y(0)],[X(-62),Y(0)]],s);this.line(X(-10),Y(-4.5),X(10),Y(-4.5),t);},
    rack(cx,yb,w,s,k,u){k=k||1;u=u||1;const h=40*k,x=cx-w/2,top=yb-h*u,e=8*k,t=W_(s,{strokeWidth:1,roughness:.6}),bw=19*k,nb=Math.floor((w-48*k)/bw);
      [x-e,x+w].forEach(ex=>{this.rect(ex,top,e,h*u,t);this.circ(ex+e/2,top+9*k,3*k,t);this.circ(ex+e/2,yb-9*k,3*k,t);});
      for(let j=0;j<u;j++){const y=top+j*h;this.rect(x,y,w,h,s);for(let i=0;i<nb;i++){this.rect(x+8*k+i*bw,y+7*k,15*k,h-14*k,t);this.line(x+11*k+i*bw,y+h-12*k,x+20*k+i*bw,y+h-12*k,t);}
        for(let i=0;i<3;i++)this.circ(x+w-24*k+i*8*k,y+13*k,4.5*k,i||j?t:W_(t,{fill:s.stroke||C.blue,fillStyle:'solid'}));this.line(x+w-28*k,y+h-12*k,x+w-8*k,y+h-12*k,t);}},
    cloud(cx,cy,w,h,s){const x=cx-w/2,y=cy-h/2;return this.path(`M${x+w*.18} ${y+h}C${x-w*.07} ${y+h} ${x-w*.05} ${y+h*.42} ${x+w*.2} ${y+h*.46}C${x+w*.2} ${y+h*.02} ${x+w*.6} ${y-h*.1} ${x+w*.66} ${y+h*.3}C${x+w*.97} ${y+h*.14} ${x+w*1.08} ${y+h*.78} ${x+w*.84} ${y+h}Z`,s);},
    net(x,y,s,k){k=k||1;const t=W_(s,{strokeWidth:.9,roughness:.4,strokeLineDash:null}),L=[-8,0,8].map(v=>[x,y+v*k]),R=[-4,4].map(v=>[x+16*k,y+v*k]);
      L.forEach(a=>R.forEach(b=>this.line(a[0],a[1],b[0],b[1],t)));L.concat(R).forEach(q=>this.circ(q[0],q[1],5*k,W_(t,W_(solid(),{strokeWidth:1.1}))));},
  };
}
const rel=(el,r0)=>{const r=el.getBoundingClientRect();return{x:r.left-r0.left,y:r.top-r0.top,w:r.width,h:r.height,cx:r.left-r0.left+r.width/2,cy:r.top-r0.top+r.height/2}};
// the centre of the glyphs themselves, not of their line box (ethos numbers)
function glyph(el,r0){const g=document.createRange();g.selectNodeContents(el);const b=g.getBoundingClientRect(),cs=getComputedStyle(el),x=glyph.x||(glyph.x=document.createElement('canvas').getContext('2d'));
  x.font=`${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;const m=x.measureText(el.textContent);
  if(!m.fontBoundingBoxAscent)return{x:b.left-r0.left+b.width/2,y:b.top-r0.top+b.height*.46};
  const base=b.top+(b.height-m.fontBoundingBoxAscent-m.fontBoundingBoxDescent)/2+m.fontBoundingBoxAscent;
  return{x:b.left-r0.left+(m.actualBoundingBoxRight-m.actualBoundingBoxLeft)/2,y:base-r0.top-(m.actualBoundingBoxAscent-m.actualBoundingBoxDescent)/2};}
function place(b,q){const s=b.style;s.left=q[0]+'px';s.top=q[1]+'px';s.width=q[2]+'px';s.height=q[3]+'px';}

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
    const ky=rel(k,r0).y+rel(k,r0).h-4; p.line(10,ky,W-10,ky,{stroke:C.blue,strokeWidth:1.3,roughness:1.2});
    const y0=rel(ds,r0).y; for(let y=y0+22;y<=H-10;y+=28)p.line(10,y,W-10,y,{stroke:C.chalk?C.faint:C.hatch,strokeWidth:.9,roughness:.5,bowing:.3});},
  tabs(p,W,el){const r0=el.getBoundingClientRect(),rows={};$$('.tab',el).forEach(a=>{const r=rel(a,r0),on=a.getAttribute('aria-pressed')==='true',off=a.classList.contains('off');
      p.poly([[r.x+1,r.y+r.h],[r.x+6,r.y+2],[r.x+r.w-6,r.y+2],[r.x+r.w-1,r.y+r.h]],on?W_({strokeWidth:2,fill:C.wash,fillStyle:'hachure',hachureGap:5,fine:1},blue()):off?{stroke:C.faint,strokeWidth:1.3,roughness:1.2}:{strokeWidth:1.5,roughness:1.2});
      const k=Math.round(r.y+r.h);(rows[k]=rows[k]||[]).push(r);});
    Object.keys(rows).forEach(k=>{const rs=rows[k],x0=Math.min(...rs.map(r=>r.x)),x1=Math.max(...rs.map(r=>r.x+r.w));p.line(x0-4,+k,x1+4,+k,{strokeWidth:2.2,stroke:C.blue});});},
  btn(p,W,el){const H=el.clientHeight;p.rect(2,2,W-4,H-4,W_(W_({strokeWidth:2},blue()),{fill:C.wash,fillStyle:'hachure',hachureGap:6,fillWeight:1}));},
  frame(p,W,el){const H=el.clientHeight,h=el.querySelector('h3');p.rect(2,2,W-4,H-4,{strokeWidth:1.4});
    if(h){const r=rel(h,el.getBoundingClientRect());p.line(12,r.y+r.h+5,W-12,r.y+r.h+5,{stroke:C.blue,strokeWidth:1.3});}},
  tl(p,W,el){const r0=el.getBoundingClientRect(),pts=$$('.tl-dot',el).map(d=>{const r=rel(d,r0);return[r.cx,r.cy]}),n=pts.length;
    pts.forEach((q,i)=>{p.circ(q[0],q[1],18,i===0?dotHatch():W_(solid(),{strokeWidth:1.6}));
      if(i<n-1)p.line(q[0],q[1]+10,pts[i+1][0],pts[i+1][1]-10,{strokeWidth:1.6});});},
  // the notes list: a hand-ruled line under each row, an arrow that redraws on hover
  ruled(p,W,el){const r0=el.getBoundingClientRect(),rule={stroke:C.chalk?C.ink2:C.hatch,strokeWidth:1,roughness:.6,bowing:.4};
    $$('li',el).forEach((li,i)=>{const r=rel(li,r0),u=rel(li.parentNode,r0),ar=li.querySelector('.arr');
      if(ar){const q=rel(ar,r0),x=q.cx-6,y=q.cy+5;p.grp('a'+i);p.line(x,y,x+12,y-12,W_({strokeWidth:1.5},blue()));p.lines([[x+3,y-12],[x+12,y-12],[x+12,y-3]],W_({strokeWidth:1.5},blue()));p.grp();}
      p.line(u.x,r.y+r.h,u.x+u.w,r.y+r.h,rule);});},
  thesis(p,W,el){const r0=el.getBoundingClientRect(),n=el.querySelector('.num'),c=glyph(n,r0),H=el.clientHeight,d=n.offsetWidth<40?32:40;
    const ol=el.parentNode,cols=getComputedStyle(ol).gridTemplateColumns.split(' ').length,k=ol.children.length,i=[...ol.children].indexOf(el);
    p.ell(c.x,c.y,d,d-2,W_({strokeWidth:1.6,roughness:1.3},blue()));
    if(i+cols<k)p.line(rel(n,r0).x+6,H-1,W-6,H-1,{stroke:C.ink2,strokeWidth:1.1,roughness:.9,bowing:.6});},
  // p. 6: numbered circles joined by a pen line and an arrowhead
  steps(p,W,el){const r0=el.getBoundingClientRect(),ns=$$('.sn',el),c=ns.map(n=>glyph(n,r0)),d=ns[0].offsetHeight<40?32:40;
    c.forEach((q,i)=>{p.ell(q.x,q.y,d,d-2,W_({strokeWidth:1.6,roughness:1.3},blue()));if(!i)return;const a=c[i-1],dx=q.x-a.x,dy=q.y-a.y,l=Math.hypot(dx,dy)||1,u=dx/l,v=dy/l,g=d/2+6;
      p.arrow([[a.x+u*g,a.y+v*g],[q.x-u*g,q.y-v*g]],{strokeWidth:1.5});});},
  // language tabs: card stock in light (CSS); chalk outlines on the slate edge in dark
  lang(p,W,el){if(!C.chalk)return;const r0=el.getBoundingClientRect(),col=getComputedStyle(el).flexDirection==='column';
    $$('a',el).forEach(a=>{const {x,y,w,h}=rel(a,r0),on=a.hasAttribute('aria-current'),
      pts=col?[[x+w+6,y+1],[x+6,y+1],[x+1,y+7],[x+1,y+h-7],[x+6,y+h-1],[x+w+6,y+h-1]]:[[x+1,y-6],[x+1,y+h-7],[x+6,y+h-1],[x+w-6,y+h-1],[x+w-1,y+h-7],[x+w-1,y-6]];
      p.poly(pts,{fill:C.paper,fillStyle:'solid',strokeWidth:on?1.3:1,roughness:.9,stroke:on?C.ink:C.ink2});if(on)p.poly(pts,{fill:C.wash,fillStyle:'solid',stroke:'none'});});},
  map:(p,W,el,it)=>MAP.draw(p,W,el,it)
};

/* ---------- one card component, one picker: the p. 6 map ---------- */
function card(it,d){const b=it.el.querySelector('.mc-body');it.el.classList.toggle('on',!!d);
  b.innerHTML=d?`<h3>${d.t}</h3>${d.p.map(x=>`<p>${x}</p>`).join('')}${d.n?`<p class="small">${d.n}</p>`:''}${d.u?`<p class="go"><a href="${d.u}"${d.u[0]==='#'?'':' target="_blank" rel="noreferrer"'}>${d.ul} →</a></p>`:''}`:'';
  if(d)render(it);}
function picker(stage,list,on){
  const P={sel:null,hov:null,btn:{},cur(){return this.hov||this.sel},set(k,v){if(this[k]===v)return;this[k]=v;on()}};
  list.forEach(n=>{const b=document.createElement('button');b.type='button';b.className='node';b.dataset.id=n.id;b.innerHTML=n.html;
    b.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch')P.set('hov',n.id)});b.addEventListener('pointerleave',()=>P.set('hov',null));
    b.addEventListener('focus',()=>P.set('sel',n.id));b.addEventListener('click',()=>P.set('sel',n.id));stage.appendChild(b);P.btn[n.id]=b;});
  stage.addEventListener('keydown',e=>{if(e.key==='Escape'){P.hov=null;P.set('sel',null)}});
  document.addEventListener('pointerdown',e=>{if(P.sel&&!stage.contains(e.target)&&!(e.target.closest&&e.target.closest('.mcard')))P.set('sel',null)});
  return P;}
function pop(svg,sel){if(RM)return;svg.querySelectorAll(sel).forEach((q,i)=>{if((q.getAttribute('fill')||'none')!=='none'||q.dataset.dash)return;
  q.animate([{strokeDashoffset:+q.dataset.len||0},{strokeDashoffset:q.style.strokeDashoffset||0}],{duration:420,delay:Math.min(i*14,300),easing:'cubic-bezier(.3,.6,.3,1)',fill:'backwards'});});}

/* ---------- p. 6: the machines and what runs on each; facts are read from the no-JS list beside it ---------- */
// the map: node ids and layers here; their labels come from the copy module
const NODES=[['syl','am'],['psy','am'],['sab','am'],['mac','hw'],['cc','am'],['oll','am'],['ws','hw'],['loc','am'],['llm','am'],['lab','plan'],
  ['vps','hw srv'],['sites','srv']].map(([id,L])=>({id,L:L.split(' '),t:M_.nodes[id][0],s:M_.nodes[id][1]}));
const N=Object.fromEntries(NODES.map(n=>[n.id,n])), SH={loc:'agent',cc:'agent',llm:'model',oll:'model',psy:'tag',sab:'tag',sites:'stack',lab:'lab'};
const LINK={syl:['https://github.com/NousResearch/hermes-agent',M_.hermesLink],psy:['https://github.com/ponzgpt/psychopomp','github.com/ponzgpt/psychopomp'],sab:['https://github.com/ponzgpt/sabbath','github.com/ponzgpt/sabbath'],sites:['#work',M_.sitesLink]};
const EDGES=[['mac','syl','am'],['syl','psy','am'],['syl','sab','am'],['mac','ws','hw'],['mac','vps','srv'],['ws','loc','am'],['ws','llm','am'],['ws','lab','plan'],['mac','cc','am'],['mac','oll','am'],['vps','sites','srv'],['ws','mac','plan']];
const ADJ={};NODES.forEach(n=>ADJ[n.id]=new Set());EDGES.forEach(([a,b])=>{ADJ[a].add(b);ADJ[b].add(a)});
const MAP={layer:'all',
  inL(id){return this.layer==='all'||N[id].L.includes(this.layer)},
  ns(id){const c=this.P.cur();if(c)return id===c?'sel':ADJ[c].has(id)?'near':'dim';return this.inL(id)?'on':'dim'},
  es(e){const c=this.P.cur();if(c)return(e[0]===c||e[1]===c)?'hot':'dim';return(this.layer==='all'||e[2]===this.layer)?'on':'dim'},
  wide(W){const k=1.4,c1=Math.round(W*.15),c2=Math.round(W/2),c3=W-c1,yb=300,y0=yb+124,r={},sh={},E=[],m=(c1+c2-28)/2,sp=(c,a,b,d)=>({pts:[[c-112,a],[c-112,b],[c-104,b]],dash:d});
    sh.syl=['cloud',c2,72,220,112];r.syl=[c2-80,36,160,76];r.psy=[c2+152,24,132,34,'tag'];r.sab=[c2+152,76,132,34,'tag'];
    sh.ws=['tower',c1-45,yb-141,k];sh.mac=['laptop',c2,yb,k];sh.vps=['rack',c3,yb,196,1.3,2];
    [['ws',c1],['mac',c2],['vps',c3]].forEach(([id,c])=>r[id]=[c-115,yb-150,230,242,'bot']);
    const it=(id,c,y,h,q)=>r[id]=[c-100,y,214,h,q];it('loc',c1,y0,40);it('llm',c1,y0+54,44,'lft');it('lab',c1,y0+112,48,'lft');it('cc',c2,y0,40);it('oll',c2,y0+54,48,'lft');r.sites=[c3-85,y0,170,56];
    E[0]={pts:[[c2,yb-114],[c2,134]],arrow:1,lab:[[c2+10,yb-118,M_.talksTo,'start']]};
    E[1]={pts:[[c2+112,58],[c2+166,41]]};E[2]={pts:[[c2+110,90],[c2+166,93]]};
    E[3]={pts:[[c1+54,yb-80],[c2-80,yb-80]],lab:[[m,yb-108,'Tailscale','middle'],[m,yb-90,'Sunshine / Moonlight','middle']]};
    E[11]={pts:[[c1+54,yb-46],[c2-80,yb-46]],dash:1,arrow:1,lab:[[m,yb-24,M_.inference,'middle']]};
    E[4]={pts:[[c2+82,yb-46],[c3-114,yb-46]],arrow:1,lab:[[(c2+c3)/2,yb-56,M_.deploys,'middle']]};
    E[5]=sp(c1,yb+96,y0+20);E[5].lab=[[c1-104,y0-8,M_.talksTo,'start']];E[6]=sp(c1,y0+20,y0+76);E[7]=sp(c1,y0+76,y0+136,1);
    E[8]=sp(c2,yb+96,y0+20);E[9]=sp(c2,y0+20,y0+78);E[10]=sp(c3+19,yb+96,y0+28);
    return{r,sh,E,lb:[[c3,y0+86,M_.actions,'middle']],H:y0+180};},
  tree(W){const dc=80,iw=Math.min(240,W-52),r={},sh={},E=[],lb=[],sp=(a,b,d)=>({pts:[[36,a],[36,b],[46,b]],dash:d});let y=4;
    sh.syl=['cloud',dc,y+38,124,70];r.syl=[4,y,W-8,76,'hdr'];const sy=y+38;y+=88;r.psy=[44,y,112,32,'tag'];r.sab=[166,y,112,32,'tag'];
    E[1]={pts:[[56,sy+30],[56,y+10]]};E[2]={pts:[[132,sy+24],[178,y+10]]};y+=74;
    const mt=y,mm=y+40;sh.mac=['laptop',dc,y+76];r.mac=[4,y,W-8,84,'hdr'];const l0=y-14;y+=96;
    r.cc=[48,y,iw,40];E[8]=sp(mt+86,y+20);y+=52;r.oll=[48,y,iw,48,'lft'];E[9]=sp(y-32,y+24);y+=60;
    const l3=y+18;y+=70;
    const wt=y,wm=y+48;sh.ws=['tower',dc-32,y];r.ws=[4,y,W-8,104,'hdr'];y+=116;
    r.loc=[48,y,Math.min(150,iw),40];E[5]=sp(wt+106,y+20);E[5].lab=W>=270?[[204,y+26,M_.talksTo,'start']]:0;y+=52;
    r.llm=[48,y,iw,44,'lft'];E[6]=sp(y-32,y+22);y+=56;r.lab=[48,y,iw,48,'lft'];E[7]=sp(y-34,y+24,1);y+=60;
    const l4=y+26;y+=40;
    const vt=y,vm=y+36;sh.vps=['rack',dc,y+58,112];r.vps=[4,y,W-8,84,'hdr'];y+=96;r.sites=[48,y,Math.min(200,iw),56];E[10]=sp(vt+86,y+28);
    lb.push([48,y+80,M_.actions,'start']);
    E[0]={pts:[[dc-48,mm-12],[10,mm-12],[10,sy],[dc-62,sy]],arrow:1,lab:[[46,l0,M_.talksTo,'start']]};E[3]={pts:[[dc-48,mm],[10,mm],[10,wm],[dc-32,wm]],lab:[[46,l3,'Tailscale · Sunshine / Moonlight','start']]};
    E[11]={pts:[[dc-48,mm+10],[18,mm+10],[18,wm+14],[dc-32,wm+14]],dash:1,arrow:1,lab:[[46,l3+24,M_.inferenceTree,'start']]};E[4]={pts:[[dc-48,mm+20],[26,mm+20],[26,vm],[dc-58,vm]],arrow:1,lab:[[46,l4,M_.deploys,'start']]};
    return{r,sh,E,lb,H:y+120};},
  draw(p,W,el,it){const L=W<860?this.tree(W):this.wide(W),P=this.P;
    if(it.lw!==W){it.lw=W;NODES.forEach(n=>place(P.btn[n.id],L.r[n.id]));}
    NODES.forEach(n=>P.btn[n.id].className=`node ${L.r[n.id][4]||''} ${this.ns(n.id)}`);
    const NS_={sel:{stroke:C.blue,strokeWidth:2.2},near:{stroke:C.blue,strokeWidth:1.7},on:{},dim:{stroke:C.faint,strokeWidth:1.1}};
    const ES_={hot:{stroke:C.blue,strokeWidth:1.8},on:{stroke:C.ink2,strokeWidth:1.3},dim:{stroke:C.faint,strokeWidth:1}};
    NODES.forEach(n=>{const st=this.ns(n.id),[x,y,w,h]=L.r[n.id],d=L.sh[n.id],hot=st==='sel'||st==='near';
      const s=W_(NS_[st],n.L[0]==='plan'?W_(pencil(),hot?{stroke:C.blue}:st==='dim'?{stroke:C.faint}:{}):{});
      const g=p.grp(n.id);if(hot)g.setAttribute('data-hot',1);
      switch(d?d[0]:SH[n.id]){
        case 'cloud':p.cloud(d[1],d[2],d[3],d[4],s);break; case 'tower':p.tower(d[1],d[2],s,d[3]);break;
        case 'laptop':p.laptop(d[1],d[2],s,d[3]);break; case 'rack':p.rack(d[1],d[2],d[3],s,d[4],d[5]);break;
        case 'agent':p.rrect(x,y,w,h,16,s);break; case 'model':p.net(x+10,y+h/2,s,1);break;
        case 'tag':p.poly([[x+14,y],[x+w,y],[x+w,y+h],[x+14,y+h],[x,y+h/2]],s);p.circ(x+12,y+h/2,6,W_(s,{strokeWidth:1}));break;
        case 'stack':p.rect(x+8,y-8,w,h,W_(s,{strokeWidth:1}));p.rect(x+4,y-4,w,h,W_(s,solid()));p.rect(x,y,w,h,W_(s,solid()));p.line(x+8,y+12,x+w-8,y+12,W_(s,{stroke:st==='dim'?C.faint:C.blue,strokeWidth:1}));break;
        case 'lab':p.rect(x+3,y+7,28,15,s);p.rect(x+3,y+26,28,15,s);break;}});
    EDGES.forEach((e,i)=>{const g=L.E[i];if(!g)return;const st=this.es(e),s=W_(ES_[st],g.dash?{strokeLineDash:[7,6],roughness:.45,disableMultiStroke:true}:{}),grp=p.grp('e'+i);if(st==='hot')grp.setAttribute('data-hot',1);
      g.arrow?p.arrow(g.pts,s):p.lines(g.pts,s);(g.lab||[]).forEach(([x,y,t,a])=>p.text(x,y,t,'sk-edge halo'+(st==='hot'?' hot':''),a));});
    p.grp();L.lb.forEach(([x,y,t,a])=>p.text(x,y,t,'sk-type',a));
    const sec=el.closest('.spread'),mp=el.closest('.map');sec.style.setProperty('--rh',Math.max(0,mp.getBoundingClientRect().top-sec.getBoundingClientRect().top-24)+'px');
    el.style.height=L.H+'px';return L.H;},
  update(){const key=this.P.cur()+'|'+this.layer;if(key===this.key)return;this.key=key;render(this.it);pop(this.it.svg,'.ink [data-hot] path');
    const c=this.P.cur();if(!c)return card(this.cardIt,null);const n=N[c],u=LINK[c];
    const T=n.t.replace('\n',' '),T2=T.replace(/ · /g,' '+M_.and+' ');
    const facts=$$(`#stack-list [data-n~="${c}"]`).map(li=>{let f=li.textContent.trim();
      if(f.startsWith(T2)&&!new RegExp('^\\s*'+M_.and+'(\\s|$)').test(f.slice(T2.length))){f=f.slice(T2.length).replace(/^[\s,:]+/,'');f=f&&f[0].toUpperCase()+f.slice(1);}return f&&f+'.';}).filter(Boolean);
    card(this.cardIt,{t:T,p:facts,n:M_.connected+' '+[...ADJ[c]].map(k=>N[k].t.replace('\n',' ')).join(', ')+'.',u:u&&u[0],ul:u&&u[1]});},
  init(){this.P=picker($('#stage'),NODES.map(n=>({id:n.id,html:`<b>${n.t.replace('\n','<br>')}</b>${n.s?`<small>${n.s.replace(/\n/g,'<br>')}</small>`:''}`})),()=>this.update());
    $$('.filters .tab').forEach(b=>b.addEventListener('click',()=>{this.layer=b.dataset.layer;$$('.filters .tab').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));render(byEl.get(b.parentNode));this.update();}));}
};

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
MAP.it=byEl.get($('#stage'));MAP.cardIt=byEl.get($('#map .mcard'));
const vis=new Set();let raf=0;
// sketches that start inside the first screen finish where they sit, so the first screen is complete
const target=(it,vh)=>{if(it.kind==='lang')return 1;const t=it.el.getBoundingClientRect().top,y0=it.y0==null?(it.y0=t+scrollY):it.y0,e=y0<vh*.95?Math.max(vh*.55,y0+2):vh*.55;return clamp((e+vh*.4-t)/(vh*.4))};
function frame(){raf=0;const vh=innerHeight,arr=[...vis],T=arr.map(it=>target(it,vh));let moving=false;   // read all, then write
  arr.forEach((it,i)=>{const d=T[i]-it.prog;if(Math.abs(d)<.003)it.prog=T[i];else{it.prog+=d*.2;moving=true;}apply(it);});
  if(moving)kick();}
function kick(){if(!raf&&vis.size&&!RM)raf=requestAnimationFrame(frame)}
// inner sketches first, so the outlines around them measure their final height
function renderAll(){for(let i=items.length-1;i>=0;i--)if(items[i].kind!=='frame'||items[i].el.classList.contains('on'))render(items[i]);}

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
  const OK='html,body,.book,.spread,.main,.margin,.cover-main,.hero,.lw,.h-row,.cards,.plugs,.ruled,.notes,.ethos,.tl-wrap,.tl,.tl li,.links-row,.map,.slot,.sk,.sk *';
  const NO='a,button,input,textarea,select,label,summary,[contenteditable],.stage,.photo,.fold,nav';
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
  root.classList.add('js');MAP.init();
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
    items.filter(it=>!['map','frame','ruled','thesis'].includes(it.kind)).forEach(it=>{
      const wob=()=>{it.seed=1+(Math.random()*9e4|0);render(it)};
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
