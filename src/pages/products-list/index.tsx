import { useProducts } from "@hooks";
import ProductsSlider from "@components/products-sliders";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

const ProductsList = () => {
  const { loading, filteredProducts } = useProducts();

  return (
    <div className="container">
      {loading && <p className="message">Cargando productos...</p>}

      {!loading && filteredProducts.length > 0 && (
        <ProductsSlider title="Todos nuestros productos" />
      )}

      {!loading && filteredProducts.length === 0 && (
        <p className="message">No hay productos para mostrar</p>
      )}
    </div>
  );
};

export default ProductsList;
