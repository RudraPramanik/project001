import React from "react";

export type FlattenedCatsType = {
  name: string;
  slug: string;
  level: number;
  link: string;
  sub?: any;
};
type CatSearchContextType = {
  flattenedCats: FlattenedCatsType[];
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchedCats: FlattenedCatsType;
  setSearchedCats: React.Dispatch<React.SetStateAction<FlattenedCatsType>>;
};
export const CatSearchContext = React.createContext<CatSearchContextType>(
  {} as CatSearchContextType
);

export const useCatSearch = () => React.useContext(CatSearchContext);

export interface CatSearchProps {
  flattenedCats: FlattenedCatsType[];
  searchedCats: FlattenedCatsType;
  setSearchedCats: React.Dispatch<React.SetStateAction<FlattenedCatsType>>;
}
const CatSearchProvider: React.FC<CatSearchProps> = ({
  flattenedCats,
  searchedCats,
  setSearchedCats,
  children,
}) => {
  const [searchTerm, setSearchTerm] = React.useState();
  return (
    <CatSearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        searchedCats,
        setSearchedCats,
        flattenedCats,
      }}
    >
      {children}
    </CatSearchContext.Provider>
  );
};

export default CatSearchProvider;
