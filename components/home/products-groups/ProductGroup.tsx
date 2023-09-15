import { MyLink } from "@design-system";
import { MyImage } from "@design-system";
import React from "react";

export interface ProductGroupProps {
  categoryName?: string;
  name: string;
  image: string;
  slug: string;
}
const ProductGroupCard: React.FC<ProductGroupProps> = ({
  categoryName,
  name,
  image,
  slug,
}) => {
  return (
    <MyLink href={slug}>
      <a className="bg-white shadow-2xl py-4 3xl:py-5 4xl:py-10 5xl:py-16 3.5xl:py-8 rounded-md space-y-4 2xl:space-y-12 w-full">
        {categoryName && (
          <span className="rounded-r-full bg-tbeste-orange-default text-white py-[1.5px] 2xl:py-[2px] px-4 2xl:px-8 text-xs 2xl:text-base capitalize">
            {categoryName}
          </span>
        )}

        <div className="flex flex-col items-center space-y-4">
          <div className=" block  relative overflow-hidden py-2 sm:py-0">
            <MyImage
              src={image}
              alt={name}
              width={80}
              height={119}
              objectFit="contain"
            />
          </div>
        </div>
      </a>
    </MyLink>
  );
};

export default ProductGroupCard;
