import { GetArticlesQuery } from "@adapters";
import { MyLink } from "@design-system";
import { dateFormat } from "@utils";
import React from "react";

export interface BlogPostHeroProps {
  post: GetArticlesQuery["articles"]["data"][0];
}
const BlogPostHero: React.FC<BlogPostHeroProps> = ({ post }) => {
  return (
    <>
      <div className="-mt-96 4xl:-mt-[800px] bg-[#F9DDE6] z-10 relative">
        <div className="">
          <div className="-mt-96 4xl:-mt-[800px] bg-[#F9DDE6]  ">
            <div className="pt-96 sm:flex flex-col sm:items-start justify-center max-w-6xl mx-auto space-y-8 4xl:pt-[800px] relative ">
              <div className="flex flex-col space-y-3 sm:py-12">
                <h1 className="text-5xl font-black text-white py-10 mt-16 sm:mt-0 shadow-word ">
                  {" "}
                  {post.attributes.title}
                </h1>
                <div className="space-x-3 sm:flex hidden">
                  <img
                    alt={post.attributes.author.data.attributes.name}
                    src={
                      post.attributes.author.data.attributes.picture.data
                        .attributes.url
                    }
                    className="border-2 border-white rounded-full w-[63px] h-[63px]"
                  />
                  <div className="flex flex-col space-y justify-center">
                    <MyLink
                      href={`/auteur/${post.attributes.author.data.attributes.slug}`}
                    >
                      <a className="capitalize font-semibold">
                        {post.attributes.author.data.attributes.name}
                      </a>
                    </MyLink>
                    <p className="text-sm">
                      Gepubliceerd op: {dateFormat(post.attributes.publishedAt)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:block hidden z-40 relative">
        <img
          src="/images/ills/cookie-policy/hero-bot-ills.svg"
          alt=""
          width={5000}
        />
      </div>
      <div className="block sm:hidden">
        <img
          src="/images/ills/about/about_us_hero_mobile_ills.svg"
          alt=""
          width={5000}
        />
      </div>
    </>
  );
};

export default BlogPostHero;
