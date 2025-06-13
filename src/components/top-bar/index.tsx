import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const TopBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div">
            Mi Aplicación
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default TopBar;
