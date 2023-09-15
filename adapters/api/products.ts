import { queyClient, queyClientApi } from "@adapters";
import { UseQueryOptions, useQuery } from "react-query";

export type ProductGroupVariables = {
  query: {
    name: string;
  };
};
export type ProductGroup = {
  id: number;
  name: string;
  slug: string;
  plural: string;
  featured_image: string;
};
export type RelatedProductGroupsResults = {
  super_relevant_product_groups: ProductGroup[];
  less_relevant_product_groups: ProductGroup[];
};

export type ProductGroupsResults = {
  category_name: string;
  depth_level: number;
  product_groups: ProductGroup[];
};
export type AllProductGroupsResults = {
  productgroups: ProductGroup[];
};

export type Offer = {
  store: string;
  store_tagline: string;
  url: string;
  price: number;
};
export type Product = {
  product_name: string;
  rank: number;
  score: number;
  description: string;
  offers: Offer[];
  coolblue_price: number;
  bol_price: number;
  coolblue_url: string;
  pros: [];
  cons: [];
  main_image_url: string;
  media: string[];
};

export type ProductResults = {
  featured_image: string;
  product_group_name: string;
  plural: string;
  slug: string;
  product_count: string;
  products: Product[];
};
export type MyAllProductGroup = {
  item: {
    name: string;
    slug: string;
  };
  start: number;
  end: number;
  score: number;
  positions: any;
};

export const getAllProductGroups = async () => {
  return await queyClientApi<AllProductGroupsResults, any>(
    "bestenu/product-group",
  );
};

export const getProductGroupsByCategory = async (name: string) => {
  return await queyClientApi<ProductGroupsResults, ProductGroupVariables>(
    `bestenu/categories/product-group/${encodeURIComponent(name)}`,
  );
};

export const getProductsByProductGroupeName = async (
  variables: ProductGroupVariables,
) => {
  return await queyClientApi<ProductResults, ProductGroupVariables>(
    `bestenu/product-group/name`,
    variables,
  );
};

export const getRelatedProductGroups = async (name: string) => {
  return await queyClientApi<
    RelatedProductGroupsResults,
    ProductGroupVariables
  >(`bestenu/product-group/related/${encodeURIComponent(name)}`);
};

export const getProductGroupBySlug = async (slug: string) => {
  return await queyClientApi<ProductResults, any>(
    `bestenu/product-group-by-slug/?slug=${encodeURIComponent(slug)}`,
  );
};

export const useGetProductGroups = <
  TData = MyAllProductGroup[],
  TError = unknown,
>(
  variables: {
    q: string;
  },
  options?: UseQueryOptions<MyAllProductGroup[], TError, TData>,
) =>
  useQuery<MyAllProductGroup[], TError, TData>(
    ["product-groups", variables],
    queyClient<MyAllProductGroup[]>(
      `/api/products/product-groups/?q=${variables.q}`,
    ),
    options,
  );
