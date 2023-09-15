import {
  GetArticlesQuery,
  GetErrorPageQuery,
  GetFooterPageQuery,
  GetHeaderPageQuery,
  GetHomePageQuery,
  GetSiteSettingsQuery,
} from "@adapters";
import {
  CategoriesResults,
  getArticles,
  getCategories,
  getSiteSettings,
} from "@adapters/api";
import {
  getErrorPage,
  getFooterPage,
  getHeaderPage,
  getHomePage,
} from "@adapters/api/pages";
import { AboutUs, Articles, Categories, Hero } from "@components";
import AllCategories from "@components/home/allCategories/AllCategories";
import { DefaultLayout, SeoLayout } from "@layouts";
import { globalRevalidateTiming, hostname, siteName } from "@utils";
import PageContentProvider from "@utils/contexts/page-content.context";
import { GetStaticProps } from "next";
import React from "react";

export interface IndexProps {
  posts: GetArticlesQuery;
  headerPage: GetHeaderPageQuery;
  homePage: GetHomePageQuery;
  footerPage: GetFooterPageQuery;
  errorPage: GetErrorPageQuery;
  siteSettings: GetSiteSettingsQuery;
  allCategories: CategoriesResults;
}
const IndexPage: React.FC<IndexProps> = ({
  homePage,
  headerPage,
  footerPage,
  siteSettings,
  posts,
  errorPage,
}) => {
  return (
    <SeoLayout
      type="other"
      settings={siteSettings}
      meta={{
        path: "",
        title: "tbeste.nl | Vind de tbeste producten.",
        description:
          "Op tbeste.nl start je intergalactische reis naar een het juiste product. Wij vergemakkelijken je zoektocht naar het aanschaffen van een nieuw product.",
        openGraph: {
          url: `${hostname}`,
          title: "tbeste.nl | Vind de tbeste producten.",
          description:
            "Op tbeste.nl start je intergalactische reis naar een het juiste product. Wij vergemakkelijken je zoektocht naar het aanschaffen van een nieuw product.",
          site_name: siteName,
        },
      }}
    >
      <PageContentProvider
        content={homePage}
        header={headerPage}
        footer={footerPage}
        settings={siteSettings}
        errorPage={errorPage}
      >
        <DefaultLayout heroclassname="" hero={<Hero />}>
          <div className="pt-2">
            <AboutUs />
          </div>
          <div className="mo:mt-12">
            <Categories />
          </div>
          <Articles articles={posts} />
          <div className="pt-8">
            <AllCategories />
          </div>
        </DefaultLayout>
      </PageContentProvider>
    </SeoLayout>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
  const headerPage = await getHeaderPage();
  const footerPage = await getFooterPage();
  const siteSettings = await getSiteSettings();
  const homePage = await getHomePage();
  const errorPage = await getErrorPage();
  const allCategories = await getCategories();
  const posts = await getArticles({ pagination: { limit: 3 } });

  return {
    props: {
      homePage,
      headerPage,
      footerPage,
      allCategories,
      errorPage,
      posts,
      siteSettings: siteSettings || null,
    },
    revalidate: globalRevalidateTiming,
  };
};
