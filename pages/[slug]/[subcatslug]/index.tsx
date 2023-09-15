import {
  GetErrorPageQuery,
  GetFooterPageQuery,
  GetHeaderPageQuery,
  GetProductCategoryPageQuery,
  GetSiteSettingsQuery,
} from "@adapters";
import {
  CategoriesResults,
  CategoriesTypeBySlug,
  getCategories,
  getCategoryBySlug,
  getSiteSettings,
  SubSubCategoriesType,
} from "@adapters/api";
import {
  getErrorPage,
  getFooterPage,
  getHeaderPage,
  getProductCategoryPage,
} from "@adapters/api/pages";
import { CategoriesHero } from "@components/categories";
import { MyLink } from "@design-system";
import { DefaultLayout } from "@layouts";
import {
  AccordionType,
  catsLinks,
  globalRevalidateTiming,
  MetaType,
} from "@utils";
import PageContentProvider from "@utils/contexts/page-content.context";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

export interface SubCatSlugPageProps {
  meta: MetaType;
  category: CategoriesTypeBySlug;
  categories: CategoriesResults["categories"];
  accordions: AccordionType[];
  content: GetProductCategoryPageQuery;
  headerPage: GetHeaderPageQuery;
  siteSettings: GetSiteSettingsQuery;
  footerPage: GetFooterPageQuery;
  errorPage: GetErrorPageQuery;
}
const SubCatSlugPage: React.FC<SubCatSlugPageProps> = ({
  category,
  footerPage,
  siteSettings,
  errorPage,
  headerPage,
  content,
  accordions,
}) => {
  return (
    <PageContentProvider
      header={headerPage}
      footer={footerPage}
      settings={siteSettings}
      errorPage={errorPage}
      content={content}
      accordions={accordions}
    >
      <DefaultLayout
        heroclassname=""
        hero={<CategoriesHero title={category?.name} slug={category?.slug} />}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 px-4 sm:px-0">
          {category?.subcategories?.map((cat) => (
            <CategoriesCard cat={cat} key={cat.slug} />
          ))}
        </div>
      </DefaultLayout>
    </PageContentProvider>
  );
};

export default SubCatSlugPage;

interface CategoriesCardProps {
  cat: CategoriesTypeBySlug;
}
const CategoriesCard: React.FC<CategoriesCardProps> = ({ cat }) => {
  return (
    <MyLink href={cat.slug}>
      <a className="my-2 flex flex-col sm:text-center rounded-2xl font-extrabold items-center border-2 border-black bg-[#E3EEFF] border-l-2 border-t-2 border-r-[6px] border-b-[6px]">
        <div className="p-1 w-full">
          <div className="block border-2 border-black rounded-xl">
            <img
              src={cat.slug}
              alt={cat.name}
              width={158}
              height={97}
              className=" w-[98%] rounded-xl "
            />
          </div>
          <div>
            <p className="text-xl text-black p-4  text-center capitalize">
              {cat.name}
            </p>
          </div>
        </div>
      </a>
    </MyLink>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [];
  const allCategories = await getCategories();
  const flattenedCats: SubSubCategoriesType[] = [];
  allCategories.categories.map((cat) => {
    cat.sub_categories.map((subcat) => {
      flattenedCats.push({
        name: subcat?.name,
        slug: subcat.slug,
        depth_level: subcat.depth_level,
      });
    });
  });

  flattenedCats.map((category) => {
    paths.push({
      params: {
        slug: category.slug.split("/")[0],
        subcatslug: category.slug.split("/")[1],
      },
    });
  });

  return {
    paths: paths || [],
    fallback: "blocking",
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  let accordions: AccordionType[] = null;
  let subSlugCategory: CategoriesTypeBySlug = null;
  let slugCategory: CategoriesTypeBySlug = null;
  let meta: MetaType = {
    path: "",
    title: "",
    description: "",
  };

  const headerPage = await getHeaderPage();
  const footerPage = await getFooterPage();
  const siteSettings = await getSiteSettings();
  const errorPage = await getErrorPage();
  const content = await getProductCategoryPage();

  try {
    slugCategory = await getCategoryBySlug(params.slug as string);
    subSlugCategory = await getCategoryBySlug(
      `${params.slug}/${params.subcatslug}`,
    );
    accordions = [
      ...siteSettings.setting.data.attributes.global_accordions.map((link) => {
        return {
          name: link?.name,
          link: link.slug,
        };
      }),
      {
        name: slugCategory?.name,
        link: `/${slugCategory.slug}`,
      },
      {
        name: subSlugCategory?.name,
        link: `/${subSlugCategory.slug}`,
      },
    ];

    meta = {
      path: `/${subSlugCategory.slug}`,
      title: `De beste ${subSlugCategory?.name} producten`,
      description: `Hier vind je alle ${subSlugCategory?.name} producten waar bestenu onderzoek naar heeft gedaan.`,
    };
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      meta,
      category: subSlugCategory || null,
      categories: catsLinks.categories,
      accordions,
      content: content || null,
      headerPage,
      footerPage,
      errorPage,
      siteSettings: siteSettings || null,
    },
    revalidate: globalRevalidateTiming,
  };
};
