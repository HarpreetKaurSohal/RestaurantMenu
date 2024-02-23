import * as m from "@mui/material";
import { MenuItem, PageHeader, PageSubtitle } from "../../GlobalFileContainer";
import { menuObject } from "./menuObject";

const Menu = () => {
  return (
    <m.Box>
      <PageHeader title="Menu" />
      <PageSubtitle title={"OurDelicacies"} />
      <m.Grid container spacing={2}>
        {menuObject.map((menuItem) => (
          <m.Grid key={menuItem.category} item xs={6}>
            <MenuItem title={menuItem.category} itemKey={menuItem.key} />
          </m.Grid>
        ))}
      </m.Grid>
    </m.Box>
  );
};

export default Menu;
