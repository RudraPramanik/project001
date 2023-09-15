import { MyImage } from "@design-system";
import React from "react";

export interface CatTopProps {}
const CatTop: React.FC<CatTopProps> = () => {
  return (
    <>
      <div className=" h-full w-full cursor-not-allowed">
        <div className="hidden sm:block ">
          <MyImage
            src="/images/ills/home/home-cat-top.png"
            className="cursor-not-allowed select-none"
            alt="Hero Earth Ills"
            layout="responsive"
            width={1920}
            height={207}
          />
        </div>
        <div className="block sm:hidden">
          <MyImage
            src="/images/ills/product-group/ranglist-top-mb.png"
            className="cursor-not-allowed select-none"
            alt="Hero Earth Ills"
            layout="responsive"
            width={320}
            height={120}
          />
        </div>
      </div>
    </>
  );
};

export default CatTop;
