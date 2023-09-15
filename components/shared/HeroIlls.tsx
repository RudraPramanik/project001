import { MyImage } from "@design-system";
import clsx from "clsx";
import { ImageProps } from "next/image";
import React from "react";

export interface HeroIllsProps {
  src: string;
  height: number;
  width?: number;
  className?: string;
  objectFit?: ImageProps["objectFit"];
}
const HeroIlls: React.FC<HeroIllsProps> = ({
  src,
  width = 1920,
  height,
  className,
  objectFit,
}) => {
  return (
    <div className=" h-full w-full">
      <MyImage
        src={src}
        width={width}
        height={height}
        quality={60}
        alt="Hero illustration"
        layout="responsive"
        objectFit={objectFit}
        className={clsx(className, "select-none")}
        draggable={false}
      />
    </div>
  );
};

export default HeroIlls;
