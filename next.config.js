/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    removeConsole: {
      exclude: ["error"],
    },
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: ["https://w3w.netlify.app/"],
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  publicRuntimeConfig: {
    appName: process.env.NEXT_PUBLIC_APP_NAME,
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
