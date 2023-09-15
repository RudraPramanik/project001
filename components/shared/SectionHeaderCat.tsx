import React from "react";
import { MyImage } from "@design-system";
import { MyLink } from "@design-system";

export interface SectionsHeaderCatProps {
  isDark: boolean;
  name: string;
  path: string;
  id: string;
}
const SectionsHeaderCat: React.FC<SectionsHeaderCatProps> = ({
  isDark,
  name,
  path,
  id,
}) => {
  return (
    <MyLink href={path}>
      <a
        id={id}
        className="flex justify-center space-x-1 sm:space-x-6 items-center py-15 px-4 sm:px-0 pt-12 sm:pt-0"
      >
        <div className="hidden sm:block">
          <MyImage
            src={
              isDark ? "/images/svgs/line-dark.svg" : "/images/svgs/line.svg"
            }
            alt="tbeste"
            width={100}
            height={15}
          />
        </div>
        <div className="block sm:hidden">
          <MyImage
            src={
              isDark ? "/images/svgs/line-dark.svg" : "/images/svgs/line.svg"
            }
            alt="tbeste"
            width={70}
            height={7}
          />
        </div>

        <h2 className="text-center font-black text-[#130042] text-2xl sm:text-3xl md:text-4xl">
          {name}
        </h2>
        <div className="hidden sm:block">
          <MyImage
            src={
              isDark ? "/images/svgs/line-dark.svg" : "/images/svgs/line.svg"
            }
            alt="tbeste"
            width={100}
            height={10}
          />
        </div>
        <div className="block sm:hidden">
          <MyImage
            src={
              isDark ? "/images/svgs/line-dark.svg" : "/images/svgs/line.svg"
            }
            alt="tbeste"
            width={70}
            height={7}
          />
        </div>
      </a>
    </MyLink>
  );
};

export default SectionsHeaderCat;
