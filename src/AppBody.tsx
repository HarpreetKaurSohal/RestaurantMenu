import React, { ReactNode } from "react";
import * as m from "@mui/material";
import { InfoFooter } from "./GlobalFileContainer";

interface AppBodyProps {
  children: ReactNode;
}

const AppBody = ({ children }: AppBodyProps) => {
  const theme = m.useTheme();
  return (
    <>
      {children}
      <m.Divider
        sx={{ height: "2px", backgroundColor: theme.palette.secondary.main }}
      />
      <InfoFooter />
    </>
  );
};

export default AppBody;
