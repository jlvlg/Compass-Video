export class Media {
  constructor(
    public adult: boolean,
    public backdrop_path: string,
    public genre_ids: number[],
    public id: number,
    public original_language: string,
    public overview: string,
    public popularity: number,
    public poster_path: string,
    public vote_average: number,
    public vote_count: number
  ) {}
}

export class Movie extends Media {
  constructor(
    public original_title: string,
    public release_date: string,
    public title: string,
    public video: boolean,
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    overview: string,
    popularity: number,
    poster_path: string,
    vote_average: number,
    vote_count: number
  ) {
    super(
      adult,
      backdrop_path,
      genre_ids,
      id,
      original_language,
      overview,
      popularity,
      poster_path,
      vote_average,
      vote_count
    );
  }

  static fromMovie(movie: Movie) {
    return new Movie(
      movie.original_title,
      movie.release_date,
      movie.title,
      movie.video,
      movie.adult,
      movie.backdrop_path,
      movie.genre_ids,
      movie.id,
      movie.original_language,
      movie.overview,
      movie.popularity,
      movie.poster_path,
      movie.vote_average,
      movie.vote_count
    );
  }
}

export class Series extends Media {
  constructor(
    public origin_country: string[],
    public original_name: string,
    public first_air_date: string,
    public name: string,
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    overview: string,
    popularity: number,
    poster_path: string,
    vote_average: number,
    vote_count: number
  ) {
    super(
      adult,
      backdrop_path,
      genre_ids,
      id,
      original_language,
      overview,
      popularity,
      poster_path,
      vote_average,
      vote_count
    );
  }

  static fromSeries(series: Series) {
    return new Series(
      series.origin_country,
      series.original_name,
      series.first_air_date,
      series.name,
      series.adult,
      series.backdrop_path,
      series.genre_ids,
      series.id,
      series.original_language,
      series.overview,
      series.popularity,
      series.poster_path,
      series.vote_average,
      series.vote_count
    );
  }
}
