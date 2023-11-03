const API_KEY = "f9a314c271d39b309e57e59cb4a342a8";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint: string) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

const getMedia = {
  getHomeList: async () => {
    try {
      const originals = await basicFetch(`/movie/popular?language=en-US&page=1&api_key=${API_KEY}`);
      const disneyPlus = await basicFetch(`/tv/popular?language=en-US&page=1&api_key=${API_KEY}`);
      const moviePopular = await basicFetch(`/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`);
      
      return [
        {
          slug: "hallowen",
          title: "Coleções de Hallowen",
          items: originals.results
        },
        {
          slug: "series",
          title: "Series em alta",
          items: disneyPlus.results
        },
        {
          slug: "filmes",
          title: "Filmes em alta",
          items: moviePopular.results
        },
        {
            slug: "filmes",
            title: "Filmes em alta",
            items: moviePopular.results
          }
      ];
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  },
};

export default getMedia;