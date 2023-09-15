/* eslint-disable jsx-a11y/alt-text */
import { getStrapiImage, isExternal, nanofy } from "@utils";
import { MarkdownToJSX } from "markdown-to-jsx";
import { ImageProps } from "next/image";
import React from "react";
import MyList from "./MyList";
import Embed from "react-tiny-oembed";
import { ExternalLink, MyImage } from "@design-system";
import { MyLink } from "@design-system";

export const Plus = ({ children, ...props }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <MyList {...props} type="plus">
        {children}
      </MyList>
    </div>
  );
};

export const Ol = ({ children }: { children: React.ReactNode }) => {
  return (
    <ol className="list-decimal ml-8 leading-9 text-md sm:text-base py-2 marker:text-[#E88741] list-outside marker:text-xl marker:font-secondary marker:font-black">
      {children}
    </ol>
  );
};
export const Ul = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className="list-disc ml-8 leading-8 text-md sm:text-base py-2 marker:text-[#E88741] list-outside marker:text-4xl">
      {children}
    </ul>
  );
};
export const Li = ({ children }: { children: React.ReactNode }) => {
  return <li className="">{children}</li>;
};

export const A = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  const isLinkExternal = isExternal(href);
  const className =
    "text-blue-500 underline transition-all hover:no-underline hover:text-blue-700";
  if (isLinkExternal) {
    return (
      <ExternalLink href={href} className={className}>
        {children}
      </ExternalLink>
    );
  } else {
    return (
      <MyLink href={href}>
        <a className={className}>{children}</a>
      </MyLink>
    );
  }
};

export const MyMdImage = ({
  src,
}: {
  children: React.ReactNode;
  src: string;
  className: string;
}) => {
  const path = /^https?:\/\//i;
  if (path.test(src)) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} className="rounded-lg mt-2" />;
  } else {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={getStrapiImage(src)} className="rounded-lg mt-2" />
    );
  }
};

export const Minus = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <MyList type="minus">{children}</MyList>
    </div>
  );
};

export const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return <p className="!leading-8 text-md sm:text-base pb-1">{children}</p>;
};

export const BgParagraph = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      key={nanofy()}
      className="text-[18px] pb-1 leading-8 text-purple sm:text-[18px]"
    >
      {children}
    </p>
  );
};
export const Blockquote = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-primary-default text-white relative rounded-2xl flex ml-8 items-center divide-x-[2px] my-8">
      <div className="-ml-12 p-4">
        <MyImage
          src="/static/images/svgs/blockquote1.svg"
          alt="blockquote"
          width={400}
          height={400}
        />
      </div>
      <blockquote className=" text-white text-left pl-4 leading-8">
        {children}
      </blockquote>
    </div>
  );
};

export const MdImage = ({
  url,
  name,
}: {
  props: ImageProps;
  url: string;
  name: string;
}) => {
  return (
    <div className="py-2">
      <MyImage
        src={getStrapiImage(url)}
        alt={name}
        height={250}
        className="rounded-md object-cover w-full"
        width={430}
      />
    </div>
  );
};

export const H1 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="py-2 mt-2 text-primary-900 font-extrabold text-3xl">
      {children}
    </h1>
  );
};

export const H2 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="py-2 mt-8 text-primary-900 font-extrabold text-2xl">
      {children}
    </h2>
  );
};

export const H3 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="py-2 mt-2 text-primary-900 font-extrabold text-xl">
      {children}
    </h3>
  );
};

export const H4 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h4 className="py-2 text-primary-900 font-extrabold text-lg">{children}</h4>
  );
};

export const H5 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h5 className="py-2 text-primary-900 font-extrabold text-md">{children}</h5>
  );
};

export const H6 = ({ children }: { children: React.ReactNode }) => {
  return <h6 className="py-2 text-primary-900 font-extrabold">{children}</h6>;
};

export const Iframe = ({ src }: { src: string }) => {
  return (
    <iframe src={src} className="mx-auto my-2 w-full h-[200px] sm:h-[400px]" />
  );
};

export const Oembed = ({ url }) => {
  return <Embed url={url}></Embed>;
};
export const CustomBox = ({ children }: { children: React.ReactNode }) => {
  const [type, setType] = React.useState<"info" | "quote" | "idea">(null);
  const childrenArray = React.Children.toArray(children) as any;

  React.useEffect(() => {
    const boxType = childrenArray[0].props.children.props.children[0];
    setType(boxType);
  }, [childrenArray]);

  if (type && type.toLowerCase() === "idea") {
    return (
      <div className="relative flex flex-col -mx-6" key={nanofy()}>
        <img
          src="/images/idea-top.svg"
          alt="idea"
          width={900}
          className="hidden sm:block"
        />
        <img
          src="/images/idea-mob-top.svg"
          alt="idea"
          width={700}
          className="sm:hidden block"
        />
        <div className="text-white flex flex-col sm:flex-row items-center text-left bg-[#F757B2]  text-[17px] py-3 pr-2 pl-4 leading-4">
          <img src="/images/!.svg" alt="idea" width={80} />
          <span className="pl-6">{childrenArray[1]}</span>
        </div>
        <img
          src="/images/idea-bot.svg"
          alt="idea"
          width={900}
          className="hidden sm:block"
        />
        <img
          src="/images/idea-mob-bot.svg"
          alt="idea"
          width={700}
          className="sm:hidden block"
        />
      </div>
    );
  } else if (type && type.toLowerCase() === "info") {
    return (
      <div className="relative flex flex-col -mx-6" key={nanofy()}>
        <img
          src="/images/info-top.svg"
          alt="info"
          width={900}
          className="hidden sm:block"
        />
        <img
          src="/images/info-mob-top.svg"
          alt="info"
          width={700}
          className="sm:hidden block"
        />
        <div className="text-white flex flex-col items-center sm:flex-row text-left bg-[#2194FF]  text-[17px] py-3 pr-2 pl-4 leading-4">
          <img
            src="/images/info.svg"
            alt="info"
            width={80}
            className="hidden sm:block"
          />
          <img
            src="/images/info-mob.svg"
            alt="info"
            width={160}
            className="sm:hidden block"
          />
          <span className="pl-6 sm:pt-0 pt-2">{childrenArray[1]}</span>
        </div>
        <img
          src="/images/info-bot.svg"
          alt="info"
          width={900}
          className="hidden sm:block"
        />
        <img
          src="/images/info-mob-bot.svg"
          alt="info"
          width={700}
          className="sm:hidden block"
        />
      </div>
    );
  } else if (type && type.toLowerCase() === "quote") {
    return (
      <div className="relative flex flex-col -mx-6" key={nanofy()}>
        <img
          src="/images/quote-top.svg"
          alt="quote"
          width={900}
          className="hidden sm:block"
        />
        <img
          src="/images/quote-mob-top.svg"
          alt="quote"
          width={700}
          className="sm:hidden block"
        />
        <div className="text-white flex flex-col items-center sm:flex-row text-left bg-[#C1ABFF]  text-[17px] py-3 pr-2 pl-4 leading-4">
          <img
            src="/images/quote.svg"
            alt="quote"
            width={80}
            className="hidden sm:block"
          />
          <img
            src="/images/quote-mob.svg"
            alt="quote"
            width={160}
            className="sm:hidden block"
          />
          <span className="pl-6 sm:pt-0 pt-2">{childrenArray[1]}</span>
        </div>
        <img
          src="/images/quote-bot.svg"
          alt="quote"
          width={900}
          className="hidden sm:block"
        />
        <img
          src="/images/quote-mob-bot.svg"
          alt="quote"
          width={700}
          className="sm:hidden block"
        />
      </div>
    );
  } else if (type && type.toLowerCase() === "plus") {
    return (
      <div className="flex flex-col my-8 -mx-6">
        <ul
          className="bg-[#DEF9DD]/50 overflow-hidden flex flex-col"
          key={nanofy()}
        >
          <div>
            <div className="py-8 px-6">
              <span className=" font-bold ">Plus</span>{" "}
              <span className="space-y-2">
                {childrenArray[1].props.children.props.children[0].props.children.props.children.map(
                  (child: any, i: any) => (
                    <Plus key={i}>{child}</Plus>
                  ),
                )}
              </span>
            </div>
          </div>
        </ul>
      </div>
    );
  } else if (type && type.toLowerCase() === "minus") {
    return (
      <div className="flex flex-col my-8 -mx-6">
        <ul
          className="bg-[#F9DDDD]/50 overflow-hidden flex flex-col"
          key={nanofy()}
        >
          <div>
            <div className="py-8 px-6">
              <span className=" font-bold ">Minus</span>{" "}
              <span className="space-y-2">
                {childrenArray[1].props.children.props.children[0].props.children.props.children.map(
                  (child: any, i: any) => (
                    <Minus key={i}>{child}</Minus>
                  ),
                )}
              </span>
            </div>
          </div>
        </ul>
      </div>
    );
  } else if (type && type.toLowerCase() === "title") {
    return (
      <>
        {childrenArray[1].props.children.props.children[0].props.children.props.children.map(
          (child: any, i: any) => (
            <h3
              key={i}
              className="bg-primary-default px-3 py-3 w-full text-white rounded-lg font-black mb-4 text-lg sm:text-2xl buying-guide"
            >
              {child}
            </h3>
          ),
        )}
      </>
    );
  } else {
    return <section key={nanofy()}>{children}</section>;
  }
};

export const overridesObj: MarkdownToJSX.Options["overrides"] = {
  p: Paragraph,
  blockquote: Blockquote,
  iframe: Iframe,
  oembed: Oembed,
  ul: Ul,
  ol: Ol,
  li: Li,
  a: A,
  section: CustomBox,
  plus: Plus,
  minus: Minus,
  img: MyMdImage,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
};
export const overridesObjPolicies: MarkdownToJSX.Options["overrides"] = {
  p: Paragraph,
  blockquote: Blockquote,
  ul: Ul,
  ol: Ol,
  li: Li,
  a: A,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
};

export const overridesObjBuyingGuide: MarkdownToJSX.Options["overrides"] = {
  p: BgParagraph,
  section: CustomBox,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  img: MyMdImage,
  ul: Ul,
  ol: Ol,
  li: Li,
  a: A,
  blockquote: Blockquote,
};
