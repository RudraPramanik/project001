import { queyClientApi } from "@adapters";

export type SubSubCategoriesType = {
  name: string;
  slug: string;
  depth_level: number;
};
export type SubCategoriesType = {
  name: string;
  slug: string;
  depth_level: number;
  subsub_categories: SubSubCategoriesType[];
};
export type CategoriesTypeBySlug = {
  name: string;
  slug: string;
  depth_level: number;
  subcategories: CategoriesTypeBySlug[];
};
export type CategoriesType = {
  name: string;
  slug: string;
  depth_level: number;
  sub_categories: SubCategoriesType[];
};
export type CategoriesResults = {
  categories: CategoriesType[];
};

export type CategoriesResultsBySlug = {
  categories: CategoriesTypeBySlug[];
};

export type ProductGroupCategoriesType = {
  name: string;
  slug: string;
  depth_level: number;
};
export type ProductGroupCategoriesResults = {
  id: number;
  name: string;
  slug: string;
  featured_image: string;
  categories: ProductGroupCategoriesType[];
};
export const getCategories = async () => {
  return await queyClientApi<CategoriesResults, any>("bestenu/categories");
};
export const getCategoryBySlug = async (slug: string) => {
  return await queyClientApi<CategoriesTypeBySlug, any>(
    `bestenu/category-by-slug/?slug=${encodeURIComponent(slug)}`,
  );
};
export const getProductGroupCategories = async (name: string) => {
  return await queyClientApi<ProductGroupCategoriesResults, any>(
    `bestenu/product-group/categories/${encodeURIComponent(name)}`,
  );
};
