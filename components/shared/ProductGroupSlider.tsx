import { Product } from "@adapters/api";
import GradientCircularProgress from "@components/product-group/GradientCircularProgress";
import { MyImage } from "@design-system";
import useMediaQuery from "@utils/hooks/use-media";
import clsx from "clsx";
import {
  KeenSliderInstance,
  KeenSliderPlugin,
  useKeenSlider,
} from "keen-slider/react";
import React, { MutableRefObject } from "react";

export interface ProductGroupSliderProps {
  product: Product;
  isProdPage?: boolean;
  thumNum?: number;
}
const ProductGroupSlider: React.FC<ProductGroupSliderProps> = ({
  product,
  isProdPage = false,
  thumNum = 3,
}) => {
  // const initialImage = product.media.findIndex(
  //   (img) => img === product.main_image_url,
  // );

  const matches = useMediaQuery("(max-width: 639px)");

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    vertical: isProdPage ? false : matches ? false : true,
    loop: true,
  });

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      vertical: isProdPage ? true : matches ? true : false,
      renderMode: "performance",
      slides: {
        origin: "center",
        perView: thumNum,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)],
  );
  // const { content } = usePageContent();
  // const productGroupPageContent = content as GetProductGroupPageQuery;
  return (
    <div>
      <div
        className={clsx(
          isProdPage
            ? "max-w-2xl flex flex-col gap-4"
            : "flex flex-col sm:grid sm:grid-rows-4 gap-4",
        )}
      >
        <div
          ref={sliderRef}
          className={clsx(
            "keen-slider",
            isProdPage
              ? "sm:row-span-3 h-[330px] max-h-[400px]"
              : "sm:row-span-3 h-[330px] sm:h-[430px] max-h-[400px] ",
          )}
        >
          {[
            isProdPage ? (product as any).image : product.main_image_url,
            ...product.media,
          ].map((prd, i) => (
            <div
              className={clsx(
                ` keen-slider__slide border-2 border-r-[6px] border-b-[6px] rounded-xl border-black bg-white `,
                isProdPage ? `number-slide${i + 1}` : `number-slide${i + 1}`,
              )}
              key={i}
            >
              <div className="">
                <div className="text-xl absolute left-2 top-2  ">
                  <div className=" flex items-center  ">
                    <GradientCircularProgress
                      startColor="#1579D7"
                      middleColor="#0E91E3"
                      endColor="#00C8FF"
                      size={60}
                      progress={product.score * 10}
                    >
                      <span className="absolute pl-[4px] top-1 left-[2.5px]  ">
                        {product.score}
                      </span>
                    </GradientCircularProgress>
                  </div>
                </div>
                <MyImage
                  src={prd}
                  alt=""
                  height={300}
                  width={300}
                  objectFit="contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div ref={thumbnailRef} className="keen-slider thumbnail col-span-1  ">
          {[
            isProdPage ? (product as any).image : product.main_image_url,
            ...product.media,
          ].map((prd, i) => (
            <div
              className={`keen-slider__slide number-slide border-2 border-r-4 border-b-4 rounded-xl border-black ${
                i + 1
              }  flex flex-col justify-center space-y-5 `}
              key={i}
            >
              <MyImage
                src={prd}
                alt=""
                height={500}
                width={500}
                objectFit="contain"
                className="bg-white"
              />
            </div>
          ))}
        </div>
      </div>
      {/* <div className="flex justify-center sm:ml-32 mt-3">
        <ExternalLink
          href="/"
          className=" mt-3 sm:mt-0 px-14 sm:px-12 py-3 align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none rounded-3xl text-white bg-tbeste-blue-default border-2 border-white hover:bg-tbeste-purple-hover font-primary shadow-xl shadow-tbeste-blue-default uppercase space-x-4"
        >
          <span className="text-sm sm:text-[14px] font-bold ">offers</span>
          <ArrowNarrowRightIcon className="w-5" />
        </ExternalLink>
      </div> */}
    </div>
  );
};

export default ProductGroupSlider;

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>,
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(next);
      });
    });
  };
}
