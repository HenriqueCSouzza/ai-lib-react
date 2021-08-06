import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import NavLinkHelper from "./NavLinkHelper";

const useStyles = makeStyles((theme) => ({
  brand: {
    marginRight: theme.spacing(4),
    marginLeft: `-${theme.spacing(3)}px`,
    textDecoration: "none",
    color: theme.palette.common.white,
    "&:hover": {
      color: theme.palette.grey[100],
    },
  },
  image: {
    display: "inline-block",
    verticalAlign: "middle",
    marginRight: theme.spacing(1),
    width: 23.5,
  },
  title: {
    display: "none",
    textTransform: "lowercase",
    verticalAlign: "middle",
    fontWeight: "bold",
    [theme.breakpoints.up("sm")]: {
      display: "inline-block",
    },
  },
}));

export default function TopbarBrand({ brand, product, to }) {
  const classes = useStyles();
  return (
    <NavLinkHelper className={classes.brand} to={to}>
      <img src={brand} alt="Rapicare" className={classes.image} />
      <Typography
        variant="h6"
        noWrap
        component="span"
        className={classes.title}
      >
        {product}
      </Typography>
    </NavLinkHelper>
  );
}
