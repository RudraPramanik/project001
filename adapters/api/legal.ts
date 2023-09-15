import { queyClientApiCustom } from "@adapters/api-client";

export type LegalResults = {
  success: boolean;
  content: string;
};
export const getPrivacyPolicy = async () => {
  return await queyClientApiCustom<LegalResults, any>(
    "https://www.iubenda.com/api",
    "privacy-policy/33107144/only-legal",
  );
};

export const getCookiePolicy = async () => {
  return await queyClientApiCustom<LegalResults, any>(
    "https://www.iubenda.com/api",
    "privacy-policy/33107144/cookie-policy",
  );
};
