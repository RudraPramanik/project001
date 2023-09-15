import Link, { LinkProps } from "next/link";
import React from "react";

export interface MyLinkProps extends React.PropsWithChildren<LinkProps> {}
const MyLink: React.FC<MyLinkProps> = ({ children, ...rest }) => {
  let path = rest.href[0] === "/" ? rest.href : `/${rest.href}`;
  path = path[path.toString().length - 1] === "/" ? path : `${path}/`;

  return (
    <Link {...rest} href={path} prefetch={false}>
      {children}
    </Link>
  );
};

export default MyLink;
