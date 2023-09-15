import { MyImage } from "@design-system";
import React from "react";

export interface InhoudsopgaveProps {}
const Inhoudsopgave: React.FC<InhoudsopgaveProps> = () => {
  return (
    <div className="h-full bg-[#edf6ff] flex flex-col justify-between pt-10 sm:pt-0 -mt-[400px] sm:-mt-20 3xl:-mt-28 4xl:-mt-36 4.5xl:-mt-52 ">
      <div className="mx-4 pt-20 ">
        <div className="flex justify-around ">
          <MyImage
            src="/images/color-commet.png"
            height={50}
            width={50}
            alt=""
          />
          <MyImage
            src="/images/color-commet.png"
            height={50}
            width={50}
            alt=""
          />
        </div>
        <h3>inhoudsopgave</h3>
        <div>
          <MyImage
            src="/images/curve-line.svg"
            height={30}
            width={200}
            alt=""
          />
        </div>
        <span className="underline underline-offset-4  font-semibold ">
          Ut enim ad minima veniam, quis nostrum
        </span>
        <p className=" leading-loose ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          repellat sunt ab? Facilis, asperiores optio?
        </p>
      </div>
      {/* 2 */}
      <div className="mx-4 pt-20 ">
        <div className="flex justify-around ">
          <MyImage
            src="/images/color-commet.png"
            height={50}
            width={50}
            alt=""
          />
          <MyImage
            src="/images/color-commet.png"
            height={50}
            width={50}
            alt=""
          />
        </div>
        <h3>inhoudsopgave</h3>
        <div>
          <MyImage
            src="/images/curve-line.svg"
            height={30}
            width={200}
            alt=""
          />
        </div>
        <span className="underline underline-offset-4  font-semibold ">
          Ut enim ad minima veniam, quis nostrum
        </span>
        <p className=" leading-loose ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          repellat sunt ab? Facilis, asperiores optio?
        </p>
      </div>
      {/* 3 */}
      <div className="mx-4 pt-20 ">
        <div className="flex justify-around ">
          <MyImage
            src="/images/color-commet.png"
            height={50}
            width={50}
            alt=""
          />
          <MyImage
            src="/images/color-commet.png"
            height={50}
            width={50}
            alt=""
          />
        </div>
        <h3>inhoudsopgave</h3>
        <div>
          <MyImage
            src="/images/curve-line.svg"
            height={30}
            width={200}
            alt=""
          />
        </div>
        <span className="underline underline-offset-4  font-semibold ">
          Ut enim ad minima veniam, quis nostrum
        </span>
        <p className=" leading-loose ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          repellat sunt ab? Facilis, asperiores optio?
        </p>
      </div>
    </div>
  );
};

export default Inhoudsopgave;
