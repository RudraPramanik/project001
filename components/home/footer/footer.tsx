import { GetFooterPageQuery } from "@adapters";
import { ExternalLink, MyLink } from "@design-system";
import { usePageContent } from "@utils/contexts/page-content.context";
import React from "react";

export interface FooterProps {
  mt?: string;
}
const Footer: React.FC<FooterProps> = () => {
  const { footer, settings } = usePageContent();
  const footerContent = footer as GetFooterPageQuery;

  return (
    <div>
      <footer className="text-[#1B1B1F]">
        <div className=" ">
          <img
            src="/images/footer/footer_top_ills.svg"
            alt="footer ills"
            width={5400}
            className="hidden sm:block"
          />
          <img
            src="/images/footer/footer-mob-top.svg"
            alt="footer ills"
            width={700}
            className="sm:hidden block"
          />
        </div>
        <div className="bg-white max-w-4xl 2.5xl:max-w-5xl mx-auto relative sm:pb-36 pb-96 pt-6 grid grid-cols-1 sm:grid-cols-5 gap-12 px-4 sm:px-10 border-2 border-black shadow-footer rounded-xl mo:mx-4 sm:-mt-[420px] -mt-[1300px]">
          <div className="flex flex-col sm:col-span-1">
            <h3 className="capitalize text-lg font-bold mo:text-center">
              {footerContent?.footer?.data?.attributes?.pages_title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-1 gap-y-2 sm:gap-y-1 gap-x-8 sm:gap-3 mt-6">
              {footerContent?.footer?.data?.attributes?.Pages_Links?.map(
                (page) => (
                  <MyLink key={page.slug} href={page.slug}>
                    <a className=" my-1.5 mo:border-[1px] mo:border-black mo:rounded-lg mo:p-2 mo:text-sm mo:text-center mo:hover:bg-gray-100 transition-all z-[30] text-sm sm:text-[15px] hover:text-gray-600 py-2 sm:p-0 ">
                      {page.name}
                    </a>
                  </MyLink>
                ),
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <h3 className="capitalize text-lg font-black mo:text-center">
              {footerContent?.footer?.data?.attributes?.categories_title}
            </h3>

            <div className="grid grid-cols-2  gap-y-2 sm:gap-y-1 gap-x-4 mt-6">
              {settings?.setting?.data?.attributes?.Categories_Data?.map(
                (cat) => (
                  <MyLink key={cat.slug} href={cat.slug}>
                    <a className="border-[1px] my-1.5 border-black rounded-lg p-2 text-sm text-center z-20 hover:bg-gray-100 transition-all">
                      {cat.name}
                    </a>
                  </MyLink>
                ),
              )}
            </div>
          </div>
          <div className=" space-y-4 sm:space-y-8 sm:col-span-2">
            <h3 className="capitalize text-lg font-black mo:text-center">
              {footerContent?.footer?.data?.attributes?.contact_title}
            </h3>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y">
                <h4 className="font-secondary font-bold text-lg sm:text-base ">
                  {footerContent?.footer?.data?.attributes?.email_title}
                </h4>
                <a
                  href="mailto:info@tbeste.nl"
                  className="z-[20] text-sm font-normal hover:text-gray-600 transition-all leading-5"
                >
                  {footerContent?.footer?.data?.attributes?.email}
                </a>
              </div>

              <div className="flex flex-col space-y text-base">
                <h4 className="font-secondary font-bold text-lg sm:text-base  ">
                  {footerContent?.footer?.data?.attributes?.adress_title}
                </h4>
                <a className="z-[1] text-sm font-normal hover:text-gray-300 transition-all leading-5">
                  {footerContent?.footer?.data?.attributes?.adress}
                </a>
              </div>
              <div className="flex flex-col justify-around w-full">
                <span className="font-secondary font-bold text-lg sm:text-base ">
                  {settings?.setting?.data?.attributes?.social_network_title}
                </span>
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
                            socialMedia.find(
                              (sm) => sm.name === item.social_media,
                            ).icon
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
          </div>
        </div>
        <div className=" relative z-10 -mt-96 3xl:-mt-[30rem] 4xl:-mt-[40rem] 5xl:-mt-[57rem]">
          <img
            src="/images/footer/footer_bottom_ills.svg"
            alt=""
            width={5400}
            className="hidden sm:block"
          />
          <img
            src="/images/footer/footer-mob-bot.svg"
            alt="footer ills"
            width={700}
            className="sm:hidden block"
          />
        </div>
      </footer>
      <div className="bg-[#081B6A] text-center border-t-2 border-white text-white z-10 relative py-3 text-md">
        <span>© 2022 T-Beste.com All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
export const socialMedia = [
  {
    name: "facebook",
    icon: "/images/social-media/facebook.svg",
  },
  {
    name: "instagram",
    icon: "/images/social-media/instagram.svg",
  },
  {
    name: "twitter",
    icon: "/images/social-media/twitter.svg",
  },
  {
    name: "linkedin",
    icon: "/images/social-media/linkedin.svg",
  },
  {
    name: "pinterest",
    icon: "/images/social-media/pinterest.svg",
  },
];
