/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 60,
    disableStaticImages: true,
  },
};

module.exports = nextConfig;
