/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["https://w3w.netlify.app/"],
    deviceSizes: [2048],
    imageSizes: [64],
    formats: ["image/avif", "image/webp"],
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
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
