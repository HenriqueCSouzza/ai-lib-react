import React from "react";
import clsx from "clsx";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
  },
  top: {
    color: theme.palette.primary.light,
  },
  bottom: {
    color: theme.palette.primary.main,
    animationDuration: "550ms",
    position: "absolute",
    left: 0,
  },
}));

export default function PageLoading({ className, mt = 15, size = "medium" }) {
  const sizePropMapping = {
    small: 32,
    medium: 48,
    large: 64,
  };
  const classes = useStyles();
  return (
    <Box
      className={clsx(classes.root, className)}
      style={{ width: sizePropMapping[size], height: sizePropMapping[size] }}
      mt={mt}
    >
      <CircularProgress
        variant="determinate"
        value={100}
        className={classes.top}
        size={sizePropMapping[size]}
        thickness={4}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.bottom}
        size={sizePropMapping[size]}
        thickness={4}
      />
    </Box>
  );
}
