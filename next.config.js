/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,

  async redirects() {
    return [
      {
        source: process.env.NEXT_PUBLIC_BASE_PATH,
        destination: `${process.env.NEXT_PUBLIC_BASE_PATH}/archives/1`,
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
