import {
  GetArticlesDocument,
  GetArticlesQuery,
  GetArticlesQueryVariables,
  queryClientGraphql,
} from "@adapters";

export const getArticles = (variables?: GetArticlesQueryVariables) => {
  return queryClientGraphql<GetArticlesQuery, GetArticlesQueryVariables>(
    variables,
    GetArticlesDocument,
  );
};
