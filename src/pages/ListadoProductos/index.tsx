import { useState, useEffect } from "react";
import { Filters } from "@components";
import { type Producto } from "./models/Producto.model";
import "./styles.css";

const ListadoProductos = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [productosFiltrados, setProductosFiltrados] = useState<Producto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getProductos = async () => {
    try {
      setLoading(true);
      const apiUrl: string = "https://fakestoreapi.com/products";
      const response = await fetch(apiUrl);
      const productos = await response.json();
      setProductos(productos);
    } catch (error) {
      console.warn(`Ocurrió un error al obtener los productos: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div className="container">
      <Filters
        productos={productos}
        setProductosFiltrados={setProductosFiltrados}
      />

      {loading && <p className="message">Cargando productos...</p>}

      <div className="card-container">
        {!loading &&
          productosFiltrados.length > 0 &&
          productosFiltrados.map((producto: Producto) => {
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

      {!loading && productosFiltrados.length === 0 && (
        <p className="message">No hay productos para mostrar</p>
      )}
    </div>
  );
};

export default ListadoProductos;
