import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import spacingProps from "../../core/utils/spacing";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: 0,
    backgroundColor: "#fff",
    width: "100%",
    height: 60,
    zIndex: 1100,
    border: `1px solid ${theme.palette.primary.light}`,
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    height: "100%",
  },
}));

const FixedFooter = ({
  children,
  boxProps,
  newStyle = false,
  margin,
  ...props
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.root} style={{ margin }}>
      <Box
        {...spacingProps(props)}
        {...boxProps}
        className={clsx({ [classes.container]: newStyle ? undefined : true })}
      >
        {children}
      </Box>
    </Box>
  );
};

export default FixedFooter;
