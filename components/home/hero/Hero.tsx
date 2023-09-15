import { GetHomePageQuery } from "@adapters";
import { useGetProductGroups } from "@adapters/api";
import { usePageContent } from "@utils/contexts/page-content.context";
import useDebounce from "@utils/hooks/use-debounce";
import React from "react";

export interface HeroProps {}
const Hero: React.FC<HeroProps> = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);
  const [show, setShow] = React.useState(true);

  const { data, isLoading } = useGetProductGroups(
    {
      q: debouncedSearch,
    },
    {
      enabled: searchTerm.length > 0,
    },
  );

  const ref = React.useRef(null);

  const onClickOutside = () => {
    setShow(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside?.();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  const { content } = usePageContent();
  const homePageContent = content as GetHomePageQuery;
  return (
    <div className="-mt-16 3xl:-mt-20 4xl:-mt-36">
      <img
        src="/images/home/homepage_hero_ills.svg"
        alt=""
        className="hidden sm:block"
        width={5600}
      />
      <img
        src="/images/home/home-hero-mob.svg"
        alt=""
        className="sm:hidden block"
        width={900}
      />
    </div>
  );
};

export default Hero;
