import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const TopBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div">
            ES | Español
          </Typography>
          <Typography variant="h6" component="div">
            Ahorra en el envío de tu pedido
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default TopBar;
