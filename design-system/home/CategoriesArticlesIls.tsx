import React from "react";
import { MyImage } from "@design-system";



export interface CategoriesArticlesIlsProps { }
const CategoriesArticlesIls: React.FC<CategoriesArticlesIlsProps> = () => {

  return (
    <div>
      <div className=" h-full w-full cursor-not-allowed">
        {/* <div className="absolute z-[0] left-0 hidden sm:block">
          <MyImage
            src="/images/ills/home/section-left.png"
            alt="sun"
            width={366}
            height={2135}
          />
        </div>

        <div className="absolute z-[0] right-0 hidden sm:block">
          <MyImage
            src="/images/ills/home/section-right.png"
            alt="sun"
            width={357.2}
            height={2135}
          />
        </div> */}

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

      {/* #7F7AD4 #7671cc */}

      {/* <div className="z-[-1] from-[#7773ce] via-[#6c67ba] to-[#4D4A84] bg-gradient-to-b -mt-10 space-y-16 py-16 text-white">
        <div className="z-[2]">
          <Categories categories={[]} />
          <Articles articles={[]} />
        </div>        
      </div> */}

      <div className="z-[-1] -mt-2 sm:-mt-6 h-full w-full cursor-not-allowed">
        <div className="hidden sm:block ">
          <MyImage
            src="/images/ills/home/vector-2.png"
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
    </div>

    // </div>
  );
};

export default CategoriesArticlesIls;







// <svg
// className="z-[-1] top-0 left-0 absolute"
// viewBox="0 0 1920 3430"
// fill="none"
// xmlns="http://www.w3.org/2000/svg"
// >
// <path
//   d="M1921 2911.57L960.5 2911.57L0.000366211 2911.57L0.000451052 273.763C0.000453364 201.88 66.7534 148.608 136.845 164.553L299.43 201.54C327.24 207.867 356.429 202.456 380.124 186.582V186.582C538.888 80.2208 733.979 42.7398 920.854 82.6965L1044.86 109.211L1122.95 133.285C1287.16 183.909 1463.65 177.62 1623.85 115.436L1768.47 59.2945C1841.88 30.7974 1921 84.9562 1921 163.704L1921 319.484L1921 2911.57Z"
//   fill="#EEB23A"
// />
// <path
//   d="M1921 2911.57L960.5 2911.57L0.000366211 2911.57L0.000451052 273.763C0.000453364 201.88 66.7534 148.608 136.845 164.553L299.43 201.54C327.24 207.867 356.429 202.456 380.124 186.582V186.582C538.888 80.2208 733.979 42.7398 920.854 82.6965L1044.86 109.211L1122.95 133.285C1287.16 183.909 1463.65 177.62 1623.85 115.436L1768.47 59.2945C1841.88 30.7974 1921 84.9562 1921 163.704L1921 319.484L1921 2911.57Z"
//   fill="url(#paint0_linear_337:1027)"
// />
// <path
//   d="M321 3055.36C22.3606 3053.54 -14.1436 2947.89 -1.11571 2924.4V2905.76H1921V3429.58C1911.48 3367.29 1852.85 3205.23 1694.52 3055.36C1496.59 2868.02 1366.5 3108.51 1098.24 2976.69C858.164 2858.73 694.299 3057.63 321 3055.36Z"
//   fill="#4D4A84"
// />
// <defs>
//   <linearGradient
//     id="paint0_linear_337:1027"
//     x1="994"
//     y1="2714.03"
//     x2="994"
//     y2="1727.84"
//     gradientUnits="userSpaceOnUse"
//   >
//     <stop stopColor="#4C4984" />
//     <stop offset="1" stopColor="#7974D0" />
//   </linearGradient>
// </defs>
// </svg>
