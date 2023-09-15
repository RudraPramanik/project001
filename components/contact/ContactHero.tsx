import { GetContactPageQuery } from "@adapters/generated/graphql";
import { usePageContent } from "@utils/contexts/page-content.context";
import React from "react";
import { socialNetworks } from "./ContactContent";

export interface ContactHeroProps {}
const ContactHero: React.FC<ContactHeroProps> = () => {
  const { content, settings } = usePageContent();
  const contactPageContent = content as GetContactPageQuery;
  return (
    <div className=" bg-tbeste-blue-default sm:-mt-16 -mt-2  ">
      <div className="top-0 sm:block hidden">
        <img src="/images/ills/contact/hero.svg" alt="hero ills" width={5400} />
      </div>
      <div className="top-0 block sm:hidden mt-6 ">
        <img
          src="/images/ills/contact/hero-mobile.svg"
          alt="ills"
          width={650}
        />
      </div>
      <div className=" text-white  text-center sm:pt-6 -mt-20 sm:mt-0  ">
        <div className="max-w-4xl  mx-auto w-full sm:space-y-14 space-y-8">
          <div className="flex justify-center items-center pl-0 sm:pl-16">
            <h1 className="font-black text-4xl sm:text-6xl text-center shadow-word ">
              {contactPageContent.contactPage.data.attributes.hero_title}
            </h1>
            <span className="-ml-16 -mt-20 hidden sm:block ">
              <img
                src="/images/ills/contact/contact_hero_ills.svg"
                alt="sprinkles"
              />
            </span>
          </div>
          <div className="flex justify-between flex-col sm:flex-row   items-center text-center sm:space-x-10 space-y-4 sm:space-y-0 text-tbeste-text-default">
            <div>
              <h3 className="font-bold">
                {settings.setting.data.attributes.email_title}{" "}
              </h3>
              <span>{settings.setting.data.attributes.email}</span>
            </div>
            <div>
              <h3 className="font-bold">
                {settings.setting.data.attributes.adress_title}{" "}
              </h3>
              <span>{settings.setting.data.attributes.adress}</span>
            </div>

            <div className="flex flex-col justify-center items-center text-center">
              <h3 className="font-bold">
                {settings.setting.data.attributes.social_network_title}{" "}
              </h3>
              <div className="flex flex-row items-center w-full space-x-8 justify-between mt-2">
                {socialNetworks.map((network) => (
                  <img
                    src={network.path}
                    key={network.path}
                    alt={network.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
