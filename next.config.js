/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_DOMAIN],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    disableStaticImages: true,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            native: true,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
