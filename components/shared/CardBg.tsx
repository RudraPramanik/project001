import React from "react";

export interface BlogCard3Props {}
const CardBg: React.FC<BlogCard3Props> = ({ children }) => {
  return (
    <div>
      <div className="text-[#ffff]">
        <div className="bg-blog-post-card-mobile lg:blog-post-card max-h-[750px] max-w-[400px] lg:max-w-[770px] lg:max-h-[400px] bg-cover">
          <div className="flex flex-col justify-center text-center space-y-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBg;
