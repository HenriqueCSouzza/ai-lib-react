import React from "react";
import clsx from "clsx";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    minHeight: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    color: theme.palette.primary[50],
    animationDuration: "550ms",
  },
}));
export default function InlineLoading({ className, children, loading }) {
  const classes = useStyles();

  if (loading) {
    return (
      <Box className={clsx(classes.root, className)}>
        <CircularProgress
          variant="indeterminate"
          disableShrink
          className={classes.bottom}
          size={24}
          thickness={4}
        />
      </Box>
    );
  }
  return children;
}
