import React from "react";
import { MyImage } from "@design-system";
import clsx from "clsx";

export interface SectionsHeaderProps {
  isDark: boolean;
  title: string;
}
const SectionsHeader: React.FC<SectionsHeaderProps> = ({ isDark, title }) => {
  return (
    <div className="flex space-x-1 sm:space-x-6 items-center px-4 sm:px-0 pt-12 sm:pt-0  ">
      <div className="hidden sm:block">
        <MyImage
          src={isDark ? "/images/svgs/line-dark.svg" : "/images/svgs/line.svg"}
          alt="tbeste"
          width={100}
          height={10}
        />
      </div>
      <div className="block sm:hidden">
        <MyImage
          src={isDark ? "/images/svgs/line-dark.svg" : "/images/svgs/line.svg"}
          alt="tbeste"
          width={70}
          height={7}
        />
      </div>

      <h2
        className={clsx(
          isDark ? " text-primary-800 " : "text-primary-100",
          "text-center font-extrabold text-2xl sm:text-3xl md:text-4xl",
        )}
      >
        {title}
      </h2>
      <div className="hidden sm:block">
        <MyImage
          src={isDark ? "/images/svgs/line-dark.svg" : "/images/svgs/line.svg"}
          alt="tbeste"
          width={100}
          height={10}
        />
      </div>
      <div className="block sm:hidden">
        <MyImage
          src={isDark ? "/images/svgs/line-dark.svg" : "/images/svgs/line.svg"}
          alt="tbeste"
          width={70}
          height={7}
        />
      </div>
    </div>
  );
};

export default SectionsHeader;
