import { MyImage } from "@design-system";
import React from "react";

export interface CatBtmProps {}
const CatBtm: React.FC<CatBtmProps> = () => {
  return (
    <div className="z-[-1] -mt-2 sm:-mt-6 h-full w-full cursor-not-allowed">
      <div className="hidden sm:block ">
        <MyImage
          src="/images/ills/home/home-cat-bottom.png"
          className="cursor-not-allowed select-none"
          alt="Hero Earth Ills"
          layout="responsive"
          width={1920}
          height={456}
        />
      </div>
      <div className="block sm:hidden">
        <MyImage
          src="/images/ills/product-group/ranglist-bottom-mb.png"
          className=" cursor-not-allowed select-none"
          alt="Hero Earth Ills"
          layout="responsive"
          width={320}
          height={76}
        />
      </div>
    </div>
  );
};

export default CatBtm;
