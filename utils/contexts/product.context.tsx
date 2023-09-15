import { ProductResults } from "@adapters/api";
import React from "react";

type ProductContextType = {
  product: ProductResults;
};
export const ProductContext = React.createContext<ProductContextType>(
  {} as ProductContextType,
);

export const useProduct = () => React.useContext(ProductContext);

export interface ProductProps {
  product: ProductResults;
}
const ProductProvider: React.FC<ProductProps> = ({ product, children }) => {
  return (
    <ProductContext.Provider
      value={{
        product,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
