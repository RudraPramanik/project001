import { MyImage, MyLink } from "@design-system";
import { getStrapiImage } from "@utils";
import { usePageContent } from "@utils/contexts/page-content.context";
import React from "react";

export interface LogoProps {}
const Logo: React.FC<LogoProps> = () => {
  const { settings } = usePageContent();
  if (!settings?.setting?.data?.attributes?.logo?.data?.attributes?.url)
    return null;

  return (
    <MyLink href="/">
      <a>
        <span className="">
          <MyImage
            src={getStrapiImage(
              settings.setting.data.attributes.logo.data.attributes.url,
            )}
            alt="tbeste"
            width={122}
            height={40}
          />
        </span>
        {/* <span className="hidden sm:block ">
          <MyImage
            src={getStrapiImage(
              settings.setting.data.attributes.logo.data.attributes.url,
            )}
            alt="tbeste"
            width={122}
            height={40}
          />
        </span> */}
      </a>
    </MyLink>
  );
};

export default Logo;
