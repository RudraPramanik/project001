import { CheckIcon, XIcon } from "@heroicons/react/outline";
import clsx from "clsx";

export interface MyListProps {
  type: "plus" | "minus";
  className?: string;
}
const MyList: React.FC<MyListProps> = ({ type, className, children }) => {
  return (
    <li className="flex items-center space-x-1">
      <span>
        {type === "plus" ? (
          <CheckIcon className="w-3 h-3 text-green-600" />
        ) : (
          <XIcon className="w-3 h-3 text-red-600" />
        )}
      </span>
      <span className={clsx("w-full", className)}>{children}</span>
    </li>
  );
};
export default MyList;
