import { hostname } from "@utils";
import { DefaultSeoProps } from "next-seo";

export const seoConfig: DefaultSeoProps = {
  title: "tbeste",
  titleTemplate: "%s",
  description:
    "Op tbeste.nl start je intergalactische reis naar een het juiste product. Wij vergemakkelijken je zoektocht naar het aanschaffen van een nieuw product.",
  canonical: hostname,
  openGraph: {
    type: "website",
    locale: "nl",
    url: hostname,
    site_name: "tbeste",
    title: "tbeste",
    images: [
      {
        url: `${hostname}/images/og-image.png`,
        alt: "tbeste",
      },
    ],
    description:
      "Op tbeste.nl start je intergalactische reis naar een het juiste product. Wij vergemakkelijken je zoektocht naar het aanschaffen van een nieuw product.",
  },
  twitter: {
    handle: "@tbeste.nl",
    site: "tbeste.nl",
    cardType: "summary_large_image",
  },
};
