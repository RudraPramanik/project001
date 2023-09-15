import { GetHomePageQuery } from "@adapters";
import { Button } from "@design-system";
import { usePageContent } from "@utils/contexts/page-content.context";
import React from "react";
export interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = () => {
  const { content } = usePageContent();
  const homePageContent = content as GetHomePageQuery;

  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center text-[#1B1B1F] relative mo:space-y-12">
      <div className="sm:block hidden">
        <img
          src="/svgs/home-over-flower-1.svg"
          alt="home-over-flower-1"
          className="absolute right-[50px] z-[-10] -top-[-50px] w-[340px] rotate-[10deg]"
        />
        <img
          src="/svgs/home-over-flower-1.svg"
          alt="home-over-flower-2"
          className="absolute left-12 z-[-10] bottom-[90px] rotate-[-70deg] w-[340px]"
        />
      </div>

      <div className="relative w-full">
        <div className="bg-[#FEFFE5] border-black rounded-[2rem] py-10 sm:py-4 px-8 max-w-xl space-y-4 border-l-[3px] border-t-[3px] sm:border-b-[6px] sm:border-r-[6px] border-b-[10px] border-r-[10px] mt-12 sm:mt-0 mx-2 sm:mx-0 sm:z-[3] relative">
          <img
            src="/svgs/home-over-flower-1.svg"
            alt="home-over-flower-1"
            className="absolute block sm:hidden right-10 z-[-10] w-[280px] -top-28 rotate-[334deg]"
          />
          <div className="absolute top-0 right-4 w-8">
            <img src="/images/home/xIcon.svg" alt="x" />
          </div>
          <h2 className="font-black text-5xl">
            {homePageContent.homePage.data.attributes.about_tbeste_title}{" "}
          </h2>
          <p className="text-[17px] leading-7">
            {
              homePageContent.homePage.data.attributes
                .about_tbeste_description_one
            }
          </p>
        </div>
        <div className="sm:absolute bottom-[-24px] rounded-[2rem] left-[14px] top-[-12px] bg-black w-[65%] h-[107%] z-[-1] skew-x-[6deg] sm:!mt-[14px]" />
      </div>
      <div className="relative w-full">
        <div className="bg-[#E3EEFF] border-black rounded-[2rem] py-10 px-8 max-w-xl space-y-4 border-l-[3px] border-t-[3px]  sm:border-b-[6px] sm:border-r-[6px] border-b-[10px] border-r-[10px]   sm:-mt-8 sm:ml-56 mx-2 sm:mx-0 sm:z-[2] relative">
          <img
            src="/svgs/home-over-flower-1.svg"
            alt="home-over-flower-1"
            className="absolute block sm:hidden right-10 z-[-10] w-[280px] -top-28 rotate-[334deg]"
          />
          <p className="text-[17px] leading-7">
            {
              homePageContent.homePage.data.attributes
                .about_tbeste_description_two
            }
          </p>
        </div>
        <div className="sm:absolute bottom-[-24px]   rounded-[2rem] sm:ml-36 right-[72px] top-[-12px] bg-black w-[64%] h-[124%] z-[1] skew-x-[8deg] sm:!mt-[-20px]" />
      </div>

      <div className="relative w-full">
        <div className="bg-[#D9FFED] border-black rounded-[2rem] py-5 px-8 max-w-xl space-y-4 border-l-[3px] border-t-[3px]  sm:border-b-[6px] sm:border-r-[6px] border-b-[10px] border-r-[10px] mx-2 sm:mx-0">
          <img
            src="/svgs/home-over-flower-1.svg"
            alt="home-over-flower-1"
            className="absolute block sm:hidden right-10 z-[-10] w-[280px] -top-28 rotate-[334deg]"
          />
          <p className="text-[17px] leading-7">
            {
              homePageContent.homePage.data.attributes
                .about_tbeste_description_three
            }
          </p>
        </div>
        <div className="sm:absolute bottom-[-24px] rounded-[2rem] left-[13px]  top-[-12px] bg-black w-[65%] h-[114%] z-[-1] skew-x-12 sm:!mt-[14px]" />
      </div>
      <div className="mt-12">
        <Button tag="a" href="/over-ons/">
          {homePageContent.homePage.data.attributes.about_tbeste_button_text}
        </Button>
      </div>
    </div>
  );
};

export default AboutUs;
