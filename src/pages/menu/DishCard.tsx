import React, { useState } from "react";
import * as m from "@mui/material";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";

interface DishCardProps {
  name: string;
  price: number;
  desc: string;
  pic: string;
}

const BootstrapTooltip = m.styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
    maxWidth: 100,
  },
}));

const DishCard = ({ name, price, desc, pic }: DishCardProps) => {
  const [openDescBox, setOpenDescBox] = useState(false);

  return (
    <m.Card sx={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)" }}>
      <m.Box sx={{ position: "relative" }}>
        <m.ClickAwayListener onClickAway={() => setOpenDescBox(false)}>
          <div>
            <BootstrapTooltip
              slotProps={{
                popper: {
                  modifiers: [
                    {
                      name: "offset",
                      options: {
                        offset: [0, -14],
                      },
                    },
                  ],
                },
              }}
              onClose={() => setOpenDescBox(false)}
              open={openDescBox}
              placement="bottom"
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title={desc}
            >
              <m.IconButton
                sx={{
                  position: "absolute",
                  zIndex: 1,
                  color: "white",
                  right: 0,
                }}
                onClick={() => setOpenDescBox(true)}
              >
                <InfoIcon />
              </m.IconButton>
            </BootstrapTooltip>
          </div>
        </m.ClickAwayListener>
        <m.CardMedia
          component="img"
          height="100"
          width="120"
          image={`${process.env.PUBLIC_URL + `restaurant_app/${pic}`}`}
          alt={pic}
        />
      </m.Box>
      <m.CardContent sx={{ padding: "10px !important" }}>
        <m.Stack
          spacing={1}
          divider={<m.Divider orientation="vertical" flexItem />}
          direction={"row"}
        >
          <m.Typography variant="overline">{name}</m.Typography>
          <m.Typography variant="overline">{`Rs.${price}`}</m.Typography>
        </m.Stack>
      </m.CardContent>
    </m.Card>
  );
};

export default DishCard;
