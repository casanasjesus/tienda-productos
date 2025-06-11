import { ProductsContext } from "@context";
import type { ProductsContextType } from "@models";
import { useContext } from "react";

const useProducts = (): ProductsContextType => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error("useProducts debe usarse dentro de un <ProductsProvider>");
  }

  return context;
};

export default useProducts;
