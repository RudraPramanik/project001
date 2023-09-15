import { MyImage } from "@design-system";
import React from "react";

export interface TeamTopProps {
  src?: string;
  height?: number;
  width?: number;
}
const TeamTop: React.FC<TeamTopProps> = ({
  src = "/images/ills/footer/footer.png",
  width = 1920,
  height = 875,
}) => {
  return (
    <div>
      <div className="hidden sm:block">
        <div className=" z-[-1] -top-48 2xl:-top-60 3xl:-top-80 3.5xl:-top-96 4xl:top-[-450px] 5xl:top-[-600px]  left-0 absolute h-full w-full">
          <MyImage
            src="/images/ills/about/team-top.png"
            width={1920}
            height={352}
            alt="Hero illustration"
            layout="responsive"
            className="select-none"
            draggable={false}
          />
        </div>
      </div>

      <div className=" block sm:hidden">
        <div className="z-[-1] -top-44 left-0 absolute h-full w-full">
          <MyImage
            src="/images/ills/about/team-top-mb.png"
            width={320}
            height={194}
            alt="Hero illustration"
            layout="responsive"
            className="select-none"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamTop;
