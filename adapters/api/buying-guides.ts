import {
  GetOneBuyingGuideDocument,
  GetOneBuyingGuideQuery,
  GetOneBuyingGuideQueryVariables,
  GetBuyingGuidesDocument,
  GetBuyingGuidesQuery,
  GetBuyingGuidesQueryVariables,
  queryClientGraphql,
} from "@adapters";

export const getOneBuyingGuide = (
  variables?: GetOneBuyingGuideQueryVariables,
) => {
  return queryClientGraphql<
    GetOneBuyingGuideQuery,
    GetOneBuyingGuideQueryVariables
  >(variables, GetOneBuyingGuideDocument);
};

export const getBuyingGuides = (variables?: GetBuyingGuidesQueryVariables) => {
  return queryClientGraphql<
    GetBuyingGuidesQuery,
    GetBuyingGuidesQueryVariables
  >(variables, GetBuyingGuidesDocument);
};
