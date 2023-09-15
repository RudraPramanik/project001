import { GetArticlesQuery } from "@adapters";
import { BlogArticlesCard } from "@components";
import { MyImage, MyLink } from "@design-system";
import React from "react";

export interface BigArticlesProps {
  posts: GetArticlesQuery;
}
const BigArticles: React.FC<BigArticlesProps> = ({ posts }) => {
  return (
    <div className="">
      {posts.articles.data.slice(3).map((post) => (
        <BlogArticlesCard post={post} key={post.id} />
      ))}
    </div>
  );
};

export default BigArticles;
