import React from "react";
import * as m from "@mui/material";

interface PageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  const theme = m.useTheme();
  const commonStyle = {
    backgroundColor: theme.palette.primary.light,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "sticky",
    top: "56px",
    zIndex: 1000,
  };

  return (
    <m.Box width={"100%"} sx={commonStyle}>
      <m.Typography>{title}</m.Typography>
    </m.Box>
  );
};

export default PageHeader;
