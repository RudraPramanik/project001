import { Footer, Header } from "@components";
import clsx from "clsx";
import React from "react";

export interface DefaultLayoutProps {
  hero: any;
  heroclassname: string;
  children: React.ReactNode;
}
const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  heroclassname,
  hero,
  children,
}) => {
  return (
    <div className="relative z-10">
      <div className={clsx(heroclassname, "relative")}>
        <Header />
        <div>{hero}</div>
      </div>
      {children}
      <div className="relative">
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
