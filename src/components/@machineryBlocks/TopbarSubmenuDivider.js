import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "./Box";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 1,
    borderTop: `1px solid ${theme.palette.grey[700]}`,
  },
}));

export default function TopbarSubmenuDivider() {
  const classes = useStyles();
  return <Box className={classes.root} my={1}></Box>;
}
