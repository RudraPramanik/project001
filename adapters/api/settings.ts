import {
  GetSiteSettingsDocument,
  GetSiteSettingsQuery,
  GetSiteSettingsQueryVariables,
  queryClientGraphql,
} from "@adapters";

export const getSiteSettings = (variables?: GetSiteSettingsQueryVariables) => {
  return queryClientGraphql<
    GetSiteSettingsQuery,
    GetSiteSettingsQueryVariables
  >(variables, GetSiteSettingsDocument);
};
