import { Filters } from "@components";
import { useProducts } from "@hooks";
import { Box } from "@mui/material";
import type { ChildrenProps } from "models";

const Layout = ({ children }: ChildrenProps) => {
  const { products, setFilteredProducts } = useProducts();

  return (
    <Box>
      <Filters products={products} setFilteredProducts={setFilteredProducts} />
      {children}
    </Box>
  );
};

export default Layout;
