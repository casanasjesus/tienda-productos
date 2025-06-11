import { type Product } from "@models";
import { useProducts } from "@hooks";
import "./styles.css";

const ProductsList = () => {
  const { filteredProducts, loading } = useProducts();

  return (
    <div className="container">
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
