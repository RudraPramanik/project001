import { Button } from "@design-system";
import { categoriesData } from "@utils";
import { MyImage } from "@design-system";
import React from "react";

export interface NavPopoverPanelProps {}
const NavPopoverPanel: React.FC<NavPopoverPanelProps> = () => {
  const cats = categoriesData;
  const [currentCat, setCurrentCat] = React.useState(cats[0]);

  const dropdownRef = React.useRef(null);
  const timeoutDuration = 200;
  let timeout;

  const closeMenu = () =>
    dropdownRef?.current?.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        cancelable: true,
      }),
    );

  const onMouseEnter = (cat) => {
    setCurrentCat(cat);
    clearTimeout(timeout);
  };
  const onMouseLeave = (open) => {
    open && (timeout = setTimeout(() => closeMenu(), timeoutDuration));
  };

  return (
    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-primary-default">
      <div className="flex">
        <div className="w-[30%] flex justify-center items-center">
          <MyImage
            alt={currentCat.name}
            src={`/images/cats/${currentCat.name.toLowerCase()}.svg`}
            className=""
            height={160}
            width={160}
          />
        </div>
        <div className="relative grid gap-6 p-7 items-center lg:grid-cols-2 w-[70%]">
          {cats.map((item) => (
            <Button
              className="text-white"
              key={item.name}
              onMouseEnter={() => onMouseEnter(item)}
              onMouseLeave={() => onMouseLeave(open)}
              title={item.name}
              href={`/${item.name.toLowerCase()}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavPopoverPanel;
