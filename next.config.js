/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: "/login/:token",
      destination:
        "https://www.themoviedb.org/authenticate/:token",
      permanent: false,
    },
  ],
};

module.exports = nextConfig;
