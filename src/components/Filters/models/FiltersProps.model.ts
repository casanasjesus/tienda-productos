import type { Product } from "@models";
import type { Dispatch, SetStateAction } from "react";

export type FiltersProps = {
  products: Product[];
  setFilteredProducts: Dispatch<SetStateAction<Product[]>>;
};
