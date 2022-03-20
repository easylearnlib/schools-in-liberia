/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath:
    process.env.NEXT_PUBLIC_BASE_PATH &&
    process.env.NEXT_PUBLIC_BASE_PATH + "/archives/1",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
};

module.exports = nextConfig;
