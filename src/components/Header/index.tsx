import { Filters } from "@components";
import { useProducts } from "@hooks";

const Header = () => {
  const { products, setFilteredProducts } = useProducts();

  return (
    <Filters products={products} setFilteredProducts={setFilteredProducts} />
  );
};

export default Header;
