// Prefixa caminhos internos com a base do GitHub Pages (/eurotrip-2026-v3).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (path: string) => `${base}${path.startsWith('/') ? path : `/${path}`}`;

// Cores de acento por capítulo, calibradas para fundo preto.
export const accents: Record<string, string> = {
  partida: '#9AA0A6',
  londres: 'var(--united-red)',
  birmingham: '#D19A5B',
  manchester: 'var(--united-red)',
  'san-sebastian': 'var(--united-red)',
  funchal: '#4FB98A',
  'ponta-delgada': '#8ED0C8',
};
export const accentOf = (slug: string) => accents[slug] ?? '#EDEAE3';

// Timecode fictício por capítulo: horas = dia da viagem, para o motivo visual.
export const timecode = (day: number, minutes = 0) =>
  `${String(day).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00:00`;
