type Photo = { src:string; alt:string; author:string; credit:string; source:string };
const motion = matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll<HTMLElement>('[data-gallery]').forEach(root => {
 const photos:Photo[] = JSON.parse(root.dataset.photos || '[]');
 const controls = document.querySelector<HTMLElement>(`[data-gallery-controls="${root.dataset.gallery}"]`);
 if (!controls || photos.length < 2) return;
 const layers = [...root.querySelectorAll<HTMLImageElement>('.gallery-photo')];
 const scene = root.closest<HTMLElement>('[data-scene]');
 const pause = controls.querySelector<HTMLButtonElement>('[data-photo-pause]')!;
 const counter = controls.querySelector<HTMLElement>('[data-photo-count]')!;
 const announcement = root.querySelector<HTMLElement>('.gallery-announcement')!;
 let index=0, layer=0, timer:ReturnType<typeof setTimeout>|undefined, paused=motion.matches, visible=false, focused=false, request=0;
 const active = () => visible && !document.hidden && (!scene || scene.getAttribute('aria-hidden')!=='true');
 const stop = () => { clearTimeout(timer); timer=undefined; };
 const label = () => {pause.textContent=paused?'▷':'Ⅱ';pause.setAttribute('aria-label',`${paused?'Iniciar':'Pausar'} troca automática de fotos`);pause.setAttribute('aria-pressed',String(paused));};
 const schedule = () => {stop();if(active()&&!paused&&!focused)timer=setTimeout(()=>show(index+1,false),8000);};
 async function show(next:number, manual:boolean) {
  stop(); const token=++request; next=(next+photos.length)%photos.length;
  if(manual){paused=true;label();}
  const photo=photos[next];const preload=new Image();preload.src=photo.src;
  try {await preload.decode();} catch {if(token!==request)return;announcement.textContent='Esta foto está temporariamente indisponível. Use as setas para escolher outra.';schedule();return;}
  if(token!==request)return;
  const incoming=layers[1-layer], outgoing=layers[layer];
  incoming.src=photo.src;incoming.alt=photo.alt;incoming.removeAttribute('aria-hidden');
  outgoing.alt='';outgoing.setAttribute('aria-hidden','true');
  incoming.classList.add('is-current');outgoing.classList.remove('is-current');
  layer=1-layer;index=next;
  counter.textContent=String(index+1).padStart(2,'0');counter.parentElement!.setAttribute('aria-label',`Foto ${index+1} de ${photos.length}`);
  root.querySelector<HTMLElement>('[data-photo-caption]')!.textContent=photo.alt;
  const credit=root.querySelector<HTMLAnchorElement>('[data-photo-credit]')!;credit.textContent=(scene?`Foto: ${photo.author}`:photo.credit)+' ↗';credit.href=photo.source;
  if(manual)announcement.textContent=`Foto ${index+1} de ${photos.length}: ${photo.alt}`;
  schedule();
 }
 controls.querySelector('[data-photo-prev]')!.addEventListener('click',()=>show(index-1,true));
 controls.querySelector('[data-photo-next]')!.addEventListener('click',()=>show(index+1,true));
 pause.addEventListener('click',()=>{paused=!paused;request++;if(!paused)focused=false;label();schedule();});
 controls.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();event.stopPropagation();show(index+(event.key==='ArrowLeft'?-1:1),true);}});
 // Keep a photo still while someone is using its controls or reading a source credit.
 for(const element of [controls,root]) {
  element.addEventListener('focusin',()=>{focused=true;stop();});
  element.addEventListener('focusout',()=>{queueMicrotask(()=>{focused=controls.contains(document.activeElement)||root.contains(document.activeElement);schedule();});});
 }
 const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;schedule();},{threshold:.15});
 observer.observe(root.querySelector('.gallery-images')!);
 if(scene)new MutationObserver(()=>{if(!active())request++;schedule();}).observe(scene,{attributes:true,attributeFilter:['aria-hidden']});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)request++;schedule();});
 motion.addEventListener('change',()=>{if(motion.matches)paused=true;label();schedule();});
 label();
});
