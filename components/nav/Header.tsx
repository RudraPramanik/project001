import { GetHeaderPageQuery } from "@adapters";
import { MobileNav } from "@components";
import { Button, ChevronIcon, MyLink } from "@design-system";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import { categoriesData, useMobileMenuStore } from "@utils";
import { usePageContent } from "@utils/contexts/page-content.context";
import clsx from "clsx";
import React from "react";
import { usePopper } from "react-popper";

export interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  const { setMobileMenuProps, mobileMenuProps } = useMobileMenuStore();
  const { header } = usePageContent();
  const headerContent = header as GetHeaderPageQuery;

  return (
    <div className="">
      <header className="relative z-20">
        <div className="font-bold">
          <div className="max-w-4xl mx-auto flex flex-row pt-4 justify-between items-center">
            {/* <Logo /> */}
            Logo
            <div className="flex justify-center sm:hidden">
              <button
                className="p-3"
                onClick={() => setMobileMenuProps(!mobileMenuProps.open)}
              >
                <MenuIcon className="w-9 h-9" />
              </button>
            </div>
            <nav className="space-x-6  items-center sm:flex hidden">
              {headerContent?.header?.data?.attributes?.Nav_Links?.map(
                (nav) => (
                  <NavItem key={nav.slug} title={nav.name} path={nav.slug} />
                ),
              )}
              <CategoriesPanel />
            </nav>
          </div>
          <div className="-mt-8 relative -z-10">
            <img src="/images/header.svg" alt="" width={5400} />
          </div>
        </div>
      </header>
      <MobileNav />

      {/* <header className="max-w-4xl  mx-auto flex justify-between items-center py-4 sm:py-3 px-4 md:px-0 text-white relative z-30"> */}
      {/*   <div className="flex font-light flex-row justify-center items-center"> */}
      {/*     <Logo /> */}
      {/*   </div> */}
      {/*   <div className="flex justify-center sm:hidden"> */}
      {/*     <button */}
      {/*       className="p-3" */}
      {/*       onClick={() => setMobileMenuProps(!mobileMenuProps.open)} */}
      {/*     > */}
      {/*       <MenuIcon className="w-9 h-9" /> */}
      {/*     </button> */}
      {/*   </div> */}

      {/*   <nav className="space-x-8  items-center sm:flex hidden"> */}
      {/*     {headerContent.header.data.attributes.Nav_Links.map((nav) => ( */}
      {/*       <NavItem key={nav.slug} title={nav.name} path={nav.slug} /> */}
      {/*     ))} */}
      {/*     <CategoriesPanel /> */}
      {/*   </nav> */}
      {/* </header> */}
      {/* <MobileNav /> */}
    </div>
  );
};

export default Header;
export interface CategoriesPanelProps {}
const CategoriesPanel: React.FC<CategoriesPanelProps> = () => {
  const [referenceElement, setReferenceElement] = React.useState();
  const [popperElement, setPopperElement] = React.useState<any>();
  const { styles, attributes } = usePopper(referenceElement, popperElement);

  const { settings } = usePageContent();
  return (
    <Popover className="">
      {() => (
        <>
          <Popover.Button
            as={Button}
            className="!p-0"
            size="large"
            ref={setReferenceElement}
          >
            <span className="">
              <span className="px-6 py-2">Categorieën</span>
            </span>
            <span className="p-3 border-l border-black bg-[#30A5C5] rounded-r-lg">
              <ChevronIcon className="w-3 h-3" />
            </span>
          </Popover.Button>
          <Transition
            as={React.Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              ref={setPopperElement}
              style={styles.popper}
              {...attributes.popper}
              className="-z-30 mt-[3.5rem] w-full"
            >
              <div className="max-w-4xl mx-auto bg-[#2A3FBA]/80 px-20 py-16 bg-clip-padding backdrop-blur-sm rounded-b-xl border border-black">
                <span className="text-white text-5xl font-black tbeste-text-shadow">
                  Categorieën
                </span>

                <div className="relative grid gap-3 grid-cols-5 mt-8">
                  {settings.setting.data.attributes.Categories_Data.map(
                    (item) => (
                      <MyLink href={item.slug} key={item.slug}>
                        <a
                          className={clsx(
                            "flex flex-col items-center justify-center bg-white shadow-2xl rounded-md space-y-2 p-1 relative overflow-hidden border-black border-l border-t border-r-[3px] border-b-[3px]",
                          )}
                        >
                          <img
                            src={
                              categoriesData.find(
                                (cat) => cat.name === item.name,
                              ).src
                            }
                            alt={item.name}
                            className="border border-black rounded-md"
                            width={220}
                            height={140}
                          />
                          <p className="text-black text-sm font-extrabold pb-1">
                            {item.name}
                          </p>
                        </a>
                      </MyLink>
                    ),
                  )}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export interface NavItemProps {
  title: string;
  path: string;
}
const NavItem: React.FC<NavItemProps> = ({ path, title }) => {
  return (
    <MyLink href={path}>
      <a
        className={clsx(
          "px-3 py-2 font-secondary font-extrabold text-base text-[#1B1B1F]  hover:text-gray-600 transition-all",
        )}
      >
        {title}
      </a>
    </MyLink>
  );
};
