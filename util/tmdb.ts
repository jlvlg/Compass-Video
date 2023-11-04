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

  popularMedia(media: string) {
    return this.get(`${media}/popular?language=en-US&page=1`).then(
      (data) => data.results
    );
  }

  get popularMovies() {
    return (async () =>
      (await this.popularMedia("movie")).map((movie: Movie) => ({
        ...movie,
      })))() as Promise<Movie[]>;
  }

  get popularSeries() {
    return (async () =>
      (await this.popularMedia("tv")).map(
        (
          series: Omit<Series, "title" | "original_title" | "release_date"> & {
            name: string;
            original_name: string;
            first_air_date: string;
          }
        ) => ({
          ...series,
          title: series.name,
          original_title: series.original_name,
          release_date: series.first_air_date,
        })
      ))() as Promise<Series[]>;
  }

  get popular() {
    return (async () =>
      [...(await this.popularMovies), ...(await this.popularSeries)].sort(
        (a, b) => b.popularity - a.popularity
      ))();
  }

  async getSeasonInfo(seriesId: number, seasonNumber: number){
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
  
  
}

export default TMDB.getInstance();
