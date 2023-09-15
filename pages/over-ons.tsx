import {
  GetErrorPageQuery,
  GetFooterPageQuery,
  GetHeaderPageQuery,
  GetOverOnsPageQuery,
  GetSiteSettingsQuery,
  GetWritersQuery,
} from "@adapters";
import { getSiteSettings } from "@adapters/api";
import { getWriters } from "@adapters/api/authors";
import {
  getErrorPage,
  getFooterPage,
  getHeaderPage,
  getOverOnsPage,
} from "@adapters/api/pages";
import { AboutDescription, AboutHero, AboutTeam } from "@components";
import { DefaultLayout } from "@layouts";
import { globalRevalidateTiming } from "@utils";
import PageContentProvider from "@utils/contexts/page-content.context";
import { GetStaticProps } from "next";
import React from "react";

export interface AboutProps {
  writers: GetWritersQuery;
  overOnsPage: GetOverOnsPageQuery;
  headerPage: GetHeaderPageQuery;
  footerPage: GetFooterPageQuery;
  siteSettings: GetSiteSettingsQuery;
  errorPage: GetErrorPageQuery;
}
const AboutPage: React.FC<AboutProps> = ({
  writers,
  overOnsPage,
  footerPage,
  siteSettings,
  headerPage,
  errorPage,
}) => {
  return (
    // <SeoLayout type="other" settings={siteSettings} meta={null}>
    <PageContentProvider
      content={overOnsPage}
      header={headerPage}
      footer={footerPage}
      settings={siteSettings}
      errorPage={errorPage}
    >
      <DefaultLayout hero={<AboutHero />} heroclassname={""}>
        {/* TODO: Add content */}
        <div className="relative">
          <AboutDescription />
          <AboutTeam writers={writers} />
        </div>
      </DefaultLayout>
    </PageContentProvider>
  );
};

export default AboutPage;

export const getStaticProps: GetStaticProps = async () => {
  const writers = await getWriters({
    filters: { featured: { eq: true } },
  });
  const overOnsPage = await getOverOnsPage();
  const headerPage = await getHeaderPage();
  const footerPage = await getFooterPage();
  const siteSettings = await getSiteSettings();
  const errorPage = await getErrorPage();
  return {
    props: {
      overOnsPage,
      writers,
      siteSettings: siteSettings || null,
      footerPage,
      headerPage,
      errorPage,
    },
    revalidate: globalRevalidateTiming,
  };
};
