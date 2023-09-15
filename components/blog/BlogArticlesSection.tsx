import { GetArticlesQuery } from "@adapters";
import { ArticlesCard } from "@components";
import React from "react";

export interface BlogArticlesSectionProps {
  posts: GetArticlesQuery["articles"]["data"];
}
const BlogArticlesSection: React.FC<BlogArticlesSectionProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-4 max-w-4xl 2xl:max-w-5xl 3xl:max-w-[1200px] 3.5xl:max-w-screen-2xl 4xl:max-w-screen-2.5xl 4.5xl:max-w-screen-3xl mx-auto px-4 lg:px-0">
      {posts.map((post, id) => (
        <ArticlesCard
          key={id}
          src={post.attributes.image.data.attributes.url}
          desc={post.attributes.description}
          path={post.attributes.slug}
          title={post.attributes.title}
          author={post.attributes.author}
        />
      ))}
    </div>
  );
};

export default BlogArticlesSection;
