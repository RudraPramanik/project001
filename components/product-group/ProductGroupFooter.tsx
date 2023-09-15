import { GetProductGroupPageQuery } from "@adapters";
import { RelatedProductGroupsResults } from "@adapters/api";
import { MyLink } from "@design-system";
import { usePageContent } from "@utils/contexts/page-content.context";
import React from "react";

export interface ProductGroupFooterProps {
  relatedPrdGroups: RelatedProductGroupsResults;
}
const ProductGroupFooter: React.FC<ProductGroupFooterProps> = ({
  relatedPrdGroups,
}) => {
  const { content } = usePageContent();
  const productGroupPageContent = content as GetProductGroupPageQuery;

  return (
    <div className="">
      <img
        src="/images/product-group/product-group-footer-ills.svg"
        alt=""
        width={5600}
        className="hidden sm:block"
      />
      <img
        src="/images/product-group/prod-grp-footer-mob-ills.svg"
        alt=""
        width={700}
        className="sm:hidden block"
      />
      <div className=" bg-[#AD94FF] -mt-10 sm:-mt-0 pb-80 -mb-80 ">
        <div className=" max-w-4xl mx-auto text-white  text-center px-4 sm:px-0 ">
          <div className=" max-w-2xl mx-auto space-y-6 ">
            <h2 className=" font-bold max-w-xl mx-auto">
              {
                productGroupPageContent.productGroupPage.data.attributes
                  .product_group_footer_title
              }
            </h2>
            <p className="font-light leading-7">
              {
                productGroupPageContent.productGroupPage.data.attributes
                  .product_group_footer_description
              }
            </p>
          </div>
          <div className="pt-10">
            <h3 className="font-black">
              {" "}
              {
                productGroupPageContent.productGroupPage.data.attributes
                  .related_buying_guides_title
              }{" "}
            </h3>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 space-x-0 sm:space-x-8 px-4 sm:px-0 w-full justify-center">
              {relatedPrdGroups.less_relevant_product_groups?.slice(0, 7)
                .length > 0 && (
                <div className="sm:overflow-hidden sm:w-1/3 w-full">
                  <div className="space-y-4 sm:space-y-0 w-full">
                    {relatedPrdGroups.less_relevant_product_groups
                      ?.slice(0, 7)
                      ?.map((item, i) => (
                        <div className="group" key={i}>
                          <MyLink href={item.slug}>
                            <a className="text-white py-3 sm:rounded-none h-12 flex   rounded-xl ">
                              <h3
                                key={item.slug}
                                className=" flex items-center text-sm capitalize hover:text-gray-200 transition-all"
                              >
                                {item.name}
                              </h3>
                            </a>
                          </MyLink>
                          <div className="h-[1px] w-full bg-white" />
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {relatedPrdGroups.less_relevant_product_groups?.slice(7, 15)
                .length > 0 && (
                <div className=" sm:border-[1px] sm:border-[#A5D1FE]  sm:bg-[#FBFCFE]   sm:rounded-xl sm:overflow-hidden sm:w-1/3 w-full">
                  <div className="space-y-4 sm:space-y-0 w-full">
                    {relatedPrdGroups.less_relevant_product_groups
                      ?.slice(7, 15)
                      ?.map((item, i) => (
                        <div className="group" key={i}>
                          <MyLink href={item.slug}>
                            <a className="group-hover:bg-[#A5D1FE] bg-[#A5D1FE]  sm:bg-[#FBFCFE] group-hover:text-white text-white sm:text-xbeste-text-default px-4 py-3 sm:rounded-none h-12 flex   rounded-xl ">
                              <h3
                                key={item.slug}
                                className=" flex items-center px-5 sm:px-1 text-sm capitalize "
                              >
                                {item.name}
                              </h3>
                            </a>
                          </MyLink>
                          {i ===
                          relatedPrdGroups.less_relevant_product_groups?.slice(
                            0,
                            7,
                          ).length -
                            1 ? null : (
                            <div className="h-[1px] w-full bg-[#A5D1FE] group-hover:max-w-none max-w-xs mx-auto" />
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              )}
              {relatedPrdGroups.less_relevant_product_groups?.slice(15, 23)
                .length > 0 && (
                <div className=" sm:border-[1px] sm:border-[#A5D1FE]  sm:bg-[#FBFCFE]   sm:rounded-xl sm:overflow-hidden sm:w-1/3 w-full">
                  <div className="space-y-4 sm:space-y-0 w-full">
                    {relatedPrdGroups.less_relevant_product_groups
                      ?.slice(15, 23)
                      ?.map((item, i) => (
                        <div className="group" key={i}>
                          <MyLink href={item.slug}>
                            <a className="group-hover:bg-[#A5D1FE] bg-[#A5D1FE]  sm:bg-[#FBFCFE] group-hover:text-white text-white sm:text-xbeste-text-default px-4 py-3 sm:rounded-none h-12 flex   rounded-xl ">
                              <h3
                                key={item.slug}
                                className=" flex items-center px-5 sm:px-1 text-sm capitalize "
                              >
                                {item.name}
                              </h3>
                            </a>
                          </MyLink>
                          {i ===
                          relatedPrdGroups.less_relevant_product_groups?.slice(
                            0,
                            7,
                          ).length -
                            1 ? null : (
                            <div className="h-[1px] w-full bg-[#A5D1FE] group-hover:max-w-none max-w-xs mx-auto" />
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGroupFooter;
