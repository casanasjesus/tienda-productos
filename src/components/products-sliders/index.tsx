import type { ProductsSliderProps } from "./models";
import type { Product } from "@models";
import Slider from "react-slick";
import sliderSettings from "./config/sliderSettings";
import "./styles.css";
import { useProducts } from "@hooks";

const ProductsSlider = ({ title }: ProductsSliderProps) => {
  const { filteredProducts } = useProducts();

  return (
    <section className="section-container">
      <p className="section-title">{title}</p>
      <Slider className="card-container" {...sliderSettings}>
        {filteredProducts.map((producto: Product) => (
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
        ))}
      </Slider>
    </section>
  );
};

export default ProductsSlider;
