import { OpenGraph, Question } from "next-seo/lib/types";

export type ObjectFromList<T extends ReadonlyArray<string>, V = string> = {
  [K in T extends ReadonlyArray<infer U> ? U : never]: V;
};
export type IPageType = "category" | "productGroup" | "article";
export type FAQType = {
  questionName?: string;
  acceptedAnswerText?: string;
};
export type AccordionType = {
  name: string;
  link: string;
};
export type MetaType = {
  description: string;
  title: string;
  images?: string[];
  author?: string;
  dateModified?: string;
  datePublished?: string;
  faq?: Question[];
  path: string;
  name?: string;
  brand?: string;
  manufacturerName?: string;
  ratingValue?: number;
  reviewCount?: number;
  openGraph?: OpenGraph;
  offers?: {
    price: string;
    priceCurrency: string;
    url: string;
    seller: {
      name: string;
    };
  }[];
};
export type SpinTaxesCompType = {
  c_d: string;
  c_p: string;
};
export type SpinTaxesType = {
  r_1_t: string;
  r_1_d: string;
  r_2_t: string;
  r_2_d: string;
  r_3_t: string;
  r_3_d: string;
  pg_d: string;
  st5: string;
  st6: string;
  st7: string;
  st8: string;
  st9: string;
};
