import { environment } from "@utils";

const sitemapApi = async (_: any, res: any) => {
  const prodRobots = `Disallow:
User-agent: *
Sitemap: https://tbeste.nl/sitemap.xml
Sitemap: https://tbeste.nl/products_1.xml
Sitemap: https://tbeste.nl/blog_1.xml
`;
  const elseRobots = `Disallow: /
User-agent: *
`;
  res.setHeader("Content-Type", "text/plain");
  res.write(environment === "prod" ? prodRobots : elseRobots);
  res.end();
};

export default sitemapApi;
