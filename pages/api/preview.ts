import { PublicationState } from "@adapters";
import { getArticles } from "@adapters/api";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Get the preview secret and the slug which needs to be previewed
  const secret = req.query.secret;
  const slug = req.query.slug;
  // If the secret passed as URL query parameter doesn't match the preview secret in .env
  // then send a 401-Unauthorized response
  if (secret !== process.env.STRAPI_PREVIEW_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // If slug is not provided, send a 400-Bad Request response
  if (!slug) {
    return res
      .status(400)
      .json({ message: "Parameter `slug` is not provided" });
  }

  // Send a request to Strapi and fetch the article
  // to check if the provided slug exists
  const article = await getArticles({
    filters: { slug: { eq: slug as string } },
    publicationState: PublicationState.Preview,
  });
  // If the article is not found, send a 404-Not Found response
  if (article === null) {
    return res.status(404).json({ message: "Article not found" });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Redirect to the path of the article slug
  res.redirect(307, `/${article.articles.data[0].attributes.slug}/`);
}
