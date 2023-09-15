import { GetArticlesQuery } from "@adapters";
import { MyImage, MyLink } from "@design-system";
import { capitalize, getStrapiImage } from "@utils";
import React from "react";

export interface BlogAuthorCardProps {
  post: GetArticlesQuery["articles"]["data"][number];
}
const BlogAuthorCard: React.FC<BlogAuthorCardProps> = ({ post }) => {
  return (
    <div className="relative mo:mx-4">
      <div className="absolute z-[1] top-[10px] right-0 left-[9px] bottom-0 bg-black w-full h-full rounded-3xl" />
      <div className="rounded-3xl bg-white p-4 mt-8 border-[3px]  border-black sm:border-[3px] relative z-[2]">
        <div className="flex sm:flex-row flex-col items-center sm:items-start sm:space-x-6 space-y-3 sm:space-y-0">
          <div className="rounded-xl border-black border-2 overflow-hidden">
            <MyLink
              href={`/auteur/${post.attributes.author.data.attributes.slug}`}
            >
              <a>
                <MyImage
                  src={getStrapiImage(
                    post.attributes.author.data.attributes.picture.data
                      .attributes.url,
                  )}
                  className="rounded-xl "
                  alt="about"
                  width={300}
                  height={224}
                />
              </a>
            </MyLink>
          </div>
          <div className="flex flex-col">
            <MyLink
              href={`/auteur/${post.attributes.author.data.attributes.slug}`}
            >
              <a>
                {/* <h4 className="font-extrabold text-xl">
                  {capitalize(post.attributes.author.data.attributes.name)}
                </h4> */}
              </a>
            </MyLink>
            <span className="pb-6">Author</span>
            <div className=" border-b-[1px]  border-[#E2F6FC] ">
              {" "}
              {post.attributes.author.data.attributes.about}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogAuthorCard;
