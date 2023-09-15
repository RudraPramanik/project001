import { GetArticleQuery } from "@adapters";
import { MyLink } from "@design-system";
import React from "react";

export interface ArticlesCardProps {
  author: GetArticleQuery["article"]["data"]["attributes"]["author"];
  src: string;
  title: string;
  desc: string;
  path: string;
}
const ArticlesCard: React.FC<ArticlesCardProps> = ({
  path,
  desc,
  title,
  src,
  author,
}) => {
  return (
    <MyLink href={path}>
      <a className="relative">
        <div className="absolute z-[1] top-0 right-0 left-[8px] bottom-[4px] w-[99.8%] h-[104%] bg-black w-full h-full rounded-2xl" />
        <div className="bg-white flex flex-col-reverse mo:space-y-4 sm:grid sm:grid-cols-2 sm:gap-16 border-black p-3 sm:p-6 items-center border-[3px] mo:space-y-reverse border-r-[8px] rounded-2xl relative z-[2]">
          <div className="space-y-2">
            <h4 className=" font-black mo:text-lg ">{title}</h4>
            <p className="text-sm font-light">{desc}</p>
            <div className="flex space-x-2 items-center">
              <img
                src={author.data.attributes.picture.data.attributes.url}
                alt={author.data.attributes.name}
                className="rounded-full w-6 h-6 border border-black"
              />
              <span className="text-xs italic font-light">
                {author.data.attributes.name}
              </span>
            </div>
          </div>
          <div>
            <img
              src={src}
              alt={title}
              className="w-full sm:h-[200px] bg-cover rounded-xl"
            />
          </div>
        </div>
      </a>
    </MyLink>
  );
};

export default ArticlesCard;
