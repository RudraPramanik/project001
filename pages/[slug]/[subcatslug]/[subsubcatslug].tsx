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
  getProductGroupsByCategory,
  getSiteSettings,
  ProductGroup,
  ProductGroupsResults,
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

export interface SubSubCatSlugPageProps {
  meta: MetaType;
  category: CategoriesTypeBySlug;
  categories: CategoriesResults["categories"];
  accordions: AccordionType[];
  content: GetProductCategoryPageQuery;
  headerPage: GetHeaderPageQuery;
  siteSettings: GetSiteSettingsQuery;
  footerPage: GetFooterPageQuery;
  errorPage: GetErrorPageQuery;
  products: ProductGroupsResults;
  accordion: AccordionType[];
  categorycontent: GetProductCategoryPageQuery;
}
const SubSubCatSlugPage: React.FC<SubSubCatSlugPageProps> = ({
  category,
  footerPage,
  siteSettings,
  errorPage,
  headerPage,
  content,
  accordions,
  products,
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
        hero={<CategoriesHero title={category.name} slug={category.slug} />}
      >
        <div className=" absolute hidden sm:block mt-56  right-0 w-1/5 -z-50 ">
          <img
            src="/svgs/right-ills.svg"
            className="cursor-not-allowed select-none"
            alt="about Ills"
            width={650}
          />
        </div>{" "}
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 px-4 sm:px-0">
          {products.product_groups.map((cat) => (
            <ProductGroupCard prdGrp={cat} key={cat.slug} />
          ))}
        </div>
      </DefaultLayout>
    </PageContentProvider>
  );
};

export default SubSubCatSlugPage;

interface ProductGroupCardProps {
  prdGrp: ProductGroup;
}
const ProductGroupCard: React.FC<ProductGroupCardProps> = ({ prdGrp }) => {
  return (
    <div className="relative">
      <div className="absolute -z-10 top-[13px] right-0 left-[5px] bottom-0 bg-black w-full h-[95%] rounded-2xl" />
      <MyLink href={prdGrp.slug}>
        <a className="my-2 flex flex-col sm:text-center rounded-2xl font-extrabold items-center border-2 border-black bg-[#E3EEFF] border-l-2 border-t-2">
          <div className="p-1 w-full">
            <div className="block border-2 border-black rounded-xl w-full">
              <img
                src={prdGrp.featured_image}
                alt={prdGrp.name}
                className=" w-full object-contain bg-white p-4 rounded-xl h-[180px]"
              />
            </div>
            <div>
              <p className="text-center items-center text-xl h-20 text-black p-4 capitalize">
                {prdGrp.name}
              </p>
            </div>
          </div>
        </a>
      </MyLink>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [];
  const allCategories = await getCategories();
  const flattenedCats: SubSubCategoriesType[] = [];
  allCategories.categories.map((cat) => {
    cat.sub_categories.map((subcat) => {
      subcat.subsub_categories.map((subsubcat) => {
        flattenedCats.push({
          name: subsubcat.name,
          slug: subsubcat.slug,
          depth_level: subsubcat.depth_level,
        });
      });
    });
  });

  flattenedCats.map((category) => {
    paths.push({
      params: {
        slug: category.slug.split("/")[0],
        subcatslug: category.slug.split("/")[1],
        subsubcatslug: category.slug.split("/")[2],
      },
    });
  });

  return {
    paths: paths || [],
    fallback: "blocking",
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  let accordion: AccordionType[] = null;
  let products: ProductGroupsResults = null;
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
  let thirdCat = null;
  try {
    const firstCat = await getCategoryBySlug(`${params.slug}`);
    const secondCat = await getCategoryBySlug(
      `${params.slug}/${params.subcatslug}`,
    );
    thirdCat = await getCategoryBySlug(
      `${params.slug}/${params.subcatslug}/${params.subsubcatslug}`,
    );
    products = await getProductGroupsByCategory(thirdCat.name);

    accordion = [
      ...siteSettings.setting.data.attributes.global_accordions.map((link) => {
        return {
          name: link.name,
          link: link.slug,
        };
      }),
      {
        name: firstCat.name,
        link: `/${firstCat.slug}`,
      },
      {
        name: secondCat.name,
        link: `/${secondCat.slug}`,
      },
      {
        name: thirdCat.name,
        link: `/${thirdCat.slug}`,
      },
    ];

    meta = {
      path: `/${thirdCat.slug}/`,
      title: `Op zoek naar ${thirdCat.name}? Start je zoektocht hier`,
      description: `Hier vind je alle producten die te maken hebben met ${thirdCat.name}. Neem je een kijkje?`,
    };
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      meta,
      products: products || null,
      categories: catsLinks.categories,
      category: thirdCat,
      accordion,
      content: content || null,
      headerPage,
      footerPage,
      errorPage,
      siteSettings: siteSettings || null,
    },
    revalidate: globalRevalidateTiming,
  };
};
