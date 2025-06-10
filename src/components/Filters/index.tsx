import {
  type FC,
  type Dispatch,
  type SetStateAction,
  type ChangeEvent,
  useState,
  useEffect,
} from "react";
import type { Producto } from "../../pages/ListadoProductos/models/Producto.model";
import "./styles.css";
import {
  FormControl,
  TextField,
  Select,
  MenuItem,
  type SelectChangeEvent,
} from "@mui/material";

type FiltersProps = {
  productos: Producto[];
  setProductosFiltrados: Dispatch<SetStateAction<Producto[]>>;
};

const Filters: FC<FiltersProps> = ({ productos, setProductosFiltrados }) => {
  const [buscarProductos, setBuscarProductos] = useState<string>("");
  const [ordenProducto, setOrdenProducto] = useState<string>("asc");

  useEffect(() => {
    let filtrados: Producto[] = [...productos];

    if (buscarProductos.trim() !== "") {
      filtrados = filtrados.filter((producto) =>
        producto.title.toLowerCase().includes(buscarProductos.toLowerCase())
      );
    }

    filtrados.sort((a, b) =>
      ordenProducto === "asc" ? a.price - b.price : b.price - a.price
    );

    setProductosFiltrados(filtrados);
  }, [buscarProductos, ordenProducto, productos, setProductosFiltrados]);

  const handleChangeInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setBuscarProductos(value);
  };

  const handleChangeSelect = ({ target }: SelectChangeEvent) => {
    const { value } = target;
    setOrdenProducto(value);
  };

  return (
    <FormControl className="filters-container">
      <TextField
        id="outlined-basic"
        variant="outlined"
        type="text"
        label="Buscar producto por nombre"
        value={buscarProductos}
        onChange={handleChangeInput}
      />
      <Select value={ordenProducto} onChange={handleChangeSelect}>
        <MenuItem value="asc">Menor a mayor precio</MenuItem>
        <MenuItem value="desc">Mayor a menor precio</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Filters;
