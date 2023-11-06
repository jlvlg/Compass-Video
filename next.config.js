/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: "/login/:token",
      destination: "https://www.themoviedb.org/authenticate/:token",
      permanent: false,
    },
  ],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "image.tmdb.org", pathname: "/t/p/**" },
    ],
  },
};

module.exports = nextConfig;
