import { MyImage } from "@design-system";
import React from "react";

export interface ProductGroupsIlsProps {}
const ProductGroupsIls: React.FC<ProductGroupsIlsProps> = () => {
  return (
    <>
      <div className="z-[-2] -top-20 left-0 absolute h-full w-full cursor-not-allowed">
        <MyImage
          src="/images/ills/home/first1.png"
          className="select-none"
          draggable={false}
          alt="Hero Earth Ills"
          layout="responsive"
          width={1920}
          height={2058}
        />
      </div>

      <div className="block sm:hidden z-[-2] -top-40 left-0 absolute h-full w-full cursor-not-allowed">
        <MyImage
          src="/images/ills/home/first-mb.svg"
          className="select-none"
          draggable={false}
          alt="Hero Earth Ills"
          layout="responsive"
          width={320}
          height={1558}
        />
      </div>
    </>
  );
};

export default ProductGroupsIls;

{
  /* <div className="hidden sm:block z-[-2] -top-20 left-0 absolute h-full w-full cursor-not-allowed">
<MyImage
  src="/images/ills/home/first.png"
  className="select-none"
  draggable={false}
  alt="Hero Earth Ills"
  layout="responsive"
  width={1920}
  height={2058}
/>
</div>

<div className="block sm:hidden z-[-2] -top-40 left-0 absolute h-full w-full cursor-not-allowed">
<MyImage
  src="/images/ills/home/first-mb.svg"
  className="select-none"
  draggable={false}
  alt="Hero Earth Ills"
  layout="responsive"
  width={320}
  height={1558}
/>
</div>
</> */
}
