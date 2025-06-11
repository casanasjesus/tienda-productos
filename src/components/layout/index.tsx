import { TopBar, Header } from "@components";
import { Box } from "@mui/material";
import type { ChildrenProps } from "@models";

const Layout = ({ children }: ChildrenProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TopBar />
      <Header />
      {children}
    </Box>
  );
};

export default Layout;
