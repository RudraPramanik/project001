import {
  GetArticlesQuery,
  GetBlogPageQuery,
  GetErrorPageQuery,
  GetFooterPageQuery,
  GetHeaderPageQuery,
  GetSiteSettingsQuery,
} from "@adapters";
import { getArticles, getSiteSettings } from "@adapters/api";
import {
  getBlogPage,
  // getBlogPage,
  getErrorPage,
  getFooterPage,
  getHeaderPage,
} from "@adapters/api/pages";
import { BlogHero, BlogPage } from "@components";
import { DefaultLayout } from "@layouts";
import { globalRevalidateTiming } from "@utils";
import PageContentProvider from "@utils/contexts/page-content.context";
import { GetStaticProps } from "next";
import React from "react";

export interface IndexProps {
  posts: GetArticlesQuery;
  headerPage: GetHeaderPageQuery;
  blogPage: GetBlogPageQuery;
  footerPage: GetFooterPageQuery;
  siteSettings: GetSiteSettingsQuery;
  errorPage: GetErrorPageQuery;
}
const IndexPage: React.FC<IndexProps> = ({
  blogPage,
  headerPage,
  errorPage,
  siteSettings,
  posts,
  footerPage,
}) => {
  return (
    <PageContentProvider
      content={blogPage}
      header={headerPage}
      footer={footerPage}
      settings={siteSettings}
      errorPage={errorPage}
    >
      <DefaultLayout hero={null} heroclassname={""}>
        <BlogHero />
        <BlogPage posts={posts} />
      </DefaultLayout>
    </PageContentProvider>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getArticles({
    pagination: {
      start: 0,
      limit: 24,
    },
    sort: "publishedAt:desc",
  });
  const headerPage = await getHeaderPage();
  const footerPage = await getFooterPage();
  const siteSettings = await getSiteSettings();
  const blogPage = await getBlogPage();
  const errorPage = await getErrorPage();

  return {
    props: {
      blogPage,
      posts,
      headerPage,
      footerPage,
      siteSettings: siteSettings || null,
      errorPage,
    },
    revalidate: globalRevalidateTiming,
  };
};
