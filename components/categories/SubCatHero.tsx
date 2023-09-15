import { MyLink } from "@design-system";
import React from "react";

export interface CategoriesHeroProps {
  title?: string;
  slug: string;
}
const CategoriesHero: React.FC<CategoriesHeroProps> = ({
  title = "Alle Categorien",
  slug,
}) => {
  return (
    <div className=" relative -mt-16 ">
      <div className="absolute top-0 sm:block hidden">
        <img
          src="/images/about/header-top.svg"
          className="hidden sm:block"
          alt="top-left-ills"
          width={5800}
        />
      </div>
      <div className="top-0 block sm:hidden -mt-10 ">
        <img
          src="/images/about/about-top-mb.svg"
          alt="top-left-ills"
          width={639}
        />
      </div>
      <div className=" bg-[#5AC7E5] pt-36 text-center space-y-10 text-white -mt-5 ">
        <div className="max-w-2xl mx-auto">
          <div className="hidden sm:block space-x-2 z-10 relative">
            {[
              { link: "/", name: "Home" },
              { link: `/${slug}`, name: title },
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
          <h1
            style={{ textShadow: "4px 3px 0px #000000;" }}
            className=" text-5xl font-black text-white py-10 "
          >
            {title}
          </h1>
        </div>
      </div>
      <div className=" relative top-0 right-0 sm:block hidden -z-50 -mt-8 ">
        <img src="/svgs/sky-blue-hero.svg" alt="top-left-ills" width={5800} />
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

export default CategoriesHero;
