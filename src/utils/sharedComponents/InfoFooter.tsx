import React, { CSSProperties } from "react";
import { NavLink } from "react-router-dom";
import * as m from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";

const InfoFooter = () => {
  const theme = m.useTheme();

  const navStyle: CSSProperties = {
    textDecoration: "none",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "8px",
    color: theme.palette.secondary.dark,
  };

  return (
    <m.Grid container sx={{ backgroundColor: "#f9e8e5" }}>
      <m.Grid item sx={{ padding: "5px" }} xs={5}>
        <img
          src={`${process.env.PUBLIC_URL + "/J&H.png"}`}
          height={"100%"}
          width={"100%"}
        />
      </m.Grid>
      <m.Grid item xs={7} sx={{ padding: "15px" }}>
        <m.Grid
          container
          display={"flex"}
          direction={"column"}
          alignItems={"baseline"}
        >
          <m.Typography variant="caption">Join us on,</m.Typography>
          <NavLink
            target="_blank"
            to={"https://www.instagram.com/preet_kaur308?igsh=bTd2OXl4N2diajU="}
            style={navStyle}
          >
            <InstagramIcon />{" "}
            <m.Typography variant="body2">Instagram</m.Typography>
          </NavLink>
          <NavLink
            target="_blank"
            to={
              "https://www.facebook.com/profile.php?id=100009246440377&mibextid=ZbWKwL"
            }
            style={navStyle}
          >
            <FacebookIcon />{" "}
            <m.Typography variant="body2">Facebook</m.Typography>
          </NavLink>
          <NavLink
            target="_blank"
            to={"https://wa.me/qr/DF3QMDQJOA5TH1"}
            style={navStyle}
          >
            <WhatsAppIcon />{" "}
            <m.Typography variant="body2">WhatsApp</m.Typography>
          </NavLink>
        </m.Grid>
      </m.Grid>
    </m.Grid>
  );
};

export default InfoFooter;
