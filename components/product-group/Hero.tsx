import { GetProductGroupPageQuery } from "@adapters";
import { ProductResults } from "@adapters/api";
import { MyLink } from "@design-system";
import { usePageContent } from "@utils/contexts/page-content.context";
import React from "react";

export interface ProductGroupHeroProps {
  productGroup: ProductResults;
}
const ProductGroupHero: React.FC<ProductGroupHeroProps> = ({
  productGroup,
}) => {
  const { content, accordions } = usePageContent();
  const productGroupPageContent = content as GetProductGroupPageQuery;

  return (
    <div className="bg-[#5AC7E5] 4xl:-mt-36  -mt-20 relative z-10">
      <img
        src="/images/product-group/product-group-hero.svg"
        alt=""
        width={5600}
        className="hidden sm:block"
      />
      <img
        src="/images/product-group/product-group-mob-hero.svg"
        alt=""
        width={700}
        className="sm:hidden block"
      />
      <div className=" max-w-5xl mx-auto flex flex-col items-center sm:-mt-64 text-white font-bold text-center sm:pb-96 pb-56">
        <div className="hidden sm:block">
          {accordions.map((acc, i) => (
            <React.Fragment key={acc.link}>
              <MyLink href={acc.link}>
                <a className="hover:underline capitalize text-lg sm:text-md">
                  {acc.name}
                </a>
              </MyLink>
              {accordions.length - 1 !== i && <span>•</span>}
            </React.Fragment>
          ))}
        </div>
        <div className=" space-y-3 mt-16 ">
          <p className="text-xl capitalize font-extrabold">
            <span className="shadow-word">
              Laatst geüpdatet op: 05 Sep, 2022
            </span>
          </p>
          <h1 className="text-4xl capitalize font-black shadow-word">
            Beste {productGroup.product_group_name}
          </h1>
        </div>

        <div className=" sm:bg-[#4BA7CE]  sm:rounded-3xl overflow-hidden mt-10 items-center justify-center w-full px-6 sm:px-0 grid sm:grid-cols-4 grid-cols-2 sm:gap-0 gap-y-2 gap-x-1 sm:border-2 sm:border-black sm:divide-x-2 sm:divide-black sm:border-b-[4px]">
          <div className="sm:border-0 rounded-md h-14 hover:bg-[#377FB1] flex justify-center items-center border-black bg-[#4BA7CE] border-2">
            <span className="px-4">Top 8</span>
          </div>
          <div className="sm:border-0 hover:bg-[#3  77FB1] rounded-md h-14 sm:rounded-none justify-center flex items-center border-black bg-[#4BA7CE] border-2">
            <span className="px-4">Koopgids</span>
          </div>
          <div className="sm:border-0 rounded-md hover:bg-[#377FB1] h-14 sm:rounded-none border-black flex justify-center items-center bg-[#4BA7CE] border-2">
            <span className="px-4">De beste op een rij</span>
          </div>
          <div className="sm:border-0 rounded-md h-14 hover:bg-[#377FB1] sm:rounded-none border-black flex justify-center items-center bg-[#4BA7CE] border-2">
            <span className="px-4">Gerelateerde koopgidsen</span>
          </div>
        </div>
      </div>
      {/* <img
        src="/images/product-group/product-group-hero-bottom.svg"
        alt=""
        width={5600}
      /> */}
    </div>
  );
};

export default ProductGroupHero;
