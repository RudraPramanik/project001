import {
  GetCookiePolicyPageQuery,
  GetFooterPageQuery,
  GetHeaderPageQuery,
  GetSiteSettingsQuery,
} from "@adapters";
import { getSiteSettings } from "@adapters/api";
import {
  getCookiePolicyPage,
  // getErrorPage,
  getFooterPage,
  getHeaderPage,
} from "@adapters/api/pages";
import { DefaultLayout } from "@layouts";
import { globalRevalidateTiming } from "@utils";
import PageContentProvider from "@utils/contexts/page-content.context";
import { GetStaticProps } from "next";
import React from "react";

export interface CookiePolicyProps {
  cookiePolicy: GetCookiePolicyPageQuery;
  headerPage: GetHeaderPageQuery;
  footerPage: GetFooterPageQuery;
  siteSettings: GetSiteSettingsQuery;
  // errorPage: GetErrorPageQuery;
}
const CookiePolicy: React.FC<CookiePolicyProps> = ({
  cookiePolicy,
  footerPage,
  headerPage,
  siteSettings,
  // errorPage,
}) => {
  return (
    <PageContentProvider
      header={headerPage}
      footer={footerPage}
      settings={siteSettings}
      errorPage={null}
    >
      <DefaultLayout hero={null} heroclassname={" bg-[#F3BFD0] "}>
        {/* TODO: Add content */}
      </DefaultLayout>
    </PageContentProvider>
  );
};

export default CookiePolicy;

export const getStaticProps: GetStaticProps = async () => {
  const cookiePolicy = await getCookiePolicyPage();
  const headerPage = await getHeaderPage();
  const footerPage = await getFooterPage();
  const siteSettings = await getSiteSettings();
  // const errorPage = await getErrorPage();

  return {
    props: {
      cookiePolicy,
      headerPage,
      footerPage,
      siteSettings: siteSettings || null,
      // errorPage,
    },
    revalidate: globalRevalidateTiming,
  };
};
