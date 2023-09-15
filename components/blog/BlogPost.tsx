import { GetArticlesQuery } from "@adapters";
import { overridesObj } from "@components/shared";
import { MyLink } from "@design-system";
import { DefaultLayout } from "@layouts";
import { mySlugify, nanofy } from "@utils";
import Markdown from "markdown-to-jsx";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BlogAuthorCard } from ".";

const addLinksToHeadings = (source: string) => {
  if (typeof window !== "undefined") {
    const el = window.document.createElement("div");
    el.innerHTML = source;
    const h2s = el.getElementsByTagName("h2");
    for (let i = 0; i < h2s.length; i++) {
      h2s[i].setAttribute("id", mySlugify(h2s[i].textContent));
    }
    // return source;
    return el.outerHTML;
  } else {
    return source;
  }
};

const buildToc = (source: string): { title: string; id: string }[] => {
  if (typeof window !== "undefined") {
    const headings = [];
    const el = window.document.createElement("div");
    el.innerHTML = source;
    const h2s = el.getElementsByTagName("h2");
    for (let i = 0; i < h2s.length; i++) {
      if (h2s[i].textContent.length > 1) {
        headings.push({
          title: h2s[i].textContent,
          id: mySlugify(h2s[i].textContent),
        });
      }
    }
    return headings;
  } else {
    return null;
  }
};
export interface BlogPostProps {
  post: GetArticlesQuery["articles"]["data"][0];
  previewMode: boolean;
}
const BlogPost: React.FC<BlogPostProps> = ({ post, previewMode }) => {
  const [hash, setHash] = useState(null);
  const newContent = addLinksToHeadings(post.attributes.content);

  const toc = buildToc(newContent);
  const router = useRouter();
  React.useEffect(() => {
    setHash(router.asPath.split("#")[1]);
  }, [router.asPath]);

  return (
    <div className="relative">
      {previewMode && (
        <div className="w-full  bg-blue-500 text-white font-bold text-center py-2">
          <span>You are currently viewing in Preview Mode. </span>
          <a
            role="button"
            className="underline"
            onClick={() => exitPreviewMode()}
          >
            Turn Off Preview Mode
          </a>
        </div>
      )}
      <DefaultLayout hero={null} heroclassname={""}>
        <div className="bg-[#5AC7E5] 4xl:-mt-36 3xl:-mt-20 4xl:-mb-[700px] -mt-20 relative pb-96 -mb-80 ">
          <img
            src="/images/product-group/product-group-hero.svg"
            alt=""
            width={5600}
            className="hidden sm:block"
          />
          <img
            src="/images/product-group/hero-mob.svg"
            alt=""
            width={700}
            className="sm:hidden block"
          />
          <div className=" max-w-5xl sm:max-w-6xl mx-auto flex-col flex justify-center items-center ">
            <div className="hidden sm:block space-x-2 z-10 relative  text-white -mt-60 ">
              {[
                { link: "/", name: "Home" },
                { link: "/alle-categorieen/", name: "Alle Categorien" },
                {
                  link: `/${post.attributes.slug}`,
                  name: post.attributes.title,
                },
              ].map((acc, i) => (
                <React.Fragment key={acc.link}>
                  <MyLink href={acc.link}>
                    <a className="hover:underline capitalize text-lg sm:text-md">
                      {acc.name}
                    </a>
                  </MyLink>
                  {1 !== i && <span>•</span>}
                </React.Fragment>
              ))}
            </div>
            <div className=" max-w-2xl sm:max-w-3xl mx-auto space-y-4 sm:pt-20 pt-4 text-center text-white tbeste-text-shadow">
              <span className="font-bold shadow-word "> May. 2023 </span>
              <h1 className=" font-extrabold shadow-word ">
                {post.attributes.title}
              </h1>
            </div>
            <div className="grid sm:grid-cols-4 sm:pt-24 pt-10 gap-x-4 ">
              <div className=" sm:col-span-1 flex flex-col space-y-2 ">
                <div className="absolute">
                  <div className="relative -top-8 z-10 left-6 sm:block hidden">
                    <img src="/svgs/toc_ills.svg" alt="" width={200} />
                  </div>
                </div>
                <Toc>
                  {toc?.map((line) => (
                    <a
                      key={line.id}
                      href={`#${line.id}`}
                      className="sm:bg-white sm:text-black text-white font-bold sm:rounded-xl relative z-20 border-black sm:border-r-[4px] sm:hover:bg-[#FEA4D5] sm:hover:text-white transition-all sm:border-[2px]  px-4 py-2   sm:border-b-[4px] "
                    >
                      <p className="sm:text-sm  text-xs font-bold border-b-[1px] text-center sm:text-left border-gray-400 sm:border-none">
                        {line.title}
                      </p>
                    </a>
                  ))}
                </Toc>
              </div>
              <div className="sm:col-span-3">
                <div className="absolute">
                  <div className="relative -left-64 top-96 z-10 sm:block hidden">
                    <img src="/svgs/one_post_ills.svg" alt="" />
                  </div>
                </div>
                <div className="relative mo:mx-4">
                  <div className="absolute z-[1] top-[60px]  sm:h-[98.2%] right-0 left-[9px] bottom-0 bg-black w-full h-full rounded-3xl" />
                  <div className="relative z-10 sm:mx-0 bg-white py-8 px-6 sm:px-12 border-[3px] rounded-3xl border-black  z[-2]">
                    <Markdown
                      options={{
                        overrides: overridesObj,
                        createElement(type, props, children) {
                          return (
                            <React.Fragment key={nanofy()}>
                              {React.createElement(type, props, children)}
                            </React.Fragment>
                          );
                        },
                        forceBlock: true,
                      }}
                    >
                      {newContent}
                    </Markdown>
                  </div>{" "}
                </div>
                <BlogAuthorCard post={post} />
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default BlogPost;

export interface TocProps {
  children: React.ReactNode;
}
const Toc: React.FC<TocProps> = ({ children }) => {
  return <>{children}</>;
};

async function exitPreviewMode() {
  const response = await fetch("/api/exit-preview");
  if (response) {
    window.location.reload();
  }
}
