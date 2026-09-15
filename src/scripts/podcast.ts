const root = document.querySelector<HTMLElement>('#podcast-playlist');
if (root) {
 const panels = [...root.querySelectorAll<HTMLElement>('[data-panel]')];
 const links = [...root.querySelectorAll<HTMLAnchorElement>('[data-episode]')];
 const status = root.querySelector<HTMLElement>('#playlist-announcement');
 const slugFromHash = () => { try { return decodeURIComponent(location.hash.slice(1)); } catch { return ''; } };
 function select(slug: string, focus = false) {
  const selected = panels.find(p => p.dataset.panel === slug) || panels[0];
  if (!selected) return;
  panels.forEach(panel => {
   panel.hidden = panel !== selected;
   if (panel.hidden) panel.querySelector('audio')?.pause();
  });
  links.forEach(link => {
   if (link.classList.contains('episode-select') && link.dataset.episode === selected.dataset.panel) link.setAttribute('aria-current','true');
   else link.removeAttribute('aria-current');
  });
  const title = selected.querySelector<HTMLElement>('h2');
  if (status) status.textContent = `Episódio selecionado: ${title?.textContent || ''}`;
  if (focus) title?.focus({preventScroll:true});
 }
 links.forEach(link => link.addEventListener('click', event => {
  // Preserve open-in-new-tab, copy-link and other normal anchor interactions.
  if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  const slug = link.dataset.episode!;
  if (slugFromHash() !== slug) history.pushState(null,'',`#${slug}`);
  select(slug,true);
  panels.find(p => p.dataset.panel === slug)?.scrollIntoView({block:'start',behavior:'auto'});
 }));
 function syncFromLocation() {
  const slug = slugFromHash();
  // A skip link or another in-page anchor must not reset the chosen episode.
  if (!slug || panels.some(p => p.dataset.panel === slug)) select(slug);
 }
 window.addEventListener('hashchange', syncFromLocation);
 window.addEventListener('popstate', syncFromLocation);
 root.querySelectorAll<HTMLAudioElement>('audio').forEach(audio => {
  const container = audio.closest('.episode-audio');
  const toggle = container?.querySelector<HTMLButtonElement>('.audio-toggle');
  const message = container?.querySelector<HTMLElement>('.audio-error');
  const syncToggle = () => {
   if (toggle) {
    toggle.textContent = audio.paused ? '▶ Ouvir episódio' : 'Ⅱ Pausar episódio';
    toggle.setAttribute('aria-label', `${audio.paused ? 'Ouvir' : 'Pausar'} ${audio.dataset.title}`);
   }
  };
  if (toggle) {
   toggle.hidden = false;
   toggle.addEventListener('click', async () => {
    if (!audio.paused) { audio.pause(); return; }
    if (message) message.hidden = true;
    try { await audio.play(); } catch { if (message) message.hidden = false; }
   });
  }
  audio.addEventListener('play', syncToggle);
  audio.addEventListener('pause', syncToggle);
  audio.addEventListener('ended', syncToggle);
  audio.addEventListener('playing', () => { if (message) message.hidden = true; });
  audio.addEventListener('play', () => root.querySelectorAll<HTMLAudioElement>('audio').forEach(other => {if(other!==audio) other.pause();}));
  audio.addEventListener('error', () => {
   const message=audio.closest('.episode-audio')?.querySelector<HTMLElement>('.audio-error');
   if(message) message.hidden=false;
  });
 });
 select(slugFromHash());
}
