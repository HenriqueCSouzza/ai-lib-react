import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "./Box";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 1,
    height: 32,
    borderLeft: `1px solid ${theme.palette.grey[400]}`,
  },
}));

export default function TopbarDivider() {
  const classes = useStyles();
  return <Box className={classes.root} mx={2}></Box>;
}
