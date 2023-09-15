import { GetErrorPageQuery, GetSiteSettingsQuery } from "@adapters";
import { AccordionType } from "@utils/types";
import React from "react";

type PageContentContextType = {
  content?: any;
  header: any;
  footer: any;
  settings: GetSiteSettingsQuery;
  errorPage: GetErrorPageQuery;
  accordions?: AccordionType[];
};
export const PageContentContext = React.createContext<PageContentContextType>(
  {} as PageContentContextType,
);

export const usePageContent = () => React.useContext(PageContentContext);

export interface PageContentProps {
  content?: any;
  header: any;
  footer: any;
  settings: GetSiteSettingsQuery;
  errorPage: GetErrorPageQuery;
  accordions?: AccordionType[];
}
const PageContentProvider: React.FC<PageContentProps> = ({
  content,
  footer,
  header,
  settings,
  errorPage,
  accordions,
  children,
}) => {
  return (
    <PageContentContext.Provider
      value={{
        content,
        header,
        footer,
        settings,
        errorPage,
        accordions,
      }}
    >
      {children}
    </PageContentContext.Provider>
  );
};

export default PageContentProvider;
