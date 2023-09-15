/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  swcMinify: true,
  trailingSlash: true,
  output: "standalone",
  experimental: {
    esmExternals: true,
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // formats: ["image/avif", "image/webp"],
    domains: [
      "localhost",
      "strapi.tbeste.nl",
      "media.s-bol.com",
      "via.placeholder.com",
      "picsum.photos",
    ],
  },
  rewrites: async () => [
    {
      source: "/sitemap.xml",
      destination: "/api/sitemap",
    },
    {
      source: "/robots.txt",
      destination: "/api/robots",
    },
  ],
};
