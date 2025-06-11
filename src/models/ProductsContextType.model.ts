import type { Dispatch, SetStateAction } from "react";
import type { Product } from "./Product.model";

export type ProductsContextType = {
  products: Product[];
  filteredProducts: Product[];
  setFilteredProducts: Dispatch<SetStateAction<Product[]>>;
  loading: boolean;
};
