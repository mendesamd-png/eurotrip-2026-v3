// contagem regressiva para o embarque: 16/10/2026 23:50, horário de São Paulo (UTC-3)
const T0 = Date.parse('2026-10-16T23:50:00-03:00');
const pad = (n: number, w = 2) => String(n).padStart(w, '0');
const tcEls = document.querySelectorAll<HTMLElement>('[data-countdown-tc]');
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const tick = () => {
  const now = Date.now();
  const diff = T0 - now;
  const neg = diff < 0;
  const abs = Math.abs(diff);
  const d = Math.floor(abs / 86400000), h = Math.floor(abs / 3600000) % 24, mi = Math.floor(abs / 60000) % 60, sec = Math.floor(abs / 1000) % 60;
  const ff = Math.floor((abs % 1000) / 1000 * 24);
  tcEls.forEach((el) => { el.textContent = `${neg ? 'TC +' : 'TC -'}${pad(d)}:${pad(h)}:${pad(mi)}:${pad(sec)}:${pad(ff)}`; });
  setTimeout(tick, reduced ? 1000 : 1000 / 24);
};
tick();
