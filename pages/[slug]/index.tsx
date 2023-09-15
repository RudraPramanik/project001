import {
  GetArticlesQuery,
  GetBuyingGuidesQuery,
  GetErrorPageQuery,
  GetFooterPageQuery,
  GetHeaderPageQuery,
  GetSiteSettingsQuery,
  PublicationState,
} from "@adapters";
import {
  CategoriesResults,
  CategoriesTypeBySlug,
  getArticles,
  getBuyingGuides,
  getCategoryBySlug,
  getProductGroupBySlug,
  getRelatedProductGroups,
  getSiteSettings,
  ProductResults,
  RelatedProductGroupsResults,
} from "@adapters/api";
import {
  getErrorPage,
  getFooterPage,
  getHeaderPage,
  getProductCategoryPage,
  getProductGroupPage,
  getSingleBlogPage,
} from "@adapters/api/pages";
import { BlogPost, CategorySlugPage, ProductGroupSlugPage } from "@components";
import DefaultError from "@components/shared/DefaultError";
import {
  AccordionType,
  capitalize,
  catsLinks,
  FAQType,
  globalRevalidateTiming,
  IPageType,
  MetaType,
  strapiHostname,
} from "@utils";
import PageContentProvider from "@utils/contexts/page-content.context";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";

export interface SingleSlugProps {
  meta: MetaType;
  type: IPageType;
  post: GetArticlesQuery["articles"]["data"][0];
  products: ProductResults;
  category: CategoriesTypeBySlug;
  relatedProductGroups: RelatedProductGroupsResults;
  buyingGuide: GetBuyingGuidesQuery["buyingGuides"]["data"][0];
  categories: CategoriesResults["categories"];
  content: any;
  accordions: AccordionType[];
  headerPage: GetHeaderPageQuery;
  siteSettings: GetSiteSettingsQuery;
  footerPage: GetFooterPageQuery;
  errorPage: GetErrorPageQuery;
  previewMode: boolean;
  slug: string;
}
const SingleSlug: React.FC<SingleSlugProps> = ({
  meta,
  type,
  post,
  products,
  category,
  relatedProductGroups,
  buyingGuide,
  categories,
  content,
  headerPage,
  footerPage,
  accordions,
  siteSettings,
  errorPage,
  previewMode,
  slug,
}) => {
  React.useEffect(() => {
    if (type === "article") {
      (async () => {
        await fetch(`/api/views/${post.attributes.slug}`);
      })();
    }
    // prettier-ignore
    {/* eslint-disable-next-line react-hooks/exhaustive-deps */ }
  }, [type]);
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  if (!router.isFallback && !slug) {
    return (
      <PageContentProvider
        accordions={accordions}
        content={errorPage}
        header={headerPage}
        footer={footerPage}
        settings={siteSettings}
        errorPage={errorPage}
      >
        <DefaultError />
      </PageContentProvider>
    );
  }

  if (type === "category") {
    return (
      <PageContentProvider
        header={headerPage}
        footer={footerPage}
        content={content}
        accordions={accordions}
        settings={siteSettings}
        errorPage={errorPage}
      >
        <CategorySlugPage
          meta={meta}
          category={category}
          categories={categories}
        />
      </PageContentProvider>
    );
  } else if (type === "article") {
    return (
      <PageContentProvider
        content={content}
        accordions={accordions}
        header={headerPage}
        footer={footerPage}
        settings={siteSettings}
        errorPage={errorPage}
      >
        <BlogPost post={post} previewMode={previewMode} />
      </PageContentProvider>
    );
  } else if (type === "productGroup") {
    return (
      <PageContentProvider
        accordions={accordions}
        content={content}
        header={headerPage}
        footer={footerPage}
        settings={siteSettings}
        errorPage={errorPage}
      >
        <ProductGroupSlugPage
          buyingGuides={buyingGuide}
          productGroup={products}
          relatedPrdGroups={relatedProductGroups}
        />
      </PageContentProvider>
    );
  } else {
    return (
      <PageContentProvider
        accordions={accordions}
        content={errorPage}
        header={headerPage}
        footer={footerPage}
        settings={siteSettings}
        errorPage={errorPage}
      >
        <DefaultError />
      </PageContentProvider>
    );
  }
};

export default SingleSlug;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [];
  return {
    paths: paths || [],
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps = async ({ params, preview }) => {
  let type: "category" | "productGroup" | "article" = null;

  const category = await getCategoryBySlug(params.slug as string);
  const productGroup = await getProductGroupBySlug(params.slug as string);
  const previewMode = preview ? true : null;

  const article = await getArticles({
    filters: { slug: { eq: params.slug as string } },
    publicationState: previewMode
      ? PublicationState.Preview
      : PublicationState.Live,
  });
  const headerPage = await getHeaderPage();
  const footerPage = await getFooterPage();
  const siteSettings = await getSiteSettings();
  const errorPage = await getErrorPage();
  if (category) {
    type = "category";
  } else if (article.articles.data.length > 0) {
    type = "article";
  } else if (productGroup) {
    type = "productGroup";
  }

  let content: any = null;
  let products: ProductResults = null;
  let relatedProductGroups: RelatedProductGroupsResults = null;
  let post: GetArticlesQuery["articles"]["data"][0] = null;
  let buyingGuide: GetBuyingGuidesQuery["buyingGuides"]["data"][0] = null;
  let accordions: AccordionType[] = null;
  let meta: MetaType = {
    path: "",
    title: "",
    description: "",
    faq: [],
    author: "",
    images: [],
    dateModified: "",
    datePublished: "",
  };
  try {
    if (type === "category") {
      content = await getProductCategoryPage();
      accordions = [
        ...siteSettings.setting.data.attributes.global_accordions.map(
          (link) => {
            return {
              name: link.name,
              link: link.slug,
            };
          },
        ),

        {
          name: category.name,
          link: `/${category.slug}`,
        },
      ];

      meta = {
        path: `/${category.slug}`,
        title: `De beste ${category.name} producten`,
        description: `Hier vind je alle ${category.name} producten waar bestenu onderzoek naar heeft gedaan.`,
      };
    } else if (type === "article") {
      content = await getSingleBlogPage();

      accordions = [
        ...siteSettings.setting.data.attributes.global_accordions.map(
          (link) => {
            return {
              name: link.name,
              link: link.slug,
            };
          },
        ),
      ];
      post = article.articles.data[0];
      meta = {
        path: `/${params.slug}/`,
        title: post?.attributes.title || "",
        images:
          [`${strapiHostname}${post?.attributes.image?.data.attributes.url}`] ||
          [],
        author: post?.attributes.author?.data.attributes.name || "",
        dateModified: post?.attributes.updatedAt || "",
        datePublished: post?.attributes.publishedAt || "",
        description: post?.attributes.description || "",
      };
    } else if (type === "productGroup") {
      content = await getProductGroupPage();
      products = productGroup;
      const bg = await getBuyingGuides({
        filters: { product_group_slug: { eq: params.slug as string } },
      });

      buyingGuide = bg?.buyingGuides?.data[0];
      const rp = await getRelatedProductGroups(
        productGroup?.product_group_name,
      );
      relatedProductGroups = {
        super_relevant_product_groups:
          rp?.super_relevant_product_groups.slice(0, 6) || null,
        less_relevant_product_groups:
          rp?.less_relevant_product_groups.slice(0, 6) || null,
      };
      const title = `Beste ${capitalize(products.product_group_name)} ${" "} uit
            ${capitalize(
              new Date().toLocaleString("nl", { month: "short" }),
            )} ${" "}
            ${new Date().getFullYear()} (Top 10)`;

      const faq: FAQType[] = [];
      buyingGuide?.attributes.buying_guide_components
        .filter((bg: any) => bg.faq === true)
        .map((bg: any) => {
          faq.push({
            questionName: bg.title,
            acceptedAnswerText: bg.content.replace(/"/gi, "'"),
          });
        });

      accordions = [
        ...siteSettings.setting.data.attributes.global_accordions.map(
          (link) => {
            return {
              name: link.name,
              link: link.slug,
            };
          },
        ),
      ];
      meta = {
        path: `/${params.slug}/`,
        title,
        faq: (faq as any) || [],
        author: buyingGuide?.attributes.writer?.data.attributes.name || "",
        dateModified: buyingGuide?.attributes.updatedAt || "",
        datePublished: buyingGuide?.attributes.publishedAt || "",
        images: [productGroup.featured_image] || [],
        description: `Er zijn ongeveer ${products.products.length} ${products.plural} op de markt. Benieuwd wat de beste ${products.product_group_name} is? Wij hebben het onderzocht!`,
      };

      // spintaxes.spintaxes.data.map((spintax) => {
      //   prodsSpinTaxes[spintax.attributes.title] = spinTax.unspin(
      //     spintax.attributes.content
      //       .replace(/product.name/g, products.product_group_name)
      //       .replace(/product.plural/g, products.plural)
      //       .replace(/product.count/g, products.product_count)
      //   );
      // });
    }
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      slug: params.slug,
      meta,
      type,
      post: post || null,
      products,
      relatedProductGroups: relatedProductGroups || null,
      accordions: accordions || [],
      buyingGuide: buyingGuide || null,
      categories: catsLinks.categories,
      category: category || null,
      content: content || null,
      headerPage,
      footerPage,
      errorPage,
      siteSettings: siteSettings || null,
      previewMode,
    },
    revalidate: globalRevalidateTiming,
  };
};
