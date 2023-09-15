import { GetBuyingGuidesQuery } from "@adapters";
import { ProductResults, RelatedProductGroupsResults } from "@adapters/api";
import {
  BuyingGuides,
  ProductGroupFooter,
  ProductGroupHero,
  ProductListing,
  SimilarItems,
} from "@components/product-group";
import { DefaultLayout } from "@layouts";
import React from "react";

export interface ProductGroupSlugPageProps {
  productGroup: ProductResults;
  relatedPrdGroups: RelatedProductGroupsResults;
  buyingGuides: GetBuyingGuidesQuery["buyingGuides"]["data"][number];
}
const ProductGroupSlugPage: React.FC<ProductGroupSlugPageProps> = ({
  productGroup,
  relatedPrdGroups,
  buyingGuides,
}) => {
  return (
    <DefaultLayout hero={null} heroclassname={""}>
      <ProductGroupHero productGroup={productGroup} />
      <ProductListing productGroup={productGroup} />
      <BuyingGuides buyingGuides={buyingGuides} />
      <SimilarItems productGroup={productGroup} />
      <ProductGroupFooter relatedPrdGroups={relatedPrdGroups} />
    </DefaultLayout>
  );
};

export default ProductGroupSlugPage;
