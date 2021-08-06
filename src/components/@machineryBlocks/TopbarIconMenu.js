import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import NavLinkHelper from "./NavLinkHelper";
import Link from "./atoms/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  icon: {
    color: theme.palette.grey[500],
    padding: theme.spacing(1),
    borderRadius: 0,
    "&:hover": {
      background: theme.palette.secondary.dark,
      color: theme.palette.common.white,
    },
  },
}));

export default function TopbarIconMenu({ items }) {
  const classes = useStyles();
  const menu = items.map((item, i) => (
    <IconButton
      key={i}
      className={classes.icon}
      component={item.to ? NavLinkHelper : Link}
      aria-label={item.label}
      to={item.to}
      href={item.href}
      target={item.target}
    >
      {item.icon}
    </IconButton>
  ));
  return <div className={classes.root}>{menu}</div>;
}
