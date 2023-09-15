import {
  queryClientGraphql,
  UpdateArticleDocument,
  UpdateArticleMutation,
  UpdateArticleMutationVariables,
} from "@adapters";
import { getArticles } from "@adapters/api";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const articleBySlug = await getArticles({
      filters: { slug: { eq: req.query.slug as string } },
    });
    const article = articleBySlug.articles[0];

    const updatedArticle = await updateArticle({
      id: article.id,
      data: {
        views: article.views + 1,
      },
    });

    res.status(200).json({
      ok: true,
      message: `Articles ${updatedArticle.updateArticle.data.id} updated correctly`,
    });
  } catch (error) {
    res.status(400).json({ ok: false, message: "Something went wrong" });
  }
};

export default handler;

export const updateArticle = (variables?: UpdateArticleMutationVariables) => {
  return queryClientGraphql<
    UpdateArticleMutation,
    UpdateArticleMutationVariables
  >(variables, UpdateArticleDocument);
};
