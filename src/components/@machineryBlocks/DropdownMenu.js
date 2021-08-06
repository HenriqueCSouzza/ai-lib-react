import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Menu, MenuItem } from "@material-ui/core";
import NavLinkHelper from "./NavLinkHelper";

const useStyles = makeStyles((theme) => ({
  paper: {
    overflow: "visible",
    marginTop: theme.spacing(1),
    "&:before": {
      width: 0,
      height: 0,
      content: '""',
      borderLeft: `${theme.spacing(2)}px solid transparent`,
      borderRight: `${theme.spacing(2)}px solid transparent`,
      borderBottom: `${theme.spacing(2)}px solid ${theme.palette.common.white}`,
      position: "absolute",
      top: `-${theme.spacing(1)}px`,
    },
    "&.segment-right:before": {
      right: theme.spacing(1),
    },
    "&.segment-center:before": {
      left: "50%",
      transform: "translate(-50%, 0)",
    },
  },
}));

export default function DropdownMenu({ items, segmentPosition, ...props }) {
  const classes = useStyles();
  return (
    <Menu
      getContentAnchorEl={null}
      variant="menu"
      classes={{
        paper: clsx(
          classes.paper,
          segmentPosition && `segment-${segmentPosition}`
        ),
      }}
      autoFocus={false}
      elevation={3}
      {...props}
    >
      {items.map((item, i) =>
        item === "divider" ? (
          <Divider key={`${i}-${i}`} />
        ) : (
          <MenuItem
            key={i}
            component={NavLinkHelper}
            to={item.to}
            onClick={props.onClose}
            dense
          >
            {item.label}
          </MenuItem>
        )
      )}
    </Menu>
  );
}
