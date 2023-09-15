import {
  GetFooterPageQuery,
  GetHeaderPageQuery,
  GetPrivacyPolicyPageQuery,
  GetSiteSettingsQuery,
} from "@adapters";
import { getSiteSettings } from "@adapters/api";
import {
  // getErrorPage,
  getFooterPage,
  getHeaderPage,
  getPrivacyPolicyPage,
} from "@adapters/api/pages";
import { DefaultLayout } from "@layouts";
import { globalRevalidateTiming } from "@utils";
import PageContentProvider from "@utils/contexts/page-content.context";
import { GetStaticProps } from "next";
import React from "react";

export interface PrivacyPolicyProps {
  privacyPolicy: GetPrivacyPolicyPageQuery;
  headerPage: GetHeaderPageQuery;
  footerPage: GetFooterPageQuery;
  siteSettings: GetSiteSettingsQuery;
  // errorPage: GetErrorPageQuery;
}
const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({
  privacyPolicy,
  footerPage,
  headerPage,
  siteSettings,
  // errorPage,
}) => {
  return (
    // <SeoLayout
    //   type="other"
    //   settings={siteSettings}
    //   meta={{
    //     path: siteSettings?.setting?.data?.attributes?.global_links?.find(
    //       (link) => link?.original_name?.toLowerCase() == "privacy policy",
    //     )?.slug,
    //     title:
    //       privacyPolicy?.privacyPolicy?.data?.attributes?.seo?.metaTitle ||
    //       "Privacy Policy",
    //     description:
    //       privacyPolicy?.privacyPolicy?.data?.attributes?.seo
    //         ?.metaDescription || "Privacy Policy",
    //     openGraph: {
    //       url: `${hostname}${
    //         siteSettings?.setting?.data?.attributes?.global_links?.find(
    //           (link) => link?.original_name?.toLowerCase() == "privacy policy",
    //         )?.slug
    //       }`,

    //       title:
    //         privacyPolicy?.privacyPolicy?.data?.attributes?.seo?.metaTitle ||
    //         "Privacy Policy",
    //       description:
    //         privacyPolicy?.privacyPolicy?.data?.attributes?.seo
    //           ?.metaDescription || "Privacy Policy",
    //       site_name: siteName,
    //       images: [
    //         {
    //           url: getStrapiImage(
    //             privacyPolicy?.privacyPolicy?.data?.attributes?.seo?.metaImage
    //               ?.data?.attributes?.url,
    //           ),
    //           alt:
    //             privacyPolicy?.privacyPolicy?.data?.attributes?.seo
    //               ?.metaSocial[0]?.title ||
    //             "tbeste.nl | Vind de tbeste producten.",
    //         },
    //       ],
    //     },
    //     images: [
    //       getStrapiImage(
    //         privacyPolicy?.privacyPolicy?.data?.attributes?.seo?.metaImage?.data
    //           ?.attributes?.url,
    //       ),
    //     ],
    //   }}
    // >
    <PageContentProvider
      header={headerPage}
      footer={footerPage}
      settings={siteSettings}
      errorPage={null}
    >
      <DefaultLayout hero={null} heroclassname={""}>
        {/* TODO: Add content */}
      </DefaultLayout>
    </PageContentProvider>
  );
};

export default PrivacyPolicy;

export const getStaticProps: GetStaticProps = async () => {
  const privacyPolicy = await getPrivacyPolicyPage();
  const headerPage = await getHeaderPage();
  const footerPage = await getFooterPage();
  const siteSettings = await getSiteSettings();
  // const errorPage = await getErrorPage();

  return {
    props: {
      privacyPolicy,
      headerPage,
      footerPage,
      siteSettings: siteSettings || null,
      // errorPage,
    },
    revalidate: globalRevalidateTiming,
  };
};
