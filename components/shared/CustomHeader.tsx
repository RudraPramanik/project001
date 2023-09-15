import { Header } from "@components";
import React from "react";

export interface CustomHeaderProps {}
const CustomHeader: React.FC<CustomHeaderProps> = ({ children }) => {
  return (
    <div className="text-white">
      <div className="bg-blog-top-mobile xs:h-[700px] sm:bg-blog-top h-[500px] md:h-[500px] sm:h-[700px] bg-cover">
        <Header />
        <div className="flex flex-col justify-center text-center space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomHeader;
