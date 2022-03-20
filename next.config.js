/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/",
        destination: "/archives/1",
      },
    ];
  },
};

module.exports = nextConfig;
