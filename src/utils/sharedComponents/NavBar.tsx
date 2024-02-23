import * as React from "react";
import * as m from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { findPageState } from "../states";

function NavBar() {
  const navigate = useNavigate();
  const isMenuPage = findPageState() === "menu";
  const goToURL = isMenuPage ? "/home" : "/";

  const handleNavigation = () => {
    navigate(goToURL);
  };

  return (
    <m.AppBar position="sticky" sx={{ top: 0, zIndex: 1000 }}>
      <m.Container maxWidth="xl">
        <m.Toolbar disableGutters>
          <m.Avatar
            src={`${process.env.PUBLIC_URL + "/J&H.png"}`}
            sx={{ display: { xs: "flex" }, mr: 1 }}
          />
          <m.Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            J&H
          </m.Typography>

          <m.Box sx={{ flexGrow: 0 }} onClick={handleNavigation}>
            {isMenuPage ? <HomeIcon /> : <MenuBookIcon />}
          </m.Box>
        </m.Toolbar>
      </m.Container>
    </m.AppBar>
  );
}
export default NavBar;
