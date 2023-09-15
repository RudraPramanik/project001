import { GetArticlesQuery } from "@adapters";
import { MyImage } from "@design-system";
import { dateFormat, getStrapiImage } from "@utils";
import { usePageContent } from "@utils/contexts/page-content.context";
import React from "react";

export interface ArticleSideCardProps {
  post: GetArticlesQuery["articles"]["data"][0];
}
const ArticleSideCard: React.FC<ArticleSideCardProps> = ({ post }) => {
  const { settings } = usePageContent();

  return (
    <div className="flex flex-col sm:flex-row sm:space-x-4 space-x-0  items-center w-full">
      <div>
        <div className="hidden w-full sm:block">
          <MyImage
            className="rounded-lg object-cover"
            src={getStrapiImage(post.attributes.image.data.attributes.url)}
            alt={post.attributes.title}
            height={62}
            width={100}
          />
        </div>
        <div className="block w-full sm:hidden">
          <MyImage
            className="rounded-lg object-cover"
            src={getStrapiImage(post.attributes.image.data.attributes.url)}
            alt={post.attributes.title}
            height={250}
            width={430}
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex space-x-2 items-center">
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

          <div className="text-[11px]">
            <p>{post.attributes.author.data.attributes.name}</p>
            <p>
              {settings.setting.data.attributes.published_date_text}{" "}
              {dateFormat(post.attributes.publishedAt)}
            </p>
          </div>
        </div>

        <p className="text-xs font-semibold">{post.attributes.title}</p>
      </div>
    </div>
  );
};

export default ArticleSideCard;
