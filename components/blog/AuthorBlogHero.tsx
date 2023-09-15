// import { GetBlogPageQuery } from "@adapters/generated/graphql";
import { GetArticlesQuery, GetBlogPageQuery } from "@adapters";
import { MyLink } from "@design-system";
import React from "react";

export interface AuthorBlogHeroProps {
  blogPage: GetBlogPageQuery;
  author: GetArticlesQuery["articles"]["data"][0]["attributes"]["author"];
}
const AuthorBlogHero: React.FC<AuthorBlogHeroProps> = ({
  blogPage,
  author,
}) => {
  return (
    <div className=" mt-2 sm:-mt-16 relative ">
      <div className="absolute top-0 sm:block hidden  ">
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
      <div className=" bg-[#5AC7E5] pt-36 text-center space-y-10 text-white -mt-5 ">
        <div className="max-w-2xl mx-auto relative">
          <div className="max-w-2xl mx-auto">
            <div className="hidden sm:block space-x-2 z-10 relative">
              {[
                { link: "/", name: "Home" },
                {
                  link: `/author/${author.data.attributes.slug}`,
                  name: author.data.attributes.name,
                },
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
          </div>
          <div className=" relative max-w-[400px] mx-auto ">
            <div className="absolute z-[1] top-[6px] right-0 left-[5px] bottom-0 bg-black w-full h-full rounded-2xl" />

            {/* <div className="absolute -z-10 top-[6px] right-0 left-[50px] bottom-0 bg-black w-[200px] sm:w-[400px] h-[110%] rounded-2xl" /> */}
            <div className="">
              <div className="flex w-full z-[2] relative flex-col sm:text-center rounded-2xl font-extrabold items-center border-2 border-black bg-white">
                <div className="p-1 w-full">
                  <div className="block border-2 border-black rounded-xl">
                    <img
                      src={author.data.attributes.picture.data.attributes.url}
                      alt={author.data.attributes.name}
                      className="rounded-xl object-contain bg-white w-full h-[200px]"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xl text-black  text-center capitalize">
                      {author.data.attributes.name}
                    </p>
                    <p className="text-black font-light">Author</p>
                  </div>
                </div>
              </div>
              {/* <div className="my-2 z-10 flex flex-col justify-center sm:text-center rounded-2xl font-extrabold items-center border-2 border-black bg-[#E3EEFF] mx-auto w-[200px] sm:w-[400px] top-20  left-[20%]">
                <div className="p-1 w-full">
                  <div className="block border-2 border-black rounded-xl">
                    <img
                      src={author.data.attributes.picture.data.attributes.url}
                      alt={author.data.attributes.name}
                      className="rounded-xl object-contain bg-white w-full h-[200px]"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xl text-black  text-center capitalize">
                      {author.data.attributes.name}
                    </p>
                    <p className="text-black font-light">Author</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className=" relative top-0 right-0 sm:block hidden -z-20 -mt-8 ">
        <img src="/svgs/sky-blue-hero.svg" alt="top-left-ills" width={5800} />
      </div>
      <div className=" relative top-0 right-0 block sm:hidden -z-50 -mt-8 ">
        <img src="/svgs/hero-mb2.svg" alt="top-left-ills" width={639} />
      </div>
    </div>
  );
};

export default AuthorBlogHero;
