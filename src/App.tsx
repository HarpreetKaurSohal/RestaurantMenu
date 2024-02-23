import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as m from "@mui/material";
import { ThemeProvider } from "@mui/material";
import {
  AppBody,
  Home,
  Menu,
  NavBar,
  RouteToMenu,
} from "./GlobalFileContainer";
import { MainAppTheme } from "./MuiTheme";
import MenuProvider from "./utils/context/MenuContext";

function App() {
  const theme = MainAppTheme;

  return (
    <>
      <ThemeProvider theme={theme}>
        <MenuProvider>
          <Router>
            <NavBar />
            <AppBody>
              <m.Box
                sx={{
                  padding: "0 10% 10px",
                  backgroundColor: theme.palette.secondary.light,
                }}
              >
                <Routes>
                  <Route path="/*" element={<Menu />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/menu" element={<RouteToMenu />} />
                </Routes>
              </m.Box>
            </AppBody>
          </Router>
        </MenuProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
