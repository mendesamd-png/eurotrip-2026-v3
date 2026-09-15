import library from './podcast-episodes.json';
import type { ImageKey } from './images';
export type PodcastEpisode = {
  slug: string; number: string; city: string; country: string; title: string;
  description: string; when: string; chapter: string; image: ImageKey;
  stops: string[]; topics: string[]; note: string; sourceIds: string[];
  audio: string | null; duration?: string; durationSeconds?: number; transcript: string[];
};
// Each episode uses a stable, locally hosted audio file.
// Null means in preparation. Selection never starts audio automatically.
export const episodes = library as PodcastEpisode[];
