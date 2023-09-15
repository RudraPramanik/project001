import {
  GetErrorPageQuery,
  GetFooterPageQuery,
  GetHeaderPageQuery,
  GetSiteSettingsQuery,
} from "@adapters";
import {
  CategoriesResults,
  getCategories,
  getSiteSettings,
} from "@adapters/api";
import { getFooterPage, getHeaderPage } from "@adapters/api/pages";
import { AllCategoriesCard, CategoriesHero } from "@components";
import { Button, ChevronDownIcon, ChevronIcon, MyLink } from "@design-system";
import { DefaultLayout } from "@layouts";
import { categoriesData, globalRevalidateTiming } from "@utils";
import PageContentProvider from "@utils/contexts/page-content.context";
import clsx from "clsx";
import { GetStaticProps } from "next";
import React from "react";

export interface AllCategoriesPageProps {
  categories: CategoriesResults;
  headerPage: GetHeaderPageQuery;
  footerPage: GetFooterPageQuery;
  siteSettings: GetSiteSettingsQuery;
  errorPage: GetErrorPageQuery;
}
const AllCategoriesPage: React.FC<AllCategoriesPageProps> = ({
  categories,
  footerPage,
  headerPage,
  siteSettings,
  errorPage,
}) => {
  const [catOpen, setCatOpen] = React.useState(false);

  const slug = "elektronica";

  return (
    <PageContentProvider
      header={headerPage}
      footer={footerPage}
      settings={siteSettings}
      errorPage={errorPage}
    >
      <DefaultLayout
        hero={<CategoriesHero slug="alle-categorieen" />}
        heroclassname={""}
      >
        {/* mobile navigation btn */}

        <div className="block sm:hidden mx-4">
          <Button
            iconRight={catOpen ? ChevronIcon : ChevronDownIcon}
            size="larger"
            layout="secondary"
            className="w-full capitalize"
            onClick={() => setCatOpen((prev) => !prev)}
          >
            categories
          </Button>
        </div>

        {/* mobile navigation card */}
        <div></div>
        {catOpen && (
          <div className="bg-[#2A3FBA]/80 mx-4 py-5 mt-5 rounded-2xl border-slate-700 border-xl ">
            <div className=" -mt-5 ">
              <img
                src="/svgs/cat-nav.svg"
                alt=""
                width={580}
                height={248}
                className=""
              />
            </div>
            {categories.categories.map((cat) => (
              <MyLink href={cat.slug} key={cat.slug}>
                <a className=" w-1/2 mx-auto flex flex-col my-2 text-center rounded-2xl font-extrabold items-center border-2 border-black bg-white border-l-2 border-t-2 border-r-[4px] border-b-[4px]">
                  <div className="p-2">
                    <p className="text-xl text-black p-4 ">{cat.name}</p>
                  </div>
                </a>
              </MyLink>
            ))}
          </div>
        )}

        {/* mobile navigation end*/}

        <div className=" max-w-4xl 2xl:max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-8 ">
          <div className=" col-span-1 mx-auto space-y-2 hidden sm:block ">
            <div className="grid grid-cols-1   gap-y-2 sm:gap-y-1 w-full mt-6 ">
              {/* sm screen navigation start */}
              {categories.categories.map((cats) => {
                const active = cats.slug === slug;

                return (
                  <React.Fragment key={cats.slug}>
                    <MyLink href={cats.slug}>
                      <a className="flex w-full flex-col sm:text-center rounded-2xl font-extrabold items-center border-2 border-black bg-white border-l-2 border-t-2 border-r-[6px] border-b-[6px]">
                        <div className="p-1">
                          <div className={clsx(active ? "block" : "hidden")}>
                            <img
                              src={
                                categoriesData.find(
                                  (cat) => cat.name === cats.name,
                                ).src
                              }
                              alt={cats.name}
                              width={200}
                              height={100}
                              className="rounded-2xl"
                            />
                          </div>
                          <div>
                            <p className="text-3xl sm:text-base text-black p-4 ">
                              {cats.name}
                            </p>
                          </div>
                        </div>
                      </a>
                    </MyLink>
                  </React.Fragment>
                );
              })}
              {/* sm screen navigation end */}
            </div>
          </div>

          <div className=" col-span-2">
            {categories.categories.map((cat, id) => (
              <AllCategoriesCard cat={cat} key={id} />
            ))}
            {/* cat-setion */}
          </div>
        </div>
      </DefaultLayout>
    </PageContentProvider>
  );
};

export default AllCategoriesPage;

export const getStaticProps: GetStaticProps = async () => {
  const headerPage = await getHeaderPage();
  const footerPage = await getFooterPage();
  const siteSettings = await getSiteSettings();
  const categories = await getCategories();

  return {
    props: {
      categories,
      headerPage,
      footerPage,
      siteSettings: siteSettings || null,
    },
    revalidate: globalRevalidateTiming,
  };
};
