import { MyImage } from "@design-system";
import React from "react";

export interface TeamTopProps {
  src?: string;
  height?: number;
  width?: number;
}
const Contact: React.FC<TeamTopProps> = ({
  src = "/images/ills/footer/footer.png",
  width = 1920,
  height = 875,
}) => {
  return (
    <div>
      <div className=" z-[-1] hidden max-w-3xl sm:block">
        <div className=" ">
          <MyImage
              src="/images/ills/contact/contact.png"
              width={1100}
              height={548}
            alt="Hero illustration"
            layout="fill"
            className="select-none"
            draggable={false}
          />
         
        </div>
      </div>

      <div className=" block sm:hidden">
        {/* <div className="z-[-1] -top-44 left-0 absolute h-full w-full">
          <MyImage
            src="/images/ills/about/team-top-mb.png"
            width={320}
            height={194}
            alt="Hero illustration"
            layout="responsive"
            className="select-none"
            draggable={false}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Contact;