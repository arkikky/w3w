/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_DOMAIN],
    deviceSizes: [3840],
    imageSizes: [384],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  publicRuntimeConfig: {
    domain: process.env.NEXT_PUBLIC_DOMAIN,
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    appName: process.env.NEXT_PUBLIC_APP_NAME,
    siteTitle: process.env.NEXT_PUBLIC_SITE_TITLE,
    siteDesc: process.env.NEXT_PUBLIC_SITE_DESC,
    author: process.env.NEXT_PUBLIC_AUTHOR,
    tags: process.env.NEXT_PUBLIC_TAGS,

    blurImgs: process.env.NEXT_PUBLIC_BLUR_IMAGES,
    staticFolder: process.env.NEXT_PUBLIC_STATIC_FOLDER,
    
    analyticsId: process.env.NEXT_PUBLIC_ANALYTICS_ID,
    gtmId: process.env.NEXT_PUBLIC_GTM_ID,
  },
};

module.exports = nextConfig;
