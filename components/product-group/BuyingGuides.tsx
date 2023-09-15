import { GetBuyingGuidesQuery, GetProductGroupPageQuery } from "@adapters";
import { overridesObjBuyingGuide } from "@components";
import { Button, MyImage } from "@design-system";
import { usePageContent } from "@utils/contexts/page-content.context";
import Markdown from "markdown-to-jsx";
import React from "react";

export interface BuyingGuidesProps {
  buyingGuides: GetBuyingGuidesQuery["buyingGuides"]["data"][number];
}
const BuyingGuides: React.FC<BuyingGuidesProps> = ({ buyingGuides }) => {
  const { content } = usePageContent();
  const productGroupPageContent = content as GetProductGroupPageQuery;
  return (
    <div className="bg-[#F5FCFF] flex flex-col text-[#1B1B1F]">
      {buyingGuides && (
        <>
          {buyingGuides.attributes.buying_guide_components.map((bg: any) => (
            <div
              key={bg.id}
              className=" max-w-4xl mx-auto sm:grid sm:grid-cols-5 flex flex-col-reverse px-4 sm:px-0   pt-16 "
            >
              <div className=" sm:col-span-3 space-y-5 ">
                <div className="">
                  <Markdown
                    options={{
                      overrides: overridesObjBuyingGuide,
                      createElement(type, props, children) {
                        return (
                          <>{React.createElement(type, props, children)}</>
                        );
                      },
                      forceBlock: true,
                    }}
                  >
                    {bg.content}
                  </Markdown>
                </div>
              </div>

              <div className="sm:col-span-2 sm:text-left text-center space-y-4 pl-6">
                <div>
                  <span className="text-sm italic">
                    Last update: 02.10.2022
                  </span>
                  <h2 className=" font-extrabold mt-2">{bg.title}</h2>
                </div>
                <div className="flex sm:flex-row flex-col items-center justify-center sm:justify-start">
                  <img
                    alt={buyingGuides.attributes.writer.data.attributes.name}
                    src={
                      buyingGuides.attributes.writer.data.attributes.picture
                        .data.attributes.url
                    }
                    className="rounded-full border border-black"
                    width={40}
                    height={40}
                  />
                  <span className="pl-2 text-sm italic">
                    {buyingGuides.attributes.writer.data.attributes.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </>
      )}

      <div className="relative">
        <div className="">
          <img
            src="/images/product-group/buying-guides-top-ills.svg"
            alt=""
            width={5600}
            className="sm:block hidden"
          />
          <img
            src="/images/product-group/buying-guides-mob-top.svg"
            alt=""
            width={700}
            className="block sm:hidden "
          />
          <div className="bg-[#5AC7E5] pb-44 sm:pb-0 ">
            {/*  */}

            {/*  */}
            <div className="sm:-mt-48 ">
              <div className="relative top-36 -left-28 hidden sm:block ">
                <MyImage
                  src="/images/product-group/buying-guides-left-ills.svg"
                  width={500}
                  height={357}
                />
              </div>

              <div className="max-w-4xl mx-auto justify-center items-center -mt-28 ">
                {/*  */}
                <h2 className=" font-extrabold text-white text-center mb-16 ">
                  {
                    productGroupPageContent.productGroupPage.data.attributes
                      .buying_guides_title
                  }
                </h2>
                {/* */}
                <div className="-mt-56 sm:-mt-0">
                  <div className="relative -left-20 top-56 sm:hidden block ">
                    <MyImage
                      src="/images/product-group/buying-guides-top-cloud.svg"
                      width={280}
                      height={288}
                    />
                  </div>
                  <div className="-mb-[460px] hidden sm:block">
                    <MyImage
                      src="/images/product-group/left-cloud.svg"
                      width={437}
                      height={449}
                    />
                  </div>

                  <div className=" flex items-center flex-col  px-4 sm:px-0  ">
                    {/*  */}

                    {/*  */}
                    <div className="relative w-full ml-16 ">
                      <div className="bg-[#FEFFE5] border-black rounded-[2rem] py-10 px-8 max-w-xl space-y-4 border-l-[3px] border-t-[3px]  sm:border-b-[6px] sm:border-r-[6px] border-b-[10px] border-r-[10px]   sm:-mt-8 sm:ml-56 mx-2 sm:mx-0 sm:z-50 relative">
                        <img
                          src="/images/product-group/buying-guides-bot-cloud.svg"
                          alt="home-over-flower-1"
                          className="absolute block sm:hidden right-10 z-[-10] w-[280px] -top-28 rotate-[334deg]"
                        />
                        <h3 className=" font-black text-2xl">
                          {" "}
                          {
                            productGroupPageContent.productGroupPage.data
                              .attributes.buying_guides_section_two_title
                          }{" "}
                        </h3>
                        <p className="text-sm leading-7">
                          {
                            productGroupPageContent.productGroupPage.data
                              .attributes.buying_guides_section_one_description
                          }
                        </p>
                      </div>
                      <div className="sm:absolute bottom-[-24px]  sm:-ml-14 rounded-[2rem] left-64 top-[-12px] bg-black w-[60%] h-[124%] z-[1] skew-x-[-6deg] sm:!mt-[-20px]" />
                    </div>
                    {/* last */}
                    <div className="relative w-full -ml-36 ">
                      <div className="bg-[#E3EEFF] border-black rounded-[2rem] py-10 px-8 max-w-xl space-y-4 border-l-[3px] border-t-[3px]  sm:border-b-[6px] sm:border-r-[6px] border-b-[10px] border-r-[10px]   sm:-mt-8 sm:ml-56 mx-2 sm:mx-0 sm:z-[2] relative">
                        <img
                          src="/images/product-group/buying-guides-bot-cloud.svg"
                          alt="home-over-flower-1"
                          className="absolute block sm:hidden right-10 z-[-10] w-[280px] -top-28 rotate-[334deg]"
                        />
                        <h3 className=" font-black text-2xl">
                          {" "}
                          {
                            productGroupPageContent.productGroupPage.data
                              .attributes.buying_guides_section_two_title
                          }{" "}
                        </h3>
                        <p className="text-sm leading-7">
                          {
                            productGroupPageContent.productGroupPage.data
                              .attributes.buying_guides_section_two_description
                          }
                        </p>
                      </div>
                      <div className="sm:absolute bottom-[-24px]  sm:-ml-36 rounded-[2rem] sm:ml-56 right-[72px] top-[-12px] bg-black w-[64%] h-[124%] z-[1] skew-x-[8deg] sm:!mt-[-20px]" />
                    </div>
                  </div>
                  <div className="-mt-96 pl-[500px] hidden sm:block">
                    <MyImage
                      src="/images/product-group/right-cloud.svg"
                      width={437}
                      height={449}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="/images/product-group/buying-guides-bottom-ills.svg"
            alt=""
            width={5600}
            className="sm:block hidden"
          />
          <img
            src="/images/product-group/buying-guides-mob-bot.svg"
            alt=""
            width={700}
            className="sm:hidden block -mt-36 "
          />
        </div>
        <div className="relative -top-96 -mt-56 flex z-40   sm:hidden ">
          <MyImage
            src="/images/product-group/buying-guides-right-ills.svg"
            width={673}
            height={918}
          />
        </div>
        <div className="absolute bottom-[-100px]  right-[0px] sm:flex justify-end  hidden ">
          <MyImage
            src="/images/product-group/buying-guides-right-ills.svg"
            width={573}
            height={618}
          />
        </div>
      </div>
    </div>
  );
};

export default BuyingGuides;
