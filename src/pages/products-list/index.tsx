import { useState, useEffect } from "react";
import { Filters } from "@components";
import { type Product } from "@models";
import "./styles.css";

const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      const apiUrl: string = "https://fakestoreapi.com/ProductsList";
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

  return (
    <div className="container">
      <Filters products={products} setFilteredProducts={setFilteredProducts} />

      {loading && <p className="message">Cargando productos...</p>}

      <div className="card-container">
        {!loading &&
          filteredProducts.length > 0 &&
          filteredProducts.map((producto: Product) => {
            return (
              <div key={producto?.id} className="card">
                <img
                  className="product-image"
                  src={producto?.image}
                  alt="imagen-producto"
                  title={producto?.title}
                />
                <span>{producto?.title}</span>
                <span>${producto?.price}</span>
              </div>
            );
          })}
      </div>

      {!loading && filteredProducts.length === 0 && (
        <p className="message">No hay productos para mostrar</p>
      )}
    </div>
  );
};

export default ProductsList;
