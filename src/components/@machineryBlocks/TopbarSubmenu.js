import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Menu, MenuItem } from "@material-ui/core";
import NavLinkHelper from "./NavLinkHelper";
import TopbarSubmenuDivider from "./TopbarSubmenuDivider";

const useStyles = makeStyles((theme) => ({
  paper: {
    minWidth: 180,
    overflow: "visible",
    background: theme.palette.secondary.dark,
    marginTop: theme.spacing(5),
    borderRadius: 0,
  },
  menuItem: {
    color: theme.palette.secondary.contrastText,
    fontSize: theme.typography.caption.fontSize,
    padding: `${theme.spacing(1.5)}px ${theme.spacing(2)}px`,
    "&:hover": {
      background: theme.palette.secondary.main,
    },
  },
}));

export default function TopbarSubmenu({ items, ...props }) {
  const classes = useStyles();
  return (
    <Menu
      getContentAnchorEl={null}
      variant="menu"
      classes={{
        paper: classes.paper,
      }}
      autoFocus={false}
      elevation={0}
      {...props}
    >
      {items.map((item, i) =>
        item === "divider" ? (
          <TopbarSubmenuDivider key={i} />
        ) : (
          <MenuItem
            key={i}
            component={NavLinkHelper}
            to={item.to}
            dense
            className={classes.menuItem}
            onClick={props.onClose}
          >
            {item.label}
          </MenuItem>
        )
      )}
    </Menu>
  );
}
