import { CategoriesType, SubCategoriesType } from "@adapters/api";
import Link from "next/link";
import React from "react";

export interface AllCategoriesCardProps {
  cat: CategoriesType;
}
const AllCategoriesCard: React.FC<AllCategoriesCardProps> = ({ cat }) => {
  return (
    <div className="w-full">
      <div className=" w-full items-center text-left sm:text-center space-y-0">
        <div className=" w-full relative "></div>
        <div className="card my-4 space-y-5 px-4 sm:px-0 mt-8 sm:mt-0">
          {cat.sub_categories.map((subcat) => (
            <CategoriesCard subcat={subcat} key={subcat.slug} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCategoriesCard;

export interface CategoriesCardProps {
  subcat: SubCategoriesType;
}
const CategoriesCard: React.FC<CategoriesCardProps> = ({ subcat }) => {
  return (
    <div className="px-4 py-5 3xl:py-4 ">
      <Link href={`${subcat.slug}`}>
        <a>
          <h3 className="font-black text-lg text-left">{subcat.name}</h3>
        </a>
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 mt-0 text-left text-[#0F83A2] cursor-pointer underline ">
        {subcat.subsub_categories.map((subsubcat) => (
          <Link href={`${subsubcat.slug}`} key={subsubcat.slug}>
            <a>
              <p className="py-1">{subsubcat.name}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};
