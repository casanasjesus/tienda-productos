import type { FC } from "react";
import { Box } from "@mui/material";
import type { LayoutProps } from "./models/Layout.model";

const Layout: FC<LayoutProps> = ({ children }) => {
  return <Box>{children}</Box>;
};

export default Layout;
