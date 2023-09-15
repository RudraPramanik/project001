import {
  GetArticlesQuery,
  GetAuthorBlogPageQuery,
  GetBlogPageQuery,
  GetErrorPageQuery,
  GetFooterPageQuery,
  GetHeaderPageQuery,
  GetSiteSettingsQuery,
} from "@adapters";
import { getArticles, getSiteSettings } from "@adapters/api";
import {
  getAuthorBlogPage,
  getBlogPage,
  getErrorPage,
  getFooterPage,
  getHeaderPage,
} from "@adapters/api/pages";
import { BlogPage } from "@components";
import AuthorBlogHero from "@components/blog/AuthorBlogHero";
import DefaultError from "@components/shared/DefaultError";
import { DefaultLayout, SeoLayout } from "@layouts";
import {
  getStrapiImage,
  globalRevalidateTiming,
  hostname,
  siteName,
  spinify,
} from "@utils";
import PageContentProvider from "@utils/contexts/page-content.context";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

export interface CategoryPostsProps {
  posts: GetArticlesQuery;
  author: GetArticlesQuery["articles"]["data"][0]["attributes"]["author"];
  headerPage: GetHeaderPageQuery;
  footerPage: GetFooterPageQuery;
  authorBlogPage: GetAuthorBlogPageQuery;
  blogPage: GetBlogPageQuery;
  siteSettings: GetSiteSettingsQuery;
  errorPage: GetErrorPageQuery;
}
const CategoryPosts: React.FC<CategoryPostsProps> = ({
  posts,
  author,
  authorBlogPage,
  footerPage,
  headerPage,
  blogPage,
  siteSettings,
  errorPage,
}) => {
  if (!posts || !author) return <DefaultError />;

  return (
    <SeoLayout
      type="other"
      noindex={true}
      settings={siteSettings}
      meta={{
        path: `/${
          siteSettings.setting.data.attributes.global_links.find(
            (link) => link.original_name.toLowerCase() == "auteur",
          ).slug
        }${author.data.attributes.slug}`,
        title:
          authorBlogPage?.authorBlogPage?.data?.attributes?.seo?.metaTitle ||
          `${author.data.attributes.name} Posts | tbeste.nl`,
        description:
          spinify(
            authorBlogPage?.authorBlogPage?.data?.attributes?.seo?.metaSocial
              ?.description,
            {
              author_name: author.data.attributes.name,
            },
          ) || `${author.data.attributes.name} Posts`,
        openGraph: {
          url: `${hostname}/${
            siteSettings.setting.data.attributes.global_links.find(
              (link) => link.original_name.toLowerCase() == "auteur",
            ).slug
          }${author.data.attributes.slug}`,
          title:
            authorBlogPage?.authorBlogPage?.data?.attributes?.seo?.metaSocial
              ?.title || `${author.data.attributes.name} Posts | tbeste.nl`,
          description:
            spinify(
              authorBlogPage?.authorBlogPage?.data?.attributes?.seo?.metaSocial
                ?.description,
              {
                author_name: author.data.attributes.name,
              },
            ) || `${author.data.attributes.name} Posts`,
          site_name: siteName,
          images: [
            {
              url: getStrapiImage(
                authorBlogPage?.authorBlogPage?.data?.attributes?.seo?.metaImage
                  ?.data?.attributes?.url,
              ),
              alt:
                authorBlogPage?.authorBlogPage?.data?.attributes?.seo
                  ?.metaSocial?.title ||
                `${author.data.attributes.name} Posts | tbeste.nl`,
            },
          ],
        },
        images: [
          getStrapiImage(
            authorBlogPage?.authorBlogPage?.data?.attributes?.seo?.metaImage
              ?.data?.attributes?.url,
          ),
        ],
      }}
    >
      <PageContentProvider
        header={headerPage}
        footer={footerPage}
        settings={siteSettings}
        errorPage={errorPage}
        content={blogPage}
      >
        <DefaultLayout hero={null} heroclassname={""}>
          <AuthorBlogHero blogPage={blogPage} author={author} />
          <div className=" -z-50 ">
            <BlogPage posts={posts} />
          </div>
        </DefaultLayout>
      </PageContentProvider>
    </SeoLayout>
  );
};

export default CategoryPosts;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const headerPage = await getHeaderPage();
  const footerPage = await getFooterPage();
  const errorPage = await getErrorPage();
  const authorBlogPage = await getAuthorBlogPage();
  const blogPage = await getBlogPage();
  const articles = await getArticles({
    pagination: {
      start: 0,
      limit: 14,
    },
    filters: { author: { slug: { eq: params.slug as string } } },
    sort: "publishedAt:desc",
  });

  const author = articles.articles?.data[0]?.attributes?.author;

  const siteSettings = await getSiteSettings();
  return {
    props: {
      posts: articles || null,
      author: author || null,
      headerPage,
      footerPage,
      authorBlogPage,
      blogPage,
      siteSettings: siteSettings || null,
      errorPage,
    },
    revalidate: globalRevalidateTiming,
  };
};
