import React from "react";
import * as m from "@mui/material";

interface PageSubtitleProps {
  title: string;
}

const PageSubtitle = ({ title }: PageSubtitleProps) => {
  return <m.Typography variant="subtitle1">{title}</m.Typography>;
};

export default PageSubtitle;
