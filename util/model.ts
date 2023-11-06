export enum Type {
  MOVIE,
  SERIES,
}

export interface Media {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  original_name?: string;
  original_title?: string;
  title?: string;
  release_date?: string;
  name?: string;
  first_air_date?: string;
  video?: boolean;
  origin_country?: string[];
  type: Type;
}

export interface DetailedMedia extends Media {
  genres: { id: number; name: string }[];
  runtime?: number;
  number_of_episodes?: number;
}

export interface Series extends Media {
  origin_country: string[];
  id: number;
  number_of_seasons?: number;
  seasons?: Series[];
  name?: string;
}

export interface SeriesInfo{
  id: number;
  number_of_seasons: number;
  seasons: Series[];
  name: string;
}

export interface Episode{
  id: number;
  name: string;
  still_path: string;
  overview: string;
  episode_number: number;
  runtime: number;
}

export interface Season{
  episodes: Episode[],
  season_number: number,
  poster_path?: string,
  name?: string;
}
