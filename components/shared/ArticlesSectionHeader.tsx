import React from "react";

export interface ArticlesSectionHeaderProps {}
const ArticlesSectionHeaderCategories: React.FC<
  ArticlesSectionHeaderProps
> = () => {
  return (
    <img
      src="/images/svgs/articles-section-starter.svg"
      alt="hero illustration"
      className=""
      width={1922}
      height={333}
    />
  );
};

export default ArticlesSectionHeaderCategories;
