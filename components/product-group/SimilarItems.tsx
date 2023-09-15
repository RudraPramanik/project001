import { GetProductGroupPageQuery } from "@adapters";
import { ProductResults } from "@adapters/api";
import ProductGroupSlider from "@components/shared/ProductGroupSlider";
import { Button, MyImage } from "@design-system";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { usePageContent } from "@utils/contexts/page-content.context";
import React from "react";

export interface SimilarItemsProps {
  productGroup: ProductResults;
}
const SimilarItems: React.FC<SimilarItemsProps> = ({ productGroup }) => {
  const { content } = usePageContent();
  const productGroupPageContent = content as GetProductGroupPageQuery;
  return (
    <div className=" bg-[#F5FCFF] text-[#1B1B1F]">
      <div className=" max-w-5xl mx-auto px-4 sm:px-0 ">
        <h2 className="text-center py-10 font-extrabold text-3xl ">
          {
            productGroupPageContent.productGroupPage.data.attributes
              .similar_items_section_title
          }
        </h2>
        <div className="grid sm:grid-cols-5 grid-cols-1 gap-x-8 gap-y-20 ">
          {productGroup.products.map((product, i) => {
            const lowestPriceUrl = product.offers.reduce(function (prev, curr) {
              return prev.price < curr.price ? prev : curr;
            }).url;
            return (
              <React.Fragment key={i}>
                <div className=" sm:col-span-3 space-y-10 ">
                  <div>
                    <ProductGroupSlider product={product} />
                  </div>
                  <div className=" space-y-6">
                    <span className=" font-black text-xl ">
                      {
                        productGroupPageContent.productGroupPage.data.attributes
                          .item_description
                      }
                    </span>
                    <p className="leading-7 font-light">
                      {product.description}
                    </p>
                  </div>
                </div>
                <div className=" sm:col-span-2 space-y-10 ">
                  <h3 className="font-extrabold text-lg sm:text-2xl">
                    {product.product_name} #{i + 1}
                  </h3>
                  <Button
                    tag="a"
                    href={lowestPriceUrl}
                    layout="secondary"
                    target="_blank"
                    rel="nofollow noreferrer"
                    className="text-xs space-x-2 !px-20 !py-3 "
                  >
                    <span>
                      {
                        productGroupPageContent.productGroupPage.data.attributes
                          .item_offers_button_text
                      }{" "}
                    </span>
                    <ArrowNarrowRightIcon className="w-5" />
                  </Button>
                  <div>
                    <h4 className="text-md font-bold">
                      {" "}
                      {
                        productGroupPageContent.productGroupPage.data.attributes
                          .item_stores_section_title
                      }{" "}
                    </h4>
                    <div className="grid grid-cols-2">
                      {product?.offers?.map((item) => {
                        const service = services.find(
                          (ser) => ser.name === item.store,
                        );
                        if (!service) return null;
                        return (
                          <div
                            className=" border-l-[2px] border-t-[2px]  sm:border-b-[4px] sm:border-r-[4px] border-b-[4px] border-r-[4px] border-black rounded-2xl col-span-1 py-2 px-3 bg-white"
                            key={item.url}
                          >
                            <div className="flex flex-col space-y-2">
                              <MyImage
                                src={service.src}
                                alt={service.name}
                                width={100}
                                height={50}
                                objectFit="contain"
                              />
                              <p className="text-xs leading-5 hidden sm:block ">
                                {item.store_tagline}
                              </p>
                              <Button
                                tag="a"
                                href={lowestPriceUrl}
                                layout="primary"
                                size="small"
                                target="_blank"
                                rel="nofollow noreferrer"
                                className="text-center !text-xs "
                              >
                                <span>Go to lowest price</span>
                              </Button>
                            </div>
                            <p className="text-sm sm:hidden block ">
                              {item.store_tagline}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SimilarItems;

export const services = [
  { name: "Amazon.nl", src: "/images/services/amazon.jpg" },
  { name: "Bol.com", src: "/images/services/bol.jpg" },
  { name: "Coolblue.nl", src: "/images/services/coolblue.jpg" },
  { name: "Markt", src: "/images/services/markt.jpg" },
];
