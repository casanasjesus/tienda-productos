import {
  type FC,
  type Dispatch,
  type SetStateAction,
  type ChangeEvent,
  useState,
  useEffect,
} from "react";
import { type Product } from "@models";
import "./styles.css";
import {
  FormControl,
  TextField,
  Select,
  MenuItem,
  type SelectChangeEvent,
} from "@mui/material";

type FiltersProps = {
  products: Product[];
  setFilteredProducts: Dispatch<SetStateAction<Product[]>>;
};

const Filters: FC<FiltersProps> = ({ products, setFilteredProducts }) => {
  const [searchProducts, setSearchProducts] = useState<string>("");
  const [productsOrder, setProductsOrder] = useState<string>("asc");

  useEffect(() => {
    let filtrados: Product[] = [...products];

    if (searchProducts.trim() !== "") {
      filtrados = filtrados.filter((producto) =>
        producto.title.toLowerCase().includes(searchProducts.toLowerCase())
      );
    }

    filtrados.sort((a, b) =>
      productsOrder === "asc" ? a.price - b.price : b.price - a.price
    );

    setFilteredProducts(filtrados);
  }, [searchProducts, productsOrder, products, setFilteredProducts]);

  const handleChangeInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setSearchProducts(value);
  };

  const handleChangeSelect = ({ target }: SelectChangeEvent) => {
    const { value } = target;
    setProductsOrder(value);
  };

  return (
    <FormControl className="filters-container">
      <TextField
        id="outlined-basic"
        variant="outlined"
        type="text"
        label="Buscar producto por nombre"
        value={searchProducts}
        onChange={handleChangeInput}
      />
      <Select value={productsOrder} onChange={handleChangeSelect}>
        <MenuItem value="asc">Menor a mayor precio</MenuItem>
        <MenuItem value="desc">Mayor a menor precio</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Filters;
