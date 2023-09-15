import { GetArticlesQuery } from "@adapters";
import { MyImage, MyLink } from "@design-system";
import { capitalize, getStrapiImage } from "@utils";
import { usePageContent } from "@utils/contexts/page-content.context";
import React from "react";

export interface BlogArticlesCardProps {
  post: GetArticlesQuery["articles"]["data"][number];
}
const BlogArticlesCard: React.FC<BlogArticlesCardProps> = ({ post }) => {
  const { settings } = usePageContent();
  return (
    <div className="mb-12 shadow-box2 border-2 border-r-[16px] rounded-tr-3xl rounded-br-3xl border-black rounded-3xl flex flex-col-reverse sm:flex-row items-center p-2 ">
      <div className=" w-full sm:w-1/2 items-center  content-center space-y-3 mx-6 ">
        <h3 className="text-black">
          <MyLink href={post.attributes.slug}>
            <a className="font-extrabold">{post.attributes.title}</a>
          </MyLink>
        </h3>
        <p className=" leading-[32.4px] ">{post.attributes.description}</p>
        <div className="flex items-center">
          <div>
            <MyLink href={`/auteur/${post.attributes.slug}`}>
              <div className=" rounded-full  flex border-2 border-black overflow-hidden">
                <MyImage
                  src={getStrapiImage(
                    post.attributes.author.data.attributes.picture.data
                      .attributes.url,
                  )}
                  alt="top-left-ills"
                  className="rounded-full"
                  width={40}
                  height={40}
                />
              </div>
            </MyLink>
          </div>
          <MyLink
            href={`/auteur/${post.attributes.author.data.attributes.slug}`}
          >
            <a>
              <p className=" items-center italic text-[14px]">
                {capitalize(post.attributes.author.data.attributes.name)}
              </p>
            </a>
          </MyLink>
        </div>
      </div>
      <div className=" w-full sm:w-1/2 mx-2 mt-2 ">
        <MyLink href={`/auteur/${post.attributes.author.data.attributes.slug}`}>
          <a>
            <MyImage
              src={getStrapiImage(post.attributes.image.data.attributes.url)}
              alt="icon-plus"
              width={1073}
              height={736}
              className="rounded-2xl"
            />
          </a>
        </MyLink>
      </div>
    </div>
  );
};

export default BlogArticlesCard;
