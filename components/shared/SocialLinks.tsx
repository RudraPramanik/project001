import { socialItems } from "@components";
import { Button, MyImage } from "@design-system";
import { usePageContent } from "@utils/contexts/page-content.context";
import React from "react";

export interface SocialLinksProps {}
const SocialLinks: React.FC<SocialLinksProps> = () => {
  const { settings } = usePageContent();
  return (
    <>
      {settings?.setting?.data.attributes.social_media_links.map((item, i) => {
        const socialItem = socialItems.find(
          (social) => social.name === item.social_media,
        );
        return (
          <React.Fragment key={i}>
            {item.link && (
              <Button
                key={i}
                size="small"
                tag="a"
                href={item.link || ""}
                icon={socialItem.icon}
                className="text-white text-sm z-10"
              >
                {item.social_media === "facebook" ? (
                  <MyImage
                    src={socialItem.icon}
                    alt="social-link"
                    height={12}
                    width={12}
                  />
                ) : (
                  <MyImage
                    src={socialItem.icon}
                    alt="social-link"
                    height={20}
                    width={20}
                  />
                )}
              </Button>
            )}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default SocialLinks;
