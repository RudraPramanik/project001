import { GetHeaderPageQuery } from "@adapters";
import { socialMedia } from "@components/home/footer/footer";
import { ExternalLink, MyLink } from "@design-system";
import { useMobileMenuStore } from "@utils";
import { usePageContent } from "@utils/contexts/page-content.context";
import clsx from "clsx";
import { useRouter } from "next/router";
import * as React from "react";
import Drawer from "react-modern-drawer";

export interface MobileNavProps {}
const MobileNav: React.FC<MobileNavProps> = () => {
  const { mobileMenuProps, setMobileMenuProps } = useMobileMenuStore();
  function closeAction() {
    setMobileMenuProps(false);
  }
  const router = useRouter();
  React.useEffect(() => {
    if (mobileMenuProps.open) {
      setMobileMenuProps(!mobileMenuProps.open);
    }
  }, [router.asPath]);

  const handleCloseMenu = () => {
    setMobileMenuProps(false);
  };
  const { header, settings } = usePageContent();
  const headerContent = header as GetHeaderPageQuery;

  const linkItems = headerContent?.header?.data?.attributes?.Nav_Links?.map(
    (link) => {
      return {
        title: link.name,
        path: link.slug,
      };
    },
  );

  return (
    <Drawer
      open={mobileMenuProps.open}
      onClose={handleCloseMenu}
      direction="right"
      className=" divide-y-2 divide-primary-50  border-2 border-black rounded-b-3xl"
      duration={100}
      overlayOpacity={0.1}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      size="90%"
    >
      <div className="flex flex-row justify-between bg-[#2A3FBAD4] h-full  backdrop-blur-sm pt-12 rounded-b-3xl">
        <div className="pb-12 text-white flex flex-col pr-4 items-end relative justify-between w-full shadow-drawer ">
          <div>
            <span
              className=" flex justify-end font-extrabold text-3xl "
              style={{
                textShadow: "3px 4px 0px #1B1B1F",
              }}
            >
              {headerContent?.header?.data?.attributes?.mobile_nav_title}
            </span>
            <div className="relative grid gap-4 grid-cols-2 mt-8">
              {settings.setting.data.attributes.Categories_Data.map((item) => (
                <MyLink href={item.slug} key={item.slug}>
                  <a
                    className={clsx(
                      "flex flex-col items-center rounded-xl justify-center bg-white shadow-2xl space-y-2 px-3 py-2 relative overflow-hidden border-black border-l border-t border-r-[3px] border-b-[3px]",
                    )}
                  >
                    <p className="text-black font-extrabold text-base">
                      {item.name}
                    </p>
                  </a>
                </MyLink>
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-2 items-end -mt-16 ">
            {linkItems?.map((item) => (
              <LinkItem key={item.title} title={item.title} path={item.path} />
            ))}
          </div>

          <div className="flex justify-center sm:justify-start mt-3 space-x-2 items-center mb-10 sm:mb-0">
            {settings?.setting?.data?.attributes?.social_media_links?.map(
              (item, i) => (
                <ExternalLink
                  className="z-20 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300"
                  key={i}
                  href={item.link}
                >
                  <img
                    src={
                      socialMedia.find((sm) => sm.name === item.social_media)
                        .icon
                    }
                    alt=""
                    className="h-12 w-12 rounded-md"
                  />
                </ExternalLink>
              ),
            )}
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default MobileNav;

export interface LinkItemProps {
  path: string;
  title: string;
}
const LinkItem: React.FC<LinkItemProps> = ({ title, path }) => {
  return (
    <MyLink href={`${path}`}>
      <a className="flex p-3 sm:font-medium sm:text-md text-xl text-right sm:font-primary font-extrabold rounded-lg">
        {title}
      </a>
    </MyLink>
  );
};
