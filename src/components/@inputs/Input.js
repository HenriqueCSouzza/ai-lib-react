import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  root: {
    fontSize: 12,
    "& input": {
      fontSize: 12,
    },
    "& input::placeholder": {
      fontSize: 12,
    },
  },
}));

export const InputField = (props) => {
  const classes = useStyles();
  return <TextField {...props} className={classes.root} />;
};

export const InputFieldCostumized = (props) => {
  const classes = useStyles();
  return <TextField {...props} className={classes.root} />;
};
