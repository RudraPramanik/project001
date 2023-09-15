import React from "react";
import { SocialIcon } from "react-social-icons";

export type SocialLinksType = {
  icon: string;
  link: string;
  name: string;
};
export interface SocialLinksProps {
  links: SocialLinksType[];
  invert?: true;
  color?: string;
  bgColor?: string;
}

const SocialLinks2: React.FC<SocialLinksProps> = ({
  links,
  color = "#7974D0",
  bgColor = "#ffffff",
  invert = false,
}) => {
  return (
    <div className="flex justify-between w-full ">
      {links.map((item, i) => (
        <span key={i}>
          <div key={i} className="block 3.5xl:hidden">
            <SocialIcon
              url={item.link}
              fgColor={invert ? bgColor : color}
              bgColor={invert ? color : bgColor}
              style={{ width: "30px", height: "30px" }}
            />
          </div>
          <div key={i} className="hidden 3.5xl:block 4xl:hidden ">
            <SocialIcon
              url={item.link}
              fgColor={invert ? bgColor : color}
              bgColor={invert ? color : bgColor}
              style={{ width: "35px", height: "35px" }}
            />
          </div>
          <div key={i} className="hidden 4xl:block 4.5xl:hidden">
            <SocialIcon
              url={item.link}
              fgColor={invert ? bgColor : color}
              bgColor={invert ? color : bgColor}
              style={{ width: "40px", height: "40px" }}
            />
          </div>
          <div key={i} className="hidden 4.5xl:block">
            <SocialIcon
              url={item.link}
              fgColor={invert ? bgColor : color}
              bgColor={invert ? color : bgColor}
              style={{ width: "50px", height: "50px" }}
            />
          </div>
        </span>
      ))}
    </div>
  );
};

export default SocialLinks2;
