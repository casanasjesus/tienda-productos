import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: "3rem",
          backgroundColor: "black",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "3rem !important",
          paddingLeft: "16px",
          paddingRight: "16px",
        },
      },
    },
  },
});

export default theme;
