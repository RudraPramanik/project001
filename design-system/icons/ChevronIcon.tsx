import clsx from "clsx";
import React from "react";

export interface ChevronUpIconProps {
  className?: string;
}
const ChevronUpIcon: React.FC<ChevronUpIconProps> = ({ className }) => (
  <svg
    className={clsx(className, "fill-current")}
    xmlns="http://www.w3.org/2000/svg"
    width="44"
    height="25"
    viewBox="0 0 44 25"
    fill="none"
  >
    <path d="M22 25L0.349365 0.25L43.6506 0.25L22 25Z" fill="currentColor" />
  </svg>
);

export default ChevronUpIcon;
