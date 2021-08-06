import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuList from "@material-ui/core/MenuList";
import TopbarMenuItem from "./TopbarMenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginRight: "auto",
    padding: 0,
  },
  positionRight: {
    marginLeft: "auto",
    marginRight: "0",
  },
}));

export default function TopbarMenu({ items, position }) {
  const classes = useStyles();
  const links = items.map((item, i) => {
    const props =
      item.items?.length > 0
        ? { items: item.items }
        : {
            to: item.to,
            exact: item.exact,
            icon: item.icon,
          };
    return (
      <TopbarMenuItem key={i} iconPosition={item.iconPosition} {...props}>
        {item.label && item.label}
      </TopbarMenuItem>
    );
  });
  return (
    <MenuList
      component="nav"
      className={
        position === "right"
          ? clsx(classes.root, classes.positionRight)
          : classes.root
      }
    >
      {links}
    </MenuList>
  );
}
