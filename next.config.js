/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "docs",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/CV" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/CV/" : "",
};

module.exports = nextConfig;
