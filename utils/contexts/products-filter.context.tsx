import { mapObject, removeDuplicates } from "@utils";
import {
  ArrayParam,
  DecodedValueMap,
  NumberParam,
  NumericObjectParam,
  SetQuery,
  useQueryParams,
  withDefault,
} from "next-query-params";
import React from "react";

export type CheckboxWithSearchFilterType = {
  name: string;
  kind: "Checkbox with search";
  values: {
    value: string;
    product_count: number;
  }[];
};
export type CheckboxFilterType = {
  name: string;
  kind: "Checkbox";
  values: {
    value: string;
    product_count: number;
  }[];
};
export type SliderFilterType = {
  name: string;
  kind: "Slider";
  min: number;
  max: number;
};
export type RadioFilterType = {
  name: string;
  kind: "Radio";
  values: {
    value: string;
    product_count: number;
  }[];
};
export type ColorFilterType = {
  name: string;
  kind: "Color";
  values: string[];
};
export type ReviewFilterType = {
  name: string;
  kind: "Review";
};
export type FilterType =
  | CheckboxWithSearchFilterType
  | CheckboxFilterType
  | SliderFilterType
  | ColorFilterType
  | ReviewFilterType
  | SliderFilterType
  | RadioFilterType;

export type ProductsFilterType = {
  min_price: number;
  max_price: number;
  product_count: number;
  filters: FilterType[];
};

type ProductsFilterContextType = {
  filters: ProductsFilterType;
  rawFilters: any[];
  handleRemoveFilters: () => void;
  handleRemoveOneFilter: (key: string, type: string) => void;
  query: DecodedValueMap<{}>;
  setQuery: SetQuery<{}>;
};
export const ProductsFilterContext =
  React.createContext<ProductsFilterContextType>(
    {} as ProductsFilterContextType,
  );

export const useProductsFilter = () => React.useContext(ProductsFilterContext);

export interface ProductsFilterProps {
  filters: ProductsFilterType;
}
const ProductsFilterProvider: React.FC<ProductsFilterProps> = ({
  filters,
  children,
}) => {
  const [query, setQuery] = useQueryParams({
    ...filters.filters.reduce(function (result, item) {
      if (
        item.kind === "Checkbox" ||
        item.kind === "Checkbox with search" ||
        item.kind === "Color" ||
        item.kind === "Radio"
      ) {
        result[item.name] = withDefault(ArrayParam, []);
        return result;
      } else if (item.kind === "Review") {
        result[item.name] = NumberParam;
        return result;
      } else if (item.kind === "Slider") {
        result[item.name] = withDefault(NumericObjectParam, {
          min: item.min,
          max: item.max,
        });
        return result;
      }
    }, {}),
  });

  const [myfilters, setMyFilters] = React.useState([]);
  React.useEffect(() => {
    mapObject(
      query,
      (item, key) =>
        Array.isArray(item) &&
        item.length > 0 &&
        setMyFilters((prev) => [...prev, { key, item }]),
    );
  }, [query]);

  const rawFilters = removeDuplicates(myfilters, "key");

  const handleRemoveFilters = () => {
    setMyFilters([]);
    setQuery({
      ...filters.filters.reduce(function (result, item) {
        if (
          item.kind === "Checkbox" ||
          item.kind === "Checkbox with search" ||
          item.kind === "Color" ||
          item.kind === "Radio"
        ) {
          result[item.name] = [];
          return result;
        } else if (item.kind === "Review") {
          result[item.name] = undefined;
          return result;
        } else if (item.kind === "Slider") {
          result[item.name] = {
            min: 0,
            max: 6100,
          };
          return result;
        }
      }, {}),
    });
  };

  const handleRemoveOneFilter = (key: string, type: string) => {
    setMyFilters((prev) => {
      return prev.map((item) => {
        return {
          ...item,
          item: item.item.filter((item: any) => item !== key),
        };
      });
    });
    setQuery((prev) => {
      return {
        ...prev,
        [type]: prev[type].filter((item: any) => item !== key),
      };
    });
  };
  return (
    <ProductsFilterContext.Provider
      value={{
        filters,
        rawFilters,
        handleRemoveFilters,
        handleRemoveOneFilter,
        query,
        setQuery,
      }}
    >
      {children}
    </ProductsFilterContext.Provider>
  );
};

export default ProductsFilterProvider;
