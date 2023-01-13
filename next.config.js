/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    removeConsole: true,
  },
  compress: true,
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_DOMAIN],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    disableStaticImages: false,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  publicRuntimeConfig: {
    domain: process.env.NEXT_PUBLIC_DOMAIN,
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    appName: process.env.NEXT_PUBLIC_APP_NAME,
    siteTitle: process.env.NEXT_PUBLIC_SITE_TITLE,
    siteDesc: process.env.NEXT_PUBLIC_SITE_DESC,
    siteAuthor: process.env.NEXT_PUBLIC_SITE_AUTHOR,
    tags: process.env.NEXT_PUBLIC_TAGS,
    blurData: process.env.NEXT_PUBLIC_BLUR_DATA_URL,
    staticFolder: process.env.NEXT_PUBLIC_STATIC_FOLDER,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
