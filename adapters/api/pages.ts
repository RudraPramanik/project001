import {
  GetFooterPageDocument,
  GetFooterPageQuery,
  GetFooterPageQueryVariables,
  GetHeaderPageDocument,
  GetHeaderPageQuery,
  GetHeaderPageQueryVariables,
  GetHomePageQuery,
  GetHomePageQueryVariables,
  GetHomePageDocument,
  GetCookiePolicyPageDocument,
  GetCookiePolicyPageQuery,
  GetCookiePolicyPageQueryVariables,
  queryClientGraphql,
  GetContactPageDocument,
  GetContactPageQueryVariables,
  GetContactPageQuery,
  GetPrivacyPolicyPageDocument,
  GetPrivacyPolicyPageQueryVariables,
  GetPrivacyPolicyPageQuery,
  GetOverOnsPageQueryVariables,
  GetOverOnsPageQuery,
  GetOverOnsPageDocument,
  GetErrorPageQuery,
  GetErrorPageQueryVariables,
  GetErrorPageDocument,
  GetProductGroupPageDocument,
  GetProductGroupPageQueryVariables,
  GetProductGroupPageQuery,
  GetBlogPageDocument,
  GetBlogPageQuery,
  GetBlogPageQueryVariables,
  GetSingleBlogPageQuery,
  GetSingleBlogPageDocument,
  GetSingleBlogPageQueryVariables,
  GetAuthorBlogPageQueryVariables,
  GetProductCategoryPageQuery,
  GetAuthorBlogPageQuery,
  GetProductCategoryPageQueryVariables,
  GetProductCategoryPageDocument,
  GetAuthorBlogPageDocument,
  GetAllCategoriesPageQuery,
  GetAllCategoriesPageDocument,
  GetAllCategoriesPageQueryVariables,
} from "@adapters";

export const getOverOnsPage = (variables?: GetOverOnsPageQueryVariables) => {
  return queryClientGraphql<GetOverOnsPageQuery, GetOverOnsPageQueryVariables>(
    variables,
    GetOverOnsPageDocument,
  );
};

export const getErrorPage = (variables?: GetErrorPageQueryVariables) => {
  return queryClientGraphql<GetErrorPageQuery, GetErrorPageQueryVariables>(
    variables,
    GetErrorPageDocument,
  );
};
export const getSingleBlogPage = (
  variables?: GetSingleBlogPageQueryVariables,
) => {
  return queryClientGraphql<
    GetSingleBlogPageQuery,
    GetSingleBlogPageQueryVariables
  >(variables, GetSingleBlogPageDocument);
};
export const getAuthorBlogPage = (
  variables?: GetAuthorBlogPageQueryVariables,
) => {
  return queryClientGraphql<
    GetAuthorBlogPageQuery,
    GetAuthorBlogPageQueryVariables
  >(variables, GetAuthorBlogPageDocument);
};
export const getProductCategoryPage = (
  variables?: GetProductCategoryPageQueryVariables,
) => {
  return queryClientGraphql<
    GetProductCategoryPageQuery,
    GetProductCategoryPageQueryVariables
  >(variables, GetProductCategoryPageDocument);
};
export const getAllCategoriesPage = (
  variables?: GetAllCategoriesPageQueryVariables,
) => {
  return queryClientGraphql<
    GetAllCategoriesPageQuery,
    GetAllCategoriesPageQueryVariables
  >(variables, GetAllCategoriesPageDocument);
};
export const getProductGroupPage = (
  variables?: GetProductGroupPageQueryVariables,
) => {
  return queryClientGraphql<
    GetProductGroupPageQuery,
    GetProductGroupPageQueryVariables
  >(variables, GetProductGroupPageDocument);
};

export const getPrivacyPolicyPage = (
  variables?: GetPrivacyPolicyPageQueryVariables,
) => {
  return queryClientGraphql<
    GetPrivacyPolicyPageQuery,
    GetPrivacyPolicyPageQueryVariables
  >(variables, GetPrivacyPolicyPageDocument);
};

export const getCookiePolicyPage = (
  variables?: GetCookiePolicyPageQueryVariables,
) => {
  return queryClientGraphql<
    GetCookiePolicyPageQuery,
    GetCookiePolicyPageQueryVariables
  >(variables, GetCookiePolicyPageDocument);
};

export const getContactPage = (variables?: GetContactPageQueryVariables) => {
  return queryClientGraphql<GetContactPageQuery, GetContactPageQueryVariables>(
    variables,
    GetContactPageDocument,
  );
};

export const getHeaderPage = (variables?: GetHeaderPageQueryVariables) => {
  return queryClientGraphql<GetHeaderPageQuery, GetHeaderPageQueryVariables>(
    variables,
    GetHeaderPageDocument,
  );
};
export const getHomePage = (variables?: GetHomePageQueryVariables) => {
  return queryClientGraphql<GetHomePageQuery, GetHomePageQueryVariables>(
    variables,
    GetHomePageDocument,
  );
};

export const getFooterPage = (variables?: GetFooterPageQueryVariables) => {
  return queryClientGraphql<GetFooterPageQuery, GetFooterPageQueryVariables>(
    variables,
    GetFooterPageDocument,
  );
};

export const getBlogPage = (variables?: GetBlogPageQueryVariables) => {
  return queryClientGraphql<GetBlogPageQuery, GetBlogPageQueryVariables>(
    variables,
    GetBlogPageDocument,
  );
};
