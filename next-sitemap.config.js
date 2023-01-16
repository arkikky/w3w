/** @type {import('next-sitemap').IConfig} */

const siteURL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://w3w-dev.vercel.app/";

const nextSitemapConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  changefreq: "daily",
  priority: 0.7,
  generateRobotsTxt: true,
  sitemapSize: 1000,
  robotsTxtOptions: {
    additionalSitemaps: [`${siteURL}server-sitemap.xml`],
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};

module.exports = nextSitemapConfig;
