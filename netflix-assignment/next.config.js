/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/movie/:category',
        destination: '/api/movie?category=:category', // 수정된 부분
      },
      {
        source: '/tv/:category',
        destination: '/api/tv?category=:category', // 수정된 부분
      },
    ];
  },
};

module.exports = nextConfig
