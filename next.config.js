/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `@import "@/styles/global.scss";`,
  },
};

module.exports = nextConfig;
