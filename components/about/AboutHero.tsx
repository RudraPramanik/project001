import { GetOverOnsPageQuery } from "@adapters/generated/graphql";
import { MyLink } from "@design-system";
import { usePageContent } from "@utils/contexts/page-content.context";
import React from "react";

export interface AboutHeroProps {}
const AboutHero: React.FC<AboutHeroProps> = () => {
  const { content } = usePageContent();
  const overOnsPageContent = content as GetOverOnsPageQuery;
  return (
    <div className=" relative mt-2 sm:-mt-16 4xl:-mt-36 3xl:-mt-20">
      <div className="absolute top-0 sm:block hidden ">
        <img
          src="/images/about/header-top.svg"
          alt="top-left-ills"
          width={5800}
        />
      </div>
      <div className="absolute top-0 block sm:hidden -mt-10 ">
        <img
          src="/images/about/about-top-mb.svg"
          alt="top-left-ills"
          width={639}
        />
      </div>
      {/* <div className=" bg-[#AD94FF] pt-36 text-center space-y-10 text-white -mt-5 "> */}
      <div className=" bg-[#AD94FF] pt-36 text-center space-y-10 text-white -mt-5 ">
        <div className="max-w-2xl mx-auto 3xl:pt-36 4xl:pt-72">
          <div className="hidden sm:block space-x-2 z-10 relative">
            {[
              { link: "/", name: "Home" },
              { link: "/over-ons", name: "About Us" },
            ].map((acc, i) => (
              <React.Fragment key={acc.link}>
                <MyLink href={acc.link}>
                  <a className="hover:underline capitalize text-lg sm:text-md">
                    {acc.name}
                  </a>
                </MyLink>
                {1 !== i && <span>•</span>}
              </React.Fragment>
            ))}
          </div>
          <h1 className=" text-5xl font-black text-white py-10 shadow-word ">
            {overOnsPageContent.overOnsPage.data.attributes.Hero_title}
          </h1>
          <p>
            {overOnsPageContent.overOnsPage.data.attributes.hero_description}
          </p>
        </div>
      </div>
      <div className=" relative top-0 right-0 sm:block hidden -z-50 -mt-8 ">
        <img
          src="/images/about/about-hero.svg"
          alt="top-left-ills"
          width={5800}
        />
      </div>
      <div className=" relative top-0 right-0 block sm:hidden -z-50 -mt-8 ">
        <img
          src="/images/about/about-hero-mb.svg"
          alt="top-left-ills"
          width={639}
        />
      </div>
    </div>
  );
};

export default AboutHero;
