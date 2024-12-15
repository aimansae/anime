export type SingleAnimeTypes = {
  id: string;
  name: string;
  russian: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
};

export type AnimeDataTypes = { anime: SingleAnimeTypes; index: number };
export type AnimeCard = JSX.Element;
