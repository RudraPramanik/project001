import { GetHomePageQuery } from "@adapters";
import { MyLink } from "@design-system";
import ChevronUpIcon from "@design-system/icons/ChevronIcon";
import { usePageContent } from "@utils/contexts/page-content.context";
import Link from "next/link";
import React from "react";

export interface AllCategoriesProps {}
const AllCategories: React.FC<AllCategoriesProps> = () => {
  const { content } = usePageContent();
  const homePageContent = content as GetHomePageQuery;

  return (
    <div className=" max-w-4xl mx-auto text-[#1B1B1F]">
      <div className="flex flex-col items-center justify-center py-10">
        <h2 className=" font-extrabold max-w-lg text-center sm:leading-[2.7rem] mo:mx-4">
          {
            homePageContent.homePage.data.attributes
              .all_categories_section_title
          }
        </h2>
        <p className="font-light mt-3 text-center sm:text-left mo:mx-4">
          {
            homePageContent.homePage.data.attributes
              .all_categories_section_description
          }
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {homePageContent.homePage.data.attributes.subcat.map((cat) => {
          return <CategoriesCard key={cat.slug} cat={cat} />;
        })}
      </div>
    </div>
  );
};

export default AllCategories;
export interface CategoriesCardProps {
  cat: GetHomePageQuery["homePage"]["data"]["attributes"]["subcat"][number];
}
const CategoriesCard: React.FC<CategoriesCardProps> = ({ cat }) => {
  return (
    <div className="flex flex-col px-4 py-3 rounded-md  space-y-4">
      <MyLink href={cat.slug}>
        <a className="flex flex-row  items-center space-x-2">
          <span className="uppercase border-b-2 border-[#5AC7E5] font-black text-md">
            {cat.cat_name}
          </span>
        </a>
      </MyLink>

      {cat.subsubcat.map((subCat) => (
        <Link href={`${subCat.slug}`} key={subCat.name}>
          <a className="flex flex-col justify-center ">
            <span className="w-full border-b-[1px] pb-2 border-black/10 text-sm font-light flex justify-between">
              <span>{subCat.name}</span>
              <span className="block sm:hidden">
                <ChevronUpIcon className="h-3 w-3 text-gray-300 rotate-[270deg]" />
              </span>
            </span>
          </a>
        </Link>
      ))}
    </div>
  );
};
