import { GetArticlesQuery } from "@adapters";
import { MyImage, MyLink } from "@design-system";
import { dateFormat, getStrapiImage } from "@utils";
import { usePageContent } from "@utils/contexts/page-content.context";
import React from "react";

export interface ArticleCardProps {
  post: GetArticlesQuery["articles"]["data"][0];
}
const ArticleCard: React.FC<ArticleCardProps> = ({ post }) => {
  const { settings } = usePageContent();

  return (
    <div className="flex justify-center w-full text-purple">
      <div className="flex flex-col w-full space-y-3 ">
        <MyLink href={`/${post.attributes.slug}`}>
          <a>
            <MyImage
              src={getStrapiImage(post.attributes.image.data.attributes.url)}
              alt={post.attributes.image.data.attributes.name}
              height={260}
              className="object-cover w-full rounded-md"
              width={430}
            />
          </a>
        </MyLink>
        <div>
          <MyLink
            href={`/blog/category/${post.attributes.category.data.attributes.slug}/`}
          >
            <a className="px-3 py-1 text-xs text-white bg-blue-400 rounded-sm ">
              {post.attributes.category.data.attributes.name}
            </a>
          </MyLink>
        </div>
        <div className="flex space-x-3 ">
          <MyLink
            href={`/auteur/${post.attributes.author.data.attributes.slug}`}
          >
            <a>
              <MyImage
                className="rounded-full"
                src={getStrapiImage(
                  post.attributes.author.data.attributes.picture.data.attributes
                    .url,
                )}
                alt={post.attributes.author.data.attributes.name}
                height={30}
                width={30}
              />
            </a>
          </MyLink>
          <div className="text-xs text-gray-800">
            <MyLink
              href={`/auteur/${post.attributes.author.data.attributes.slug}`}
            >
              <a>
                <p className="hover:text-gray-600">
                  {post.attributes.author.data.attributes.name}
                </p>
              </a>
            </MyLink>
            <p>
              {settings.setting.data.attributes.published_date_text}
              {dateFormat(post.attributes.publishedAt)}
            </p>
          </div>
        </div>
        <MyLink href={`/${post.attributes.slug}`}>
          <a className="text-sm font-bold text-purple ">
            {post.attributes.title}
          </a>
        </MyLink>
      </div>
    </div>
  );
};

export default ArticleCard;
