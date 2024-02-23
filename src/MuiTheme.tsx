import { createTheme } from "@mui/material";

export const MainAppTheme = createTheme({
  palette: {
    primary: {
      main: "#0f3e0f",
      light: "#eafaea",
      dark: "#0a290a",
    },
    secondary: {
      main: "#808080",
      light: "#f3f4f6",
      dark: "#0000008A",
    },
  },
  typography: {
    subtitle1: {
      fontFamily: "Protest Revolution, sans-serif",
      fontSize: "25px",
    },
    subtitle2: {
      fontFamily: "Dancing Script, cursive",
      fontSize: "20px",
      fontWeight: "bolder",
    },
    overline: {
      fontFamily: "Anta, sans-serif",
      lineHeight: 1.3,
      fontWeight: "bold",
    },
    fontFamily: "Verdana, Arial, Helvetica, sans-serif",
  },
});
