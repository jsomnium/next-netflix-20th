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

      // 영화 데이터를 카테고리별로 가져오는 프록시 설정
      {
        source: '/movie/:category',
        destination: `${process.env.NEXT_PUBLIC_URL}/movie/:category?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`,
      },
      // TV 프로그램 데이터를 카테고리별로 가져오는 프록시 설정
      {
        source: '/tv/:category',
        destination: `${process.env.NEXT_PUBLIC_URL}/tv/:category?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`,
      },
    ];
  },
};

export default nextConfig;
