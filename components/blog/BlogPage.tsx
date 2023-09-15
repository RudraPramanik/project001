import { GetArticlesQuery, GetBlogPageQuery } from "@adapters";
import { BigArticles } from "@components";
import { MyImage, MyLink } from "@design-system";
import { usePageContent } from "@utils/contexts/page-content.context";
import { useKeenSlider } from "keen-slider/react";
import React from "react";

export interface BlogPageProps {
  posts: GetArticlesQuery;
}
const BlogPage: React.FC<BlogPageProps> = ({ posts }) => {
  const { content } = usePageContent();
  const blogPageontent = content as GetBlogPageQuery;

  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 620px)": {
        slides: { perView: 3, spacing: 1 },
      },
    },
    loop: true,
    slides: { perView: 1 },
  });
  return (
    <div className=" -z-50 bg-[#F5FCFF] py-72 -my-72 4xl:py-[500px] 3xl:py-[450px] 3xl:-my-[600px]  4xl:-my-[700px] relative ">
      <div className="max-w-4xl sm:mx-auto -mt-16 mb-14 sm:mt-12 mx-4 ">
        <div className="flex justify-center sm:justify-start items-center space-x-4 ">
          <img src="/svgs/start-icon.svg" alt="top-left-ills" width={63} />
          <h3 className=" font-black shadow-word ">
            {blogPageontent.blogPage.data.attributes.popular_posts_text}
          </h3>
        </div>
        {/* card mobile */}
        <div>
          <div className="block sm:hidden">
            <div ref={ref} className="keen-slider -mt-20 block sm:hidden">
              {posts.articles.data.slice(0, 3).map((post, i) => (
                <div
                  key={post.id}
                  className={`keen-slider__slide ar-number-slide${
                    i + 1
                  } h-[391px]`}
                >
                  <div
                    className=" border-2 border-black rounded-xl "
                    style={{
                      boxShadow: "6px 6px 4px 2px rgba(0,0,0,0.87)",
                    }}
                  >
                    <div className="flex px-4 py-4 space-x-3 ">
                      <MyImage
                        src={
                          post.attributes.author.data.attributes.picture.data
                            .attributes.url
                        }
                        alt="top-left-ills"
                        width={75}
                        height={75}
                      />

                      <p className="">
                        <a>{post.attributes.title}</a>
                      </p>
                    </div>
                  </div>
                  {/* <BlogAuthorCard key={post.id} post={post} /> */}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden grid-cols-3  items-center gap-x-4 sm:grid mt-4">
          {posts.articles.data.slice(0, 3).map((post) => (
            <MyLink href={post.attributes.slug} key={post.id}>
              <a className="border-2 shadow-box border-black rounded-xl ">
                <div className="flex items-center justify-center py-2 px-3 space-x-3 ">
                  <div className=" w-16 h-16 flex ">
                    <MyImage
                      src={post.attributes.image.data.attributes.url}
                      alt="top-left-ills"
                      width={64}
                      height={64}
                      className="rounded w-11/12 "
                    />
                  </div>
                  <p className="font-bold">{post.attributes.title}</p>
                </div>
              </a>
            </MyLink>
          ))}
        </div>

        <div className="border-t border-slate-800 -mt-0 sm:mt-16 ">
          <div className="flex">
            <div className="flex items-center space-x-4 py-8 ">
              <img src="/svgs/plus.svg" alt="icon-plus" width={63} />
              <h3 className=" font-black  ">
                {blogPageontent.blogPage.data.attributes.new_posts_text}{" "}
              </h3>
            </div>
          </div>
        </div>
        <div>
          <BigArticles posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
