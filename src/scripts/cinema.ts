const film = document.querySelector<HTMLElement>('#film')!;
const scenes = [...document.querySelectorAll<HTMLElement>('[data-scene]')];
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const shortViewport = matchMedia('(max-height: 540px)');
const staticMode = () => reduced.matches || shortViewport.matches;
const small = matchMedia('(max-width: 800px)');
const dialog = document.querySelector<HTMLDialogElement>('#chapters-dialog')!;
const rail = [...document.querySelectorAll<HTMLButtonElement>('.scene-rail button')];
const progress = document.querySelector<HTMLElement>('#film-progress')!;
let current = -1, position = 0, target = 0, raf = 0, step = innerHeight * 1.15;
const clamp = (v:number,min=0,max=1) => Math.min(max,Math.max(min,v));
const smooth = (x:number) => x*x*(3-2*x);
function setActive(index:number) {
  if (current === index) return;
  current = index;
  scenes.forEach((scene,i) => { scene.inert = !staticMode() && i !== index; scene.setAttribute('aria-hidden',String(!staticMode() && i !== index)); });
  rail.forEach((button,i) => i===index ? button.setAttribute('aria-current','step') : button.removeAttribute('aria-current'));
  document.querySelector('#scene-index')!.textContent = String(index).padStart(2,'0');
  document.querySelector('#scene-name')!.textContent = scenes[index].getAttribute('aria-label');
  document.querySelector<HTMLButtonElement>('[data-step="-1"]')!.disabled = index===0;
  document.querySelector<HTMLButtonElement>('[data-step="1"]')!.disabled = index===scenes.length-1;
  document.body.classList.toggle('film-light', index===1 || index===8 || (!small.matches && (index===3 || index===5)));
  // Load the next image before its transition; retain the native first-image priority.
  [index,index+1].forEach(i => scenes[i]?.querySelectorAll('img').forEach(img => img.loading='eager'));
}
function render() {
  if (staticMode()) return;
  position += (target-position)*.12;
  if (Math.abs(position-target)<.001) position=target;
  const index = Math.min(scenes.length-1,Math.floor(position+.5));
  setActive(index);
  scenes.forEach((scene,i) => {
    const distance = Math.abs(position-i);
    const opacity = 1-smooth(clamp((distance-.22)/.56));
    scene.style.opacity=String(opacity);
    scene.style.visibility=opacity>.001?'visible':'hidden';
    scene.style.pointerEvents=i===index?'auto':'none';
    const img=scene.querySelector<HTMLElement>('.scene-image img');
    if (img && distance<1.2) img.style.transform=`scale(${1.035+clamp(position-i,-1,1)*.025}) translateY(${(position-i)*-1.5}%)`;
  });
  const line=document.querySelector<SVGPathElement>('#route-draw');
  if(line) line.style.strokeDashoffset=String(1-clamp((position-.6)/.4));
  progress.style.transform=`scaleX(${position/(scenes.length-1)})`;
  raf= Math.abs(position-target)>.001 ? requestAnimationFrame(render) : 0;
}
function onScroll(){ if(staticMode()) return; target=clamp(scrollY/step,0,scenes.length-1); if(!raf) raf=requestAnimationFrame(render); }
function goTo(index:number,immediate=false){
  index=clamp(index,0,scenes.length-1);
  if(staticMode()){ scenes[index].scrollIntoView({behavior:'instant',block:'start'});return; }
  if(immediate){ position=index;target=index; }
  window.scrollTo({top:index*step,behavior:immediate?'instant':'smooth'});
  if(immediate) { setActive(index);render(); }
}
function setup(){
  document.body.classList.toggle('reading-motion',staticMode());
  step=innerHeight*1.15;
  film.style.height=staticMode()?'auto':`${(scenes.length-1)*step+innerHeight}px`;
  current=-1;
  if(staticMode()){cancelAnimationFrame(raf);raf=0;scenes.forEach(s=>{s.inert=false;s.removeAttribute('aria-hidden');s.querySelectorAll('img').forEach(img=>img.style.transform='');});}
  else onScroll();
}
addEventListener('scroll',onScroll,{passive:true});
addEventListener('resize',()=>{const previous=position;setup();if(!staticMode())goTo(previous,true);});
reduced.addEventListener('change',setup);
shortViewport.addEventListener('change',setup);
small.addEventListener('change',()=>{const old=current;current=-1;setActive(Math.max(0,old));});
document.querySelectorAll<HTMLButtonElement>('[data-go]').forEach(b=>b.addEventListener('click',()=>goTo(Number(b.dataset.go))));
document.querySelectorAll<HTMLButtonElement>('[data-step]').forEach(b=>b.addEventListener('click',()=>goTo(current+Number(b.dataset.step))));
document.querySelector('#open-chapters')!.addEventListener('click',()=>{dialog.showModal();document.body.style.overflow='hidden';});
document.querySelector('#close-chapters')!.addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>document.body.style.overflow='');
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
addEventListener('keydown',e=>{
  if(dialog.open||staticMode()||e.altKey||e.metaKey||e.ctrlKey)return;
  if((e.target as HTMLElement).closest('a,button,input,textarea,select'))return;
  if(['ArrowDown','ArrowRight','PageDown','ArrowUp','ArrowLeft','PageUp','Home','End',' '].includes(e.key)){
    e.preventDefault();const n=e.key==='Home'?0:e.key==='End'?9:current+(['ArrowUp','ArrowLeft','PageUp'].includes(e.key)?-1:1);goTo(n);
  }
});
const cursor=document.querySelector<HTMLElement>('.film-cursor')!;
addEventListener('pointermove',e=>{if(e.pointerType!=='mouse'||reduced.matches)return;cursor.classList.add('visible');const over=Boolean((e.target as HTMLElement).closest('a,button'));cursor.classList.toggle('over-link',over);cursor.style.transform=`translate(${e.clientX-(over?23:12)}px,${e.clientY-(over?23:12)}px)`;});
document.addEventListener('pointerleave',()=>cursor.classList.remove('visible'));
const departure=document.querySelector<HTMLElement>('#departure')!;
const remaining=Math.floor((Date.parse('2026-10-16T23:50:00-03:00')-Date.now())/86400000);
if(remaining>=1)departure.textContent=`FALTAM ${remaining} DIAS · EMBARQUE EM 16 DE OUTUBRO`;
setup();
// Debug / visual review: ?cena=0..9. Does not expose personal trip data.
const debug=new URLSearchParams(location.search).get('cena');
if(debug!==null&&/^\d$/.test(debug))requestAnimationFrame(()=>goTo(Number(debug),true));
Object.assign(window,{eurotripFilm:{goTo:(scene:number)=>goTo(scene,true),getScene:()=>current}});
