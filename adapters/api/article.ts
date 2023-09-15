import {
  GetArticleDocument,
  GetArticleQuery,
  GetArticleQueryVariables,
  queryClientGraphql,
} from "@adapters";

export const getArticle = (variables?: GetArticleQueryVariables) => {
  return queryClientGraphql<GetArticleQuery, GetArticleQueryVariables>(
    variables,
    GetArticleDocument
  );
};
