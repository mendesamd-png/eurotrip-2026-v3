import library from './podcast-episodes.json';
import type { ImageKey } from './images';
export type PodcastEpisode = {
  slug: string; number: string; city: string; country: string; title: string;
  description: string; when: string; chapter: string; image: ImageKey;
  stops: string[]; topics: string[]; note: string; sourceIds: string[];
  audio: string | null; transcript: string[];
};
// Attach each reviewed file separately, e.g. /audio/04-dia-de-jogo.mp3.
// Null means in preparation. Selection never starts audio automatically.
export const episodes = library as PodcastEpisode[];
