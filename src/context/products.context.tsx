/* eslint-disable react-refresh/only-export-components */
import type { ChildrenProps, Product, ProductsContextType } from "@models";
import { createContext, useState, useEffect, useMemo } from "react";

export const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

export const ProductsProvider = ({ children }: ChildrenProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      const apiUrl: string = "https://fakestoreapi.com/products";
      const response = await fetch(apiUrl);
      const products = await response.json();
      setProducts(products);
    } catch (error) {
      console.warn(`Ocurrió un error al obtener los productos: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const { Provider } = ProductsContext;

  const value = useMemo(
    () => ({
      products,
      filteredProducts,
      setFilteredProducts,
      loading,
    }),
    [products, filteredProducts, setFilteredProducts, loading]
  );

  return <Provider value={value}>{children}</Provider>;
};
