import { GetContactPageQuery } from "@adapters/generated/graphql";
import { Button } from "@design-system";
import { usePageContent } from "@utils/contexts/page-content.context";
import React from "react";
// import * as z from "zod";

// const schema = z.object({
//   Name: z.string().nonempty(),
//   Email: z.string().email(),
//   Content: z.string().nonempty(),
// });
export interface ContactContentProps {}
const ContactContent: React.FC<ContactContentProps> = () => {
  const { content, settings } = usePageContent();
  const contactPageContent = content as GetContactPageQuery;

  return (
    <div
      className=" border-2 border-black rounded-2xl max-w-4xl mx-4 sm:mx-auto mb-24"
      style={{
        boxShadow: "9px 15px 0px 2px #000000",
        // boxShadow: "14px 14px 0px -5px #000000",
      }}
    >
      <div className=" grid grid-cols-1 sm:grid-cols-5 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-black ">
        <div className=" relative col-span-3 bg-[#FFFFFF] text-black rounded-t-2xl sm:rounded-tr-none sm:rounded-l-2xl ">
          <div className=" w-1/3 left-0 top-0 ">
            <img
              src="/images/contact/contact-svg1.svg"
              className="select-none rounded-2xl "
              alt="about Ills "
              width={650}
            />
          </div>
          <div className="absolute w-1/3 right-0 bottom-0 ">
            <img
              src="/images/contact/contact-svg2.svg"
              className="select-none"
              alt="about Ills"
              width={650}
            />
          </div>
          {/* content  */}
          <div className=" space-y-5 text-left w-3/5 mx-auto mb-20 ">
            <div>
              <h4 className=" font-bold ">
                {settings.setting.data.attributes.email_title}{" "}
              </h4>
              <a href={settings.setting.data.attributes.email}>
                {settings.setting.data.attributes.email}
              </a>
            </div>
            <div>
              <h4 className=" font-bold ">
                {settings.setting.data.attributes.adress_title}{" "}
              </h4>
              <p>{settings.setting.data.attributes.adress}</p>
            </div>{" "}
            <div>
              <h4 className=" font-bold ">
                {settings.setting.data.attributes.social_network_title}
              </h4>
              <div className="flex space-x-4 ">
                {socialNetworks.map((network) => (
                  <img
                    src={network.path}
                    key={network.path}
                    className="z-20 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300"
                  />
                ))}
                {/* <MyImage
                  src="/svgs/linkedin.svg"
                  alt=""
                  width={50}
                  className=""
                  height={50}
                />
                <MyImage
                  src="/svgs/linkedin.svg"
                  alt=""
                  width={50}
                  className=""
                  height={50}
                /> */}
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-2 bg-[#ebf0f4] text-black rounded-bl-2xl rounded-br-2xl sm:rounded-bl-none sm:rounded-tr-xl  content-center items-center ">
          {/* input */}
          <div className=" py-8 px-10 ">
            <h4 className=" font-bold ">
              {contactPageContent.contactPage.data.attributes.content_title}
            </h4>
            {/* <p>
              {
                contactPageContent.contactPage.data.attributes
                  .content_description
              }
            </p> */}
          </div>
          <div className="w-full space-y-3 px-10 ">
            <div className="flex flex-col  space-y-3 ">
              <input
                className=" outline-none w-full border-[1px] rounded-full p-3 border-[#000000] text-sm "
                placeholder={
                  contactPageContent.contactPage.data.attributes
                    .form_name_placeholder
                }
              ></input>
              <input
                className=" outline-none rounded-full p-3  w-full border-[1px] border-[#000000] text-sm "
                placeholder={
                  contactPageContent.contactPage.data.attributes
                    .form_email_placeholder
                }
              ></input>
            </div>
            <input
              className=" outline-none rounded-2xl pb-20 pl-3 pt-3 w-full border-[1px]  text-top border-[#000000] text-sm "
              placeholder={
                contactPageContent.contactPage.data.attributes
                  .form_message_placeholder
              }
            ></input>
          </div>
          <Button layout="contact" className="my-7  ">
            <div className=" text-sm font-black py-1 ">
              {contactPageContent.contactPage.data.attributes.send_button_text}
            </div>
          </Button>

          {/* input */}

          {/*border border-black border-t-[2px] border-l-[2px] border-r-[2px] border-b-[2px] rounded-bl-2xl rounded-tr-2xl shadow-btn   */}
        </div>
      </div>
    </div>
  );
};

export default ContactContent;

export const socialNetworks = [
  {
    name: "facebook",
    path: "/svgs/linkedin.svg",
  },
  {
    name: "instagram",
    path: "/svgs/fb.svg",
  },
  {
    name: "twitter",
    path: "/images/social-media/twitter.svg",
  },
  {
    name: "pinterest",
    path: "/images/social-media/pinterest.svg",
  },
  {
    name: "linkeding",
    path: "/images/social-media/linkedin.svg",
  },
];
