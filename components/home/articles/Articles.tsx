import { GetArticlesQuery, GetHomePageQuery } from "@adapters";
import { ArticlesCard } from "@components";
import { Button, MyImage, MyLink } from "@design-system";
import { usePageContent } from "@utils/contexts/page-content.context";
import React from "react";

export interface ArticlesProps {
  articles: GetArticlesQuery;
}
const Articles: React.FC<ArticlesProps> = ({ articles }) => {
  const { content } = usePageContent();
  const homePageContent = content as GetHomePageQuery;

  return (
    <div className=" max-w-4xl mx-auto flex flex-col items-center text-[#1B1B1F] mt-8">
      <h2 className="font-black text-4xl sm:text-5xl mo:text-center">
        {homePageContent.homePage.data.attributes.blog_section_title}
      </h2>
      <p className="text-sm font-light mt-3 mo:text-center">
        {homePageContent.homePage.data.attributes.blog_section_description}
      </p>
      <div className="mt-12">
        <div className="flex space-x-3 items-center mo:ml-3">
          <img
            src="/svgs/start-icon.svg"
            className="h-8 sm:h-12"
            alt="star icon"
          />
          <h3 className="font-black text-2xl sm:text-4xl">
            {" "}
            {
              homePageContent.homePage.data.attributes
                .blog_section_popular_posts
            }{" "}
          </h3>
        </div>
        {/* <div className="sm:flex space-x-3 py-6  hidden">
          {articles.articles.data.map((article) => (
            <div
              key={article.id}
              className="flex flex-row items-center rounded-xl border-black p-3 border-l-[3px] border-t-[3px] border-b-[6px] border-r-[6px]"
            >
              <img
                src={article.attributes.image.data.attributes.url}
                alt=""
                className="rounded-lg"
              />
              <h4 className="pl-2 font-extrabold text-sm ">
                {article.attributes.title}
              </h4>
            </div>
          ))}
        </div> */}
        <div className="hidden grid-cols-3 gap-4 sm:grid mt-2">
          {articles.articles.data.slice(0, 3).map((article) => (
            <MyLink href={article.attributes.slug} key={article.id}>
              <a className="relative">
                <div className="absolute z-[1] top-[6px] right-0 left-[5px] bottom-0 bg-black w-full h-full rounded-xl" />
                <div className="border-2 border-black rounded-xl relative z-[2] bg-white h-full">
                  <div className="flex px-4 py-4 space-x-3 h-full">
                    <MyImage
                      src={article.attributes.image.data.attributes.url}
                      alt="top-left-ills"
                      width={75}
                      height={75}
                    />

                    <p className="">{article.attributes.title}</p>
                  </div>
                </div>
              </a>
            </MyLink>
          ))}
        </div>
      </div>
      <div className="h-[1px] bg-black my-10 w-full" />
      <div className="">
        <div className="flex space-x-3 items-center mo:ml-3">
          <img src="/svgs/plus.svg" className="h-8 sm:h-12" alt="plus icon" />
          <h3 className="font-black text-2xl sm:text-4xl">
            {" "}
            {
              homePageContent.homePage.data.attributes.blog_section_new_posts
            }{" "}
          </h3>
        </div>
        <div className="space-y-8 flex flex-col mt-8 mx-4 sm:mx-0">
          {articles.articles.data.map((article) => (
            <ArticlesCard
              key={article.id}
              author={article.attributes.author}
              src={article.attributes.image.data.attributes.url}
              title={article.attributes.title}
              desc={article.attributes.description}
              path={`/${article.attributes.slug}/`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button tag="a" href="/blog/" size="large" className="!px-24 !py-3">
            {homePageContent.homePage.data.attributes.blog_section_button_text}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Articles;
