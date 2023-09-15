import { GetSiteSettingsQuery } from "@adapters";
import { getStrapiImage, hostname, MetaType, siteName } from "@utils";
import {
  ArticleJsonLd,
  FAQPageJsonLd,
  NextSeo,
  OrganizationJsonLd,
} from "next-seo";
import React from "react";

export interface SeoLayoutProps {
  noindex?: boolean;
  meta: MetaType;
  type: "blog" | "product" | "productGroup" | "other";
  settings: GetSiteSettingsQuery;
}
const SeoLayout: React.FC<SeoLayoutProps> = ({
  meta,
  children,
  type,
  settings,
  noindex = false,
}) => {
  return (
    <>
      <OrganizationJsonLd
        type="OnlineBusiness"
        id={hostname}
        logo={getStrapiImage(
          settings?.setting?.data?.attributes?.favicon?.data?.attributes?.url,
        )}
        legalName={siteName}
        name={siteName}
        address={{
          streetAddress: "Prins Hendrikkade 21e",
          addressLocality: "Amsterdam",
          addressRegion: "Noord-Holland",
          postalCode: "1012TL",
          addressCountry: "NL",
        }}
        contactPoint={[
          {
            //TODO: Add phone number
            telephone: "+1-401-555-1212",
            contactType: "customer service",
            areaServed: "NL",
            availableLanguage: ["Dutch"],
          },
        ]}
        url={hostname}
      />
      {type === "blog" ? (
        <>
          <ArticleJsonLd
            type="Blog"
            url={`${hostname}${meta?.path}`}
            title={meta?.title || ""}
            description={meta?.description || ""}
            images={meta?.images || undefined}
            datePublished={meta?.datePublished || ""}
            dateModified={meta?.dateModified || ""}
            authorName={meta?.author || ""}
          />
          <NextSeo
            noindex={noindex}
            title={meta?.title || ""}
            description={meta?.description || ""}
            canonical={`${hostname}${meta?.path}`}
            openGraph={meta?.openGraph || null}
          />
        </>
      ) : type === "productGroup" ? (
        <>
          {meta?.faq?.length > 0 && <FAQPageJsonLd mainEntity={meta?.faq} />}
          <ArticleJsonLd
            url={`${hostname}${meta?.path}/`}
            title={meta?.title || ""}
            description={meta?.description || ""}
            images={meta?.images || undefined}
            datePublished={meta?.datePublished || ""}
            dateModified={meta?.dateModified || ""}
            authorName={meta?.author || ""}
            publisherName={siteName}
            publisherLogo={getStrapiImage(
              settings?.setting?.data?.attributes?.favicon?.data?.attributes
                ?.url,
            )}
          />
          <NextSeo
            noindex={noindex}
            title={meta?.title || ""}
            description={meta?.description || ""}
            canonical={`${hostname}${meta?.path}`}
            openGraph={meta?.openGraph || null}
          />
        </>
      ) : (
        <NextSeo
          noindex={noindex}
          title={meta?.title || ""}
          description={meta?.description || ""}
          canonical={`${hostname}${meta?.path}`}
          openGraph={meta?.openGraph || null}
        />
      )}
      {children}
    </>
  );
};

export default SeoLayout;
