import { GetArticlesQuery, GetHomePageQuery } from "@adapters";
import { Button, MyLink } from "@design-system";
import { usePageContent } from "@utils/contexts/page-content.context";
import React from "react";

export interface BlogProps {
  posts: GetArticlesQuery["articles"];
}
const Blog: React.FC<BlogProps> = ({ posts }) => {
  const { content } = usePageContent();
  const homePageContent = content as GetHomePageQuery;

  return (
    <div className="  ">
      <div className="-mt-110">
        <img
          src="/images/ills/home/cat-bottom-ills.svg"
          alt="ils"
          className="sm:block hidden"
          width={5400}
        />
        <img
          src="/images/ills/home/categories-mobileIlls.svg"
          width={480}
          alt="ils"
          className="block sm:hidden"
        />
      </div>
      <div className="sm:px-0 px-6 space-y-10 flex flex-col items-center  max-w-5xl  mx-auto w-full ">
        <div className="flex flex-col text-center justify-center space-y-4 px-10 sm:px-0 mt-12 sm:mt-0">
          <h2 className=" font-black text-4xl z-10 relative">
            {" "}
            {homePageContent.homePage.data.attributes.blog_section_title}{" "}
          </h2>
          <p className=" font-medium">
            {" "}
            {
              homePageContent.homePage.data.attributes.blog_section_description
            }{" "}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0   justify-center">
          {posts.data.map((post) => (
            <BlogCard post={post} key={post.id} />
          ))}
        </div>
        <div>
          <Button
            tag="a"
            size="large"
            className="!px-24 !py-2 !text-lg mt-4 !rounded-full"
            href="/blog"
          >
            {homePageContent.homePage.data.attributes.blog_section_button_text}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;

export interface BlogCardProps {
  post: GetArticlesQuery["articles"]["data"][number];
}
const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="flex flex-col space-y-2 w-full">
      <img
        src={post.attributes.image.data.attributes.url}
        alt={post.attributes.title}
        className="rounded-lg h-[200px] object-cover"
      />
      <div className="flex flex-col space-y-3 ">
        <MyLink href={post.attributes.slug}>
          <a className=" text-md font-bold  leading-6">
            {post.attributes.title}
          </a>
        </MyLink>
        <p className="text-sm leading-6 ">{post.attributes.description}</p>
      </div>
    </div>
  );
};
BlogCard;
