import { CategoriesType, CategoriesTypeBySlug } from "@adapters/api";
import { CategoriesHero } from "@components/categories";
import { Button, ChevronDownIcon, ChevronIcon, MyLink } from "@design-system";
import { DefaultLayout } from "@layouts";
import { categoriesData, MetaType } from "@utils";
import clsx from "clsx";
import { useRouter } from "next/router";
import React from "react";

export interface CategorySlugPageProps {
  meta: MetaType;
  category: CategoriesTypeBySlug;
  categories: CategoriesType[];
}
const CategorySlugPage: React.FC<CategorySlugPageProps> = ({
  category,
  categories,
}) => {
  const [catOpen, setCatOpen] = React.useState(false);
  const router = useRouter();

  const slug = router.query.slug;
  return (
    <DefaultLayout
      heroclassname=" relative z-10"
      hero={<CategoriesHero title={category.name} slug={category.slug} />}
    >
      <div className=" relative bg-[#F5FCFF] py-64 -my-72 4xl:py-[500px] 3xl:py-[450px] 3xl:-my-[600px]  4xl:-my-[700px]">
        {/* mobile navigation btn */}
        <div className="block sm:hidden mx-4">
          <Button
            iconRight={catOpen ? ChevronIcon : ChevronDownIcon}
            layout="secondary"
            size="larger"
            className="w-full capitalize"
            onClick={() => setCatOpen((prev) => !prev)}
          >
            categories
          </Button>
        </div>
        {/* mobile navigation card */}
        <div></div>
        {catOpen && (
          <div className=" bg-[#2A3FBA]/80 mx-4 py-5 mt-5 rounded-xl border-2 border-black">
            <div className=" -mt-5 ">
              <img
                src="/svgs/cat-nav.svg"
                alt=""
                width={580}
                height={248}
                className=""
              />
            </div>
            {/* cat card mobile */}
            {categories.map((cats) => {
              const active = cats.slug === slug;
              return (
                <React.Fragment key={cats.slug}>
                  <MyLink href={cats.slug}>
                    <a className=" w-1/2 mx-auto my-2 flex flex-col sm:text-center rounded-2xl font-extrabold items-center border-2 border-black bg-white border-l-2 border-t-2 border-r-[4px] border-b-[4px]">
                      <div className="p-1">
                        <div
                          className={clsx(
                            active
                              ? "block border-2 border-black rounded-xl"
                              : "hidden",
                          )}
                        >
                          <img
                            src={
                              categoriesData.find(
                                (cat) => cat.name === cats.name,
                              ).src
                            }
                            alt={cats.name}
                            width={158}
                            height={97}
                            className=" w-[98%] rounded-xl "
                          />
                        </div>
                        <div>
                          <p className="text-xl text-black p-4 ">{cats.name}</p>
                        </div>
                      </div>
                    </a>
                  </MyLink>
                </React.Fragment>
              );
            })}
          </div>
        )}
        {/* mobile navigation end*/}
        {/* content */}
        <div className=" absolute hidden sm:block mt-56  right-0 w-1/5 ">
          <img
            src="/svgs/right-ills.svg"
            className="cursor-not-allowed select-none"
            alt="about Ills"
            width={650}
          />
        </div>{" "}
        {/* ills */}
        <div className=" max-w-4xl 2xl:max-w-5xl mx-auto grid grid-cols-1  sm:grid-cols-3 gap-0 sm:gap-8  sm:-mt-10 ">
          <div className=" col-span-1 mx-auto space-y-2 hidden sm:block ">
            <div className="grid grid-cols-1 relative z-50  gap-y-2 sm:gap-y-1 w-full mt-6">
              {categories.map((cats) => {
                const active = cats.slug === slug;
                return (
                  <React.Fragment key={cats.slug}>
                    <MyLink href={cats.slug}>
                      <a
                        className={clsx(
                          "flex w-full flex-col sm:text-center rounded-2xl font-extrabold items-center border-black bg-white hover:bg-blue-400  text-black hover:text-white cursor-pointer border-l-2 border-t-2 border-r-[6px] border-b-[6px]",
                          active ? "    " : " ",
                        )}
                      >
                        <div className="p-1">
                          {/* <div className="border-2 border-black rounded-2xl"> */}
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
                              className="rounded-2xl bord er-2 border-black  "
                            />
                          </div>
                          <div>
                            <p className=" text-3xl sm:text-base px-4 py-1 ">
                              {cats.name}
                            </p>
                          </div>
                        </div>
                      </a>
                    </MyLink>
                  </React.Fragment>
                );
              })}
            </div>

            {/* navigation btn */}
          </div>
          <div className=" col-span-2 sm:mt-10 2xl:mt-28 3xl:mt-36 ">
            <div className="w-full">
              <div className=" w-full items-center text-left sm:text-center space-y-5">
                {category?.subcategories?.map((subcat) => (
                  <CategoriesCard subcat={subcat} key={subcat.slug} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* congtent */}
      </div>
    </DefaultLayout>
  );
};

export default CategorySlugPage;

interface CategoriesCardProps {
  subcat: CategoriesTypeBySlug;
}
const CategoriesCard: React.FC<CategoriesCardProps> = ({ subcat }) => {
  return (
    <div className=" px-4 py-5 3xl:py-4  bg-xbeste-blue-default bg-opacity-5">
      <MyLink href={subcat.slug}>
        <a id={subcat.slug} className="scroll-mt-6">
          <h3 className="font-black text-lg text-left">{subcat.name}</h3>
        </a>
      </MyLink>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-3 text-left ">
        {subcat?.subcategories?.map((subsubcat) => (
          <MyLink href={subsubcat.slug} key={subsubcat.slug}>
            <a>
              <p className="underline capitalize text-[#0F83A2] cursor-pointer ">
                {subsubcat.name}
              </p>
            </a>
          </MyLink>
        ))}
      </div>
    </div>
  );
};
