import { GetArticleQuery } from "@adapters";
import { Button, MyImage } from "@design-system";
import { getStrapiImage } from "@utils";
import React from "react";

export interface AuthorComponentProps {
  author: GetArticleQuery["article"]["data"]["attributes"]["author"]["data"];
}
const AuthorComponent: React.FC<AuthorComponentProps> = ({ author }) => {
  return (
    <div className="flex flex-row items-center relative w-full">
      <div className="relative hidden sm:block">
        <div className="absolute -top-20 right-2">
          <img
            src="/images/svgs/author_card_sprinkles.svg"
            alt=""
            width={329}
          />
        </div>
        <div className="p-4 flex items-center rounded-full -mr-16">
          <div className="flex items-center rounded-full border-8 border-white shadow-sm w-[148px] h-[148px]">
            <MyImage
              src={getStrapiImage(
                author.attributes.picture.data.attributes.url,
              )}
              className="object-cover rounded-full"
              alt={author.attributes.name}
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
      <div
        className="rounded-2xl p-8 sm:pl-20 w-full"
        style={{
          boxShadow:
            "-3px 10px 30px rgba(174, 174, 192, 0.25), -10px -10px 30px #FFFFFF, inset 10px 10px 10px #FFFFFF, inset -10px -10px 10px rgba(174, 174, 192, 0.25)",
        }}
      >
        <div className="relative">
          <span className="absolute -top-4 right-0 hidden sm:block">
            <img src="/images/svgs/balls.svg" alt="balls" />
          </span>
          <div className="sm:hidden flex justify-center">
            <MyImage
              src={getStrapiImage(
                author.attributes.picture.data.attributes.url,
              )}
              className="object-cover rounded-full"
              alt={author.attributes.name}
              width={90}
              height={90}
            />
          </div>

          <h4 className="text-xl sm:text-left text-center py-1 font-bold">
            {author.attributes.name}{" "}
          </h4>
          <div className="text-center sm:text-left text-md px-4 font-light leading-7 sm:px-0 mt-3">
            {author.attributes.about}{" "}
          </div>
          <div className="flex justify-center sm:justify-start mt-4">
            <Button
              tag="a"
              className="text-left z-10"
              href={author.attributes.slug}
            >
              Go to the author's page
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-8 right-16 hidden sm:block">
        <img src="/images/svgs/author_card_sprinkles2.svg" alt="" width={100} />
      </div>
      <div className="absolute bottom-[-46px] left-[-18px] block sm:hidden">
        <img src="/images/svgs/author_card_sprinkles3.svg" alt="" width={100} />
      </div>
      <div className="absolute top-[-32px] right-[-11px] block sm:hidden">
        <img src="/images/svgs/author_card_sprinkles4.svg" alt="" width={100} />
      </div>
    </div>
  );
};

export default AuthorComponent;
