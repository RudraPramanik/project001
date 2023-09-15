import { GetArticlesQuery } from "@adapters";
import { MyImage, MyLink } from "@design-system";
import { dateFormat, getStrapiImage } from "@utils";
import { usePageContent } from "@utils/contexts/page-content.context";
import React from "react";

export interface SmallArticlesProps {
  posts: GetArticlesQuery["articles"]["data"];
}
const SmallArticles: React.FC<SmallArticlesProps> = ({ posts }) => {
  return (
    <div className="grid items-center grid-cols-1 gap-5 px-4 sm:grid-cols-2 md:grid-cols-4 lg:px-0">
      {posts.map((post) => (
        <SmallArticleCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default SmallArticles;

export interface SmallArticleCardProps {
  post: GetArticlesQuery["articles"]["data"][0];
}
const SmallArticleCard: React.FC<SmallArticleCardProps> = ({ post }) => {
  const { settings } = usePageContent();
  return (
    <MyLink href={`/${post.attributes.slug}`}>
      <a className="flex text-purple bg-water-100 hover:bg-water-50 transition-colors border-[1px] rounded-md border-[#3EB6FD30] hover:border-water-300 p-4  w-full justify-between h-full">
        <div className="flex flex-col items-center justify-between w-full space-y-3">
          <div className="flex flex-col items-center justify-center space-y-2">
            <MyLink
              href={`/blog${
                settings.setting.data.attributes.global_links.find(
                  (link) => link.original_name.toLowerCase() == "auteur",
                ).slug
              }${post.attributes.author.data.attributes.slug}`}
            >
              <a>
                <MyImage
                  className="rounded-full"
                  alt={post.attributes.author.data.attributes.name}
                  src={getStrapiImage(
                    post.attributes.author.data.attributes.picture.data
                      .attributes.url,
                  )}
                  height={30}
                  width={30}
                />
              </a>
            </MyLink>
            <div className="text-purple text-[.9rem] text-center ">
              <MyLink
                href={`/blog${
                  settings.setting.data.attributes.global_links.find(
                    (link) => link.original_name.toLowerCase() == "auteur",
                  ).slug
                }${post.attributes.author.data.attributes.slug}`}
              >
                <a>
                  <p className="hover:text-gray-800">
                    {post.attributes.author.data.attributes.name}
                  </p>
                </a>
              </MyLink>

              <p>{dateFormat(post.attributes.publishedAt)}</p>
            </div>
          </div>
          <MyLink href={`/${post.attributes.slug}`}>
            <a className="font-bold text-center text-purple hover:text-gray-800">
              {post.attributes.title}
            </a>
          </MyLink>
          <MyLink
            href={`/blog${
              settings.setting.data.attributes.global_links.find(
                (link) => link.original_name.toLowerCase() == "category",
              ).slug
            }${post.attributes.category.data.attributes.slug}`}
          >
            <a className="z-10 px-3 py-1 text-xs text-white bg-blue-400 hover:bg-blue-700">
              {post.attributes.category.data.attributes.name}
            </a>
          </MyLink>
        </div>
      </a>
    </MyLink>
  );
};
