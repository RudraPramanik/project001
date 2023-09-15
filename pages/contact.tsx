import {
  GetContactPageQuery,
  GetFooterPageQuery,
  GetHeaderPageQuery,
  GetSiteSettingsQuery,
} from "@adapters";
import { getSiteSettings } from "@adapters/api";
import {
  getContactPage,
  getFooterPage,
  getHeaderPage,
} from "@adapters/api/pages";
import { ContactContent } from "@components";
import { MyLink } from "@design-system";
import { DefaultLayout } from "@layouts";
import { globalRevalidateTiming } from "@utils";
import PageContentProvider from "@utils/contexts/page-content.context";
import { GetStaticProps } from "next";
import React from "react";

export interface ContactProps {
  contactPage: GetContactPageQuery;
  siteSettings: GetSiteSettingsQuery;
  headerPage: GetHeaderPageQuery;
  footerPage: GetFooterPageQuery;
}
const Contact: React.FC<ContactProps> = ({
  contactPage,
  siteSettings,
  footerPage,
  headerPage,
}) => {
  return (
    <PageContentProvider
      content={contactPage}
      header={headerPage}
      footer={footerPage}
      settings={siteSettings}
      errorPage={undefined}
    >
      <DefaultLayout hero={null} heroclassname={""}>
        <div className="-mb-96 4xl:-mt-36  -mt-20">
          <div className="-mt-20 sm:block hidden">
            <img
              src="/images/about/header-top.svg"
              alt="top-left-ills"
              width={5800}
            />
          </div>
          <div className="absolute top-0 block sm:hidden -mt-6 ">
            <img
              src="/images/about/about-top-mb.svg"
              alt="top-left-ills"
              width={639}
            />
          </div>
          <div className=" bg-[#AD94FF] pt-60 -mt-96 text-center space-y-10 text-white pb-96  4xl:py-[500px] 3xl:py-[450px] 3xl:-my-[600px]  4xl:-my-[900px]">
            <div className="max-w-2xl mx-auto">
              <div className="hidden sm:block space-x-2 z-10 relative">
                {[
                  { link: "/", name: "Home" },
                  { link: "/contact", name: "Contact" },
                ].map((acc, i) => (
                  <React.Fragment key={acc.link}>
                    <MyLink href={acc.link}>
                      <a className="hover:underline capitalize text-lg sm:text-md">
                        {acc.name}
                      </a>
                    </MyLink>
                    {1 !== i && <span>•</span>}
                  </React.Fragment>
                ))}
              </div>
              <h1 className="shadow-word text-5xl font-black text-white py-10 pt-24 sm:pt-16">
                {contactPage.contactPage.data.attributes.hero_title}
              </h1>
            </div>
            <div className="py-20">
              <ContactContent />
            </div>
          </div>
        </div>
      </DefaultLayout>
    </PageContentProvider>
  );
};

export default Contact;

export const getStaticProps: GetStaticProps = async () => {
  const contactPage = await getContactPage();
  const headerPage = await getHeaderPage();
  const footerPage = await getFooterPage();
  const siteSettings = await getSiteSettings();

  return {
    props: {
      contactPage,
      headerPage,
      footerPage,
      siteSettings: siteSettings || null,
    },
    revalidate: globalRevalidateTiming,
  };
};
