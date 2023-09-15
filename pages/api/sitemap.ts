import { hostname } from "@utils";
import { SitemapStream } from "sitemap";
import { createGzip } from "zlib";

const STATIC_URLS = [
  "/",
  "/over-ons/",
  "/blog/",
  "/contact/",
  "/alle-categorieen/",
  "/privacy-policy/",
  "/cookie-policy/",
];

const sitemapApi = async (_: any, res: any) => {
  // ensure response is XML & gzip encoded

  res.setHeader(
    "Cache-Control",
    "s-maxage=86400, stale-while-revalidate=86400",
  );
  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Content-Encoding", "gzip");

  // makes necessary API calls to get all the dynamic
  // urls from user-gen content
  const userGenPageUrls = await getUserGeneratedPages();

  const sitemapStream = new SitemapStream({ hostname });
  const pipeline = sitemapStream.pipe(createGzip());

  // write static pages to sitemap
  STATIC_URLS.forEach((url) => {
    sitemapStream.write({ url });
  });

  // write user-generated pages to sitemap
  userGenPageUrls.forEach((url) => {
    sitemapStream.write({ url });
  });

  sitemapStream.end();

  // stream write the response
  pipeline.pipe(res).on("error", (err: any) => {
    throw err;
  });
};

export default sitemapApi;

const getUserGeneratedPages = async () => {
  const slugs: string[] = [];

  return slugs;
};
