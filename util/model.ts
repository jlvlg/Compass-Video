interface Media {
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
  original_title: string;
  title: string;
  release_date: string;
}

interface Movie extends Media {
  video: boolean;
}

interface Series extends Media {
  origin_country: string[];
}
