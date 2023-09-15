import { MyImage } from "@design-system";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import React from "react";
import { arrayRotate } from "@utils";
import clsx from "clsx";
import { ProductResults } from "@adapters/api";

export interface ProjectSliderProps {
  product: ProductResults["products"][0];
}
const ProjectSlider: React.FC<ProjectSliderProps> = ({ product }) => {
  const [activeIndexHolder, setActiveIndexHolder] = React.useState(0);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const images = product.media;

  const activeItems = arrayRotate(images).splice(activeIndexHolder, 3);

  const handleNext = () => {
    if (activeIndexHolder === images.length - 2) {
      setActiveIndexHolder(0);
    } else {
      setActiveIndexHolder(activeIndexHolder + 1);
    }
    if (activeIndex === activeItems.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };
  const handlePrev = () => {
    if (activeIndexHolder === 0) {
      setActiveIndexHolder(images.length - 1);
    } else {
      setActiveIndexHolder(activeIndexHolder - 1);
    }
    if (activeIndex === 0) {
      setActiveIndex(activeItems.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };
  const handleImgClick = (idx: number) => {
    setActiveIndex(idx);
  };
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative overflow-hidden">
        {activeItems[1] !== undefined && (
          <MyImage
            src={activeItems[1]}
            height={300}
            width={500}
            alt={product.product_name}
            objectFit="contain"
          />
        )}
      </div>
      <div className="flex justify-center space-x-4 mt-8 mx-auto px-4">
        <button onClick={handlePrev}>
          <ChevronLeftIcon className="w-6 h-6 text-black" />
        </button>

        {activeItems[1] !== undefined &&
          activeItems.map((el, idx) => {
            const isActive = activeItems[1] === activeItems[idx];
            return (
              <button
                onClick={() => handleImgClick(idx)}
                key={idx}
                className={clsx("flex p-2 rounded-xl", isActive && " border-2")}
              >
                <MyImage
                  src={el}
                  alt={product.product_name}
                  height={70}
                  width={120}
                  objectFit="contain"
                  className={clsx(
                    "w-20 h-20 border-b-8 pb-4",
                    isActive ? "border-red-900 " : "opacity-70 border-yellow",
                  )}
                />
              </button>
            );
          })}

        <button onClick={handleNext}>
          <ChevronRightIcon className="w-6 h-6 text-black" />
        </button>
      </div>
    </div>
  );
};

export default ProjectSlider;
