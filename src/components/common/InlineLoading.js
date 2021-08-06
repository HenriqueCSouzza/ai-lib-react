import React from "react";
import clsx from "clsx";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  top: {
    color: theme.palette.primary[500],
  },
  bottom: {
    color: theme.palette.primary[50],
    animationDuration: "550ms",
    position: "absolute",
    left: 0,
  },
}));

export default function InlineLoading({ className }) {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)}>
      <CircularProgress
        variant="determinate"
        value={100}
        className={classes.top}
        size={24}
        thickness={4}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.bottom}
        size={24}
        thickness={4}
      />
    </div>
  );
}
