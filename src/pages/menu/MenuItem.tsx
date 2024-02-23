import React, { useContext } from "react";
import * as m from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MenuContext } from "../../utils/context/MenuContext";

interface MenuItemProps {
  title: string;
  itemKey: string;
}

const MenuItem = ({ title, itemKey }: MenuItemProps) => {
  const navigate = useNavigate();
  const { setMenu } = useContext(MenuContext);

  const handleCategoryClick = (title: string) => {
    setMenu({
      category: title,
    });
    navigate("/menu");
  };

  return (
    <m.Card
      sx={{
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <m.CardMedia
        component="img"
        height="100"
        width="120"
        sx={{
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.2)",
          },
        }}
        image={`${process.env.PUBLIC_URL + `restaurant_app/${itemKey}`}`}
        alt={itemKey}
        onClick={() => handleCategoryClick(title)}
      />
      <m.CardContent
        sx={{
          position: "absolute",
          padding: 0,
          width: "100%",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: "40%",
          paddingBottom: "0px !important",
          opacity: "85%",
        }}
      >
        <m.Typography variant="subtitle2">{title}</m.Typography>
      </m.CardContent>
    </m.Card>
  );
};

export default MenuItem;
