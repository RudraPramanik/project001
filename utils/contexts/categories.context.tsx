import { CategoriesType } from "@adapters/api";
import React from "react";

type CatsContextType = {
  cats: CategoriesType[];
};
export const CatsContext = React.createContext<CatsContextType>(
  {} as CatsContextType,
);

export const useCats = () => React.useContext(CatsContext);

export interface CatsProps {
  cats: CategoriesType[];
}
const CatsProvider: React.FC<CatsProps> = ({ cats, children }) => {
  return (
    <CatsContext.Provider value={{ cats }}>{children}</CatsContext.Provider>
  );
};

export default CatsProvider;
