import { GetHomePageQuery } from "@adapters";
import { usePageContent } from "@utils/contexts/page-content.context";
import React from "react";
import CategoryCard from "./CategoryCard";

export interface CategoriesProps {}
const Categories: React.FC<CategoriesProps> = () => {
  const { content, settings } = usePageContent();
  const homePageContent = content as GetHomePageQuery;
  return (
    <div>
      <img src="/images/home/cat-top-ills.svg" alt="" width={4600} />
      <div className="bg-[#5AC7E5] text-white text-center flex flex-col items-center ">
        <div className="w-full max-w-4xl mx-auto">
          <div>
            <h2 className="text-5xl font-extrabold ">
              {
                homePageContent.homePage.data.attributes
                  .categories_section_title
              }
            </h2>
            <p className="font-light text-[17px] mt-4">
              {
                homePageContent.homePage.data.attributes
                  .categories_section_description
              }
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 justify-center items-center pt-6 mx-4 sm:mx-0 relative mt-12">
            <img
              src="/images/cloud.svg"
              className="absolute top-[-134px] w-[368.26px] rotate-[1deg] right-[-13px] sm:right-[-33px]"
            />
            {settings.setting.data.attributes.Categories_Data.map((cat) => (
              <CategoryCard
                title={cat.name}
                src={categoriesData.find((ct) => ct.name === cat.name).src}
                slug={cat.slug}
                key={cat.name}
              />
            ))}
          </div>
        </div>
      </div>
      <img src="/images/home/cat-bottom-ills.svg" alt="" width={4600} />
    </div>
  );
};

export default Categories;

export const categoriesData = [
  {
    name: "Elektronica",
    path: "/elektronica/",
    src: "/images/categories/elektronica.svg",
    className: "md:rounded-tl-3xl md:col-span-2",
    imgW: 315,
    imgH: 201,
  },
  {
    name: "Computer",
    path: "/computer/",
    src: "/images/categories/computer.svg",
    className: "md:col-span-1",
    imgW: 214,
    imgH: 174,
  },
  {
    name: "Dieren",
    path: "/dieren/",
    src: "/images/categories/dieren.svg",
    className: "md:col-span-1",
    imgW: 176,
    imgH: 189,
  },
  {
    name: "Klussen",
    path: "/klussen/",
    src: "/images/categories/klussen.svg",
    className: "md:rounded-tr-3xl md:row-span-2",
    imgW: 261,
    imgH: 500,
  },
  {
    name: "Kantoor",
    path: "/kantoor/",
    src: "/images/categories/kantoor.svg",
    className: "md:col-span-1",
    imgW: 167,
    imgH: 195,
  },
  {
    name: "Outdoor",
    path: "/outdoor/",
    src: "/images/categories/outdoor.svg",
    className: "md:col-span-1",
    imgW: 190,
    imgH: 182,
  },
  {
    name: "Tuin",
    path: "/tuin/",
    src: "/images/categories/tuin.svg",
    className: "md:col-span-2",
    imgW: 364,
    imgH: 191,
  },
  {
    name: "Auto",
    path: "/auto/",
    src: "/images/categories/auto.svg",
    className: "md:rounded-bl-3xl md:col-span-1",
    imgW: 157,
    imgH: 165,
  },
  {
    name: "Keuken",
    path: "/keuken/",
    src: "/images/categories/keuken.svg",
    className: "md:col-span-2",
    imgW: 339,
    imgH: 189,
  },
  {
    name: "Kinderen",
    path: "/kinderen/",
    src: "/images/categories/kinderen.svg",
    className: "md:rounded-br-3xl md:col-span-2",
    imgW: 368,
    imgH: 200,
  },
];
