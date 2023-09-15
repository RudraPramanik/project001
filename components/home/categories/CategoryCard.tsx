import { MyLink } from "@design-system";
import React from "react";

export interface CategoryCardProps {
  title: string;
  src: string;
  slug: string;
}
const CategoryCard: React.FC<CategoryCardProps> = ({ title, src, slug }) => {
  return (
    <MyLink href={slug}>
      <a className="relative">
        <div className="absolute z-[1] top-[6px] right-0 left-[5px] bottom-0 bg-black w-full h-full rounded-2xl" />
        <div className="flex w-full z-[2] relative flex-col sm:text-center rounded-2xl font-extrabold items-center border-2 border-black bg-white border-2">
          <div className="p-2">
            <div className="border-2 border-black rounded-2xl bg-[#3992AA]">
              <img
                src={src}
                alt={title}
                width={500}
                height={300}
                className="rounded-2xl"
              />
            </div>
            <div>
              <p className="text-3xl sm:text-base text-black p-4 ">{title}</p>
            </div>
          </div>
        </div>
      </a>
    </MyLink>
  );
};

export default CategoryCard;
