import { GetOverOnsPageQuery } from "@adapters/generated/graphql";
import { usePageContent } from "@utils/contexts/page-content.context";
import { MyImage } from "@design-system";
import React from "react";

export interface AboutDescriptionProps {}
const AboutDescription: React.FC<AboutDescriptionProps> = () => {
  const { content } = usePageContent();
  const overOnsPageContent = content as GetOverOnsPageQuery;
  return (
    <div>
      <div className=" relative max-w-5xl  mx-auto sm:px-0 px-5 ">
        <div>
          {/* heading for mobile */}
          <div className="text-center items-center">
            <h2 className=" sm:hidden block font-black sm:text-center text-xl py-5 ">
              {
                overOnsPageContent.overOnsPage.data.attributes
                  .first_section_title
              }
            </h2>
          </div>
          <div className="flex flex-col-reverse sm:flex-row space-x-0 sm:space-x-5 justify-between items-center ">
            <div className="sm:w-1/2 content-center mt-0 sm:-mt-16 3xl:-mt-16 ">
              <h2 className=" hidden sm:block text-base font-extrabold sm:text-left sm:text-xl ">
                {
                  overOnsPageContent.overOnsPage.data.attributes
                    .first_section_title
                }
              </h2>

              <div
                className="sm:text-base text-sm mt-2 leading-[32.4px] font-normal"
                dangerouslySetInnerHTML={{
                  __html:
                    overOnsPageContent.overOnsPage.data.attributes
                      .first_section_description,
                }}
              ></div>
            </div>

            <div className=" sm:w-5/12 ">
              <MyImage
                src="/images/about/description1.svg"
                alt="about"
                width={611}
                height={576}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-5 justify-between ">
            <div className="sm:w-5/12 mt-2 ">
              <MyImage
                src="/images/about/description2.svg"
                alt="about"
                width={611}
                height={576}
              />
            </div>
            <div className="sm:w-1/2 mt-0 sm:mt-10    ">
              <h2 className=" font-black sm:font-extrabold text-center  sm:text-left text-xl">
                {
                  overOnsPageContent.overOnsPage.data.attributes
                    .second_section_title
                }
              </h2>
              <div
                className="sm:text-base text-sm mt-2 leading-[32.4px] font-normal"
                dangerouslySetInnerHTML={{
                  __html:
                    overOnsPageContent.overOnsPage.data.attributes
                      .second_section_description,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDescription;
