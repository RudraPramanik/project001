import { GetOverOnsPageQuery, GetWritersQuery } from "@adapters";
import { MyImage } from "@design-system";
import { usePageContent } from "@utils/contexts/page-content.context";
import React from "react";

export interface AboutTeamProps {
  writers: GetWritersQuery;
}
const AboutTeam: React.FC<AboutTeamProps> = ({ writers }) => {
  const { content } = usePageContent();
  const overOnsPageContent = content as GetOverOnsPageQuery;
  return (
    <div className="">
      <div className=" hidden sm:block">
        <img
          src="/images/about/team-top.svg"
          className="cursor-not-allowed select-none"
          alt="about Ills "
          width={5800}
        />
      </div>
      <div className="block sm:hidden">
        <img
          src="/images/about/about-team-mb.svg"
          className="cursor-not-allowed select-none"
          alt="about Ills "
          width={640}
        />
      </div>
      <div className=" absolute hidden sm:block mt-72 left-0 w-1/5 ">
        <img
          src="/images/about/team-ill.svg"
          className="cursor-not-allowed select-none"
          alt="about Ills"
          width={650}
        />
      </div>
      <div className="bg-[#5AC7E5] py-56 -my-24 -mb-60 3xl:-mb-72 3xl:-mt-28 4xl:-mb-[500px] 4xl:-mt-56 ">
        <div className=" max-w-4xl mx-auto ">
          <h3 className="text-center max-w-2xl mx-auto font-bold text-white text-3xl ">
            {
              overOnsPageContent.overOnsPage.data.attributes
                .bottom_section_title
            }
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:pt-10 ">
            {writers.writers.data.map((writer) => (
              <TeamCard writer={writer} key={writer.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;

export interface TeamCardProps {
  writer: GetWritersQuery["writers"]["data"][0];
}

export const TeamCard: React.FC<TeamCardProps> = ({ writer }) => {
  return (
    <div className="my-2 shadow-box3 sm:my-5 w-11/12 border-black p-3 border-l-[2px] border-t-[2px] border-b-[2px] border-r-[2px] bg-white rounded-3xl items-center mx-auto  px-3 py-3 flex flex-col justify-between ">
      <div className="space-y-5 sm:space-y-10">
        <div>
          <div className="flex justify-center cursor-pointer">
            <div className="justify-center rounded-xl border-2 border-black ">
              <MyImage
                src={writer.attributes.picture.data.attributes.url}
                alt=""
                width={890}
                className="rounded-xl"
                objectFit="cover"
                height={548}
              />
            </div>
          </div>
        </div>
        <div className="space-y-3 sm:-mt-2 ">
          <h2 className="text-center text-xl  font-extrabold leading-7  ">
            {writer.attributes.name}
          </h2>
          <p className="text-center">Author</p>
          <p className="text-left leading-[28.8px] px-4 text-gray-500">
            {writer.attributes.about} 
          </p>
        </div>
      </div>
      {/*  */}
      <div className="flex justify-center space-x-3 pt-5  ">
        <div className=" ">
          <MyImage
            src="/svgs/linkedin.svg"
            alt=""
            width={50}
            className=""
            height={50}
          />
        </div>{" "}
        <div className="">
          <MyImage
            src="/svgs/fb.svg"
            alt=""
            width={50}
            className=""
            height={50}
          />
        </div>
      </div>
    </div>
  );
};
