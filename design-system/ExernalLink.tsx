import React from "react";

export interface ExternalLinkProps {
  href: string;
  className: string;
  children: React.ReactNode;
}
const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  className,
  children,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noreferrer"
      className={className}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
