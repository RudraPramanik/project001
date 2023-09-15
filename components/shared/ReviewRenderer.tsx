import { StarIcon } from "@heroicons/react/solid";
import { StarIcon as StarOutlineIcon } from "@heroicons/react/outline";
import clsx from "clsx";

export interface ReviewRendererProps {
  number: number;
  size?: string;
}
const ReviewRenderer: React.FC<ReviewRendererProps> = ({
  number,
  size = "w-4",
}) => {
  number = number * 10;
  const stars = Math.floor(Math.floor(number / 10.0) / 2);
  const halves = Math.floor((number / 10.0) % 2);
  const empties = Math.floor(5 - stars - halves);
  return (
    <>
      {Array.from({ length: stars }).map((_i, i) => (
        <StarIcon key={i} className={clsx("text-yellow-500", size)} />
      ))}
      {Array.from({ length: halves }).map((_i, i) => (
        <StarIcon key={i} className={clsx("text-yellow-500", size)} />
      ))}
      {Array.from({ length: empties }).map((_i, i) => (
        <StarOutlineIcon key={i} className={clsx("text-yellow-500", size)} />
      ))}
    </>
  );
};

export default ReviewRenderer;
