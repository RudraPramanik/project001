import { GetProductGroupPageQuery } from "@adapters";
import { ProductResults } from "@adapters/api";
import { MyList } from "@components/shared";
import { Button, MyImage } from "@design-system";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { usePageContent } from "@utils/contexts/page-content.context";
import React from "react";
import GradientCircularProgress from "./GradientCircularProgress";

export interface ProductListingProps {
  productGroup: ProductResults;
}
const ProductListing: React.FC<ProductListingProps> = ({ productGroup }) => {
  const { content } = usePageContent();
  const productGroupPageContent = content as GetProductGroupPageQuery;

  return (
    <div>
      <img
        src="/images/product-group/product-group-hero-bottom.svg"
        alt=""
        width={5600}
        className="sm:block hidden"
      />
      <img
        src="/images/product-group/product-grp-hero-mob-bot.svg"
        alt=""
        width={700}
        className="block sm:hidden"
      />
      <div className="bg-[#F5FCFF] sm:-mt-96 text-[#1B1B1F]">
        <div className=" max-w-5xl mx-auto items-center sm:-mt-[600px] -mt-[500px]  ">
          <div className="grid sm:grid-cols-3 grid-cols-1 sm:p-0 p-10 sm:gap-x-4 gap-y-10 relative z-30">
            {productGroup.products.slice(0, 6).map((product, i) => {
              const lowestPriceUrl = product.offers.reduce(function (
                prev,
                curr,
              ) {
                return prev.price < curr.price ? prev : curr;
              }).url;
              return (
                <React.Fragment key={i}>
                  <div className=" -z-50 border-4 shadow-shadow  border-black rounded-3xl flex flex-col sm:items-center justify-center divide-y-2 divide-[#F5FCFF]  overflow-hidden bg-white sm:list-item">
                    <div className="text-center pb-4 w-full">
                      <div className="text-xs bg-[#F5FCFF] w-full flex justify-between p-4 items-center">
                        <GradientCircularProgress
                          startColor="#1579D7"
                          middleColor="#0E91E3"
                          endColor="#00C8FF"
                          size={40}
                          progress={product.score * 10}
                        >
                          <span className="text-center items-center text-xs">
                            {product.score}
                          </span>
                        </GradientCircularProgress>

                        <span className="text-sm">
                          Best {productGroup.product_group_name}
                        </span>
                      </div>
                      <div className="sm:px-0 px-2 ">
                        <div className="flex flex-col space-y-2  px-2 pt-2">
                          <h3 className="text-sm font-extrabold">
                            {product.product_name}
                          </h3>
                          <span className="text-xs pb-4">
                            {" "}
                            {
                              productGroupPageContent.productGroupPage.data
                                .attributes
                                .product_listing_section_company_title
                            }{" "}
                            Brand
                          </span>
                          <MyImage
                            src={product.main_image_url}
                            alt={product.product_name}
                            width={125}
                            height={125}
                            objectFit="contain"
                          />

                          {/* <div className="absolute -z-10 top-[6px] right-0 left-[5px] bottom-0 bg-black w-[50%] flex justify-center h-full rounded-2xl" /> */}
                          <Button
                            tag="a"
                            href={lowestPriceUrl}
                            target="_blank"
                            rel="nofollow noreferrer"
                            iconRight={ShoppingBagIcon}
                            className="text-xs shadow-shadow !px-1 !py-3 hover:!bg-[#EF1E7C] "
                          >
                            {
                              productGroupPageContent.productGroupPage.data
                                .attributes
                                .product_listing_section_offers_button_text
                            }
                          </Button>

                          {/* <Button
                            tag="a"
                            href={lowestPriceUrl}
                            target="_blank"
                            rel="nofollow noreferrer"
                            iconRight={ShoppingBagIcon}
                            className="text-xs !px-1 !py-3 hover:!bg-[#EF1E7C] "
                          >
                            {
                              productGroupPageContent.productGroupPage.data
                                .attributes
                                .product_listing_section_offers_button_text
                            }
                          </Button> */}

                          <span className="text-sm text-[#0F83A2] hover:underline sm:-mt-2 ">
                            Verkrijgbaar bij (16)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="py-4 sm:px-1">
                      <div className="flex flex-col space-y-2">
                        <ul className="flex flex-col space-y-4 px-1">
                          <div className="space-y-3 flex flex-col">
                            <span className="font-bold text-sm">Positive</span>
                            {Array.from({ length: 3 }).map((_pro, i) => (
                              <MyList type="plus" key={i} className="text-sm">
                                Dummy text of the printing.
                              </MyList>
                            ))}
                          </div>
                          <div className="space-y-3 flex flex-col">
                            <span className="font-bold text-sm">Negative</span>
                            {Array.from({ length: 3 }).map((_con, i) => (
                              <MyList type="minus" key={i} className="text-sm">
                                Dummy text of the printing.
                              </MyList>
                            ))}
                          </div>
                        </ul>
                      </div>
                      {(product.cons.length > 0 || product.pros.length > 0) && (
                        <div className="flex flex-col space-y-2">
                          <ul className="flex flex-col space-y-4 px-1">
                            {product.pros.length > 0 &&
                              product.pros.map((pro, i) => (
                                <MyList type="plus" key={i}>
                                  {pro}
                                </MyList>
                              ))}
                            {product.cons.length > 0 &&
                              product.cons.map((con, i) => (
                                <MyList type="minus" key={i}>
                                  {con}
                                </MyList>
                              ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>{" "}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
