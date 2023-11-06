import { Media, Season, Series, DetailedMedia, Type } from "./model";

export class TMDB {
  static instance?: TMDB;
  baseURL = new URL("https://api.themoviedb.org/3/");
  headers = {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTUzYjk2MmY2Nzg2MGY2NjAxMjc4YTE1ZDdjNmVkMSIsInN1YiI6IjY1NDRlODAyNmJlYWVhMDEwYjMyNGVkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EWLmbWqxpkl0X_f3SicwD20Jee8zD-jls2pKLq6Qohs",
  };

  private constructor() {}

  static getInstance() {
    return this.instance || (this.instance = new TMDB());
  }

  async get(path: string) {
    const url = new URL(path, this.baseURL);
    const res = await fetch(url, { headers: this.headers });

    if (!res.ok)
      throw { message: `Could not fetch from ${url}`, status: res.status };

    return res.json();
  }

  private popularMedia(media: string) {
    return this.get(`${media}/popular?language=en-US&page=1`).then(
      (data) => data.results
    );
  }

  private extractCommon(res: any) {
    return {
      adult: res.adult,
      backdrop_path: res.backdrop_path,
      genre_ids: res.genre_ids,
      id: res.id,
      original_language: res.original_language,
      overview: res.overview,
      popularity: res.popularity,
      poster_path: res.poster_path,
      vote_average: res.vote_average,
      vote_count: res.vote_count,
      genres: res.genres,
    };
  }

  async detailedMovie(movie: Media): Promise<DetailedMedia> {
    const res = await this.get(`movie/${movie.id}?language=en-US`);

    return {
      ...this.extractCommon(res),
      runtime: res.runtime,
      original_title: res.original_title,
      title: res.title,
      release_date: res.release_date,
      video: res.video,
      type: Type.MOVIE,
    };
  }

  async detailedSeries(series: Media): Promise<DetailedMedia> {
    const res = await this.get(`tv/${series.id}?language=en-US`);

    return {
      ...this.extractCommon(res),
      original_name: res.original_name,
      name: res.name,
      first_air_date: res.first_air_date,
      origin_country: res.origin_country,
      number_of_episodes: res.number_of_episodes,
      type: Type.MOVIE,
    };
  }

  async detailedMedia(media: Media) {
    switch (media.type) {
      case Type.MOVIE:
        return this.detailedMovie(media);
      case Type.SERIES:
        return this.detailedSeries(media);
    }
  }

  async detailedMediaMultiple(medias: Media[]) {
    // DON'T USE FOR MORE THAN 20 REQUESTS PER SECOND
    const result = [];

    for (const item of medias) {
      result.push(await this.detailedMedia(item));
    }

    return result;
  }

  get popularMovies() {
    return (async () =>
      (await this.popularMedia("movie")).map((movie: Media) => ({
        ...movie,
        type: Type.MOVIE,
      })))() as Promise<Media[]>;
  }

  get popularSeries() {
    return (async () =>
      (await this.popularMedia("tv")).map((series: Media) => ({
        ...series,
        type: Type.SERIES,
      })))() as Promise<Media[]>;
  }

  get popular() {
    return (async () =>
      [...(await this.popularMovies), ...(await this.popularSeries)]
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, 20))();
  }

  async getSeasonInfo(seriesId: number, seasonNumber: number) {
    const path = `tv/${seriesId}/season/${seasonNumber}?language=en-US`;
    try {
      const response = await this.get(path);
      const seasonData: Season = {
        episodes: response.episodes,
        season_number: response.season_number,
      };
      return seasonData;
    } catch (error) {
      console.error("Error getSeasonInfo", error);
      return null;
    }
  }

  async getSerie(id: number) {
    try {
      const res = await this.get(`tv/${id}?language=en-US`);
      const seriedata: Series = {
        ...this.extractCommon(res),
        number_of_seasons: res.number_of_seasons,
        seasons: res.seasons,
        name: res.name,
        origin_country: res.origin_country,
        type: Type.SERIES,
      };
      return seriedata;
    } catch (error) {
      console.error("Error getSeasonInfo", error);
      return null;
    }
  }

  private similarMedia(media: string, id:number) {
    return this.get(`${media}/${id}/similar?`).then(
      (data) => data.results
    );
  }


  async getSimilarSerie(id:number) {
    return (async () =>
      (await this.similarMedia("tv", id)).map((series: Media) => ({
        ...series,
        type: Type.SERIES,
      })))() as Promise<Media[]>;
  }


}

export default TMDB.getInstance();
