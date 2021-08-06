import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import ErrorMessage from "./ErrorMessage";

const useStyles = makeStyles((theme) => ({
  root: {
    background: red[50],
    borderRadius: 4,
  },
}));

export default function ErrorsList({ errors, sticky = false }) {
  const classes = useStyles();
  useEffect(() => {
    if (typeof errors !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [errors]);

  if (typeof errors === "undefined") {
    return null;
  }

  return (
    <Box
      mb={2}
      py={1}
      pl={1}
      align="left"
      className={classes.root}
      style={{
        position: sticky && "sticky",
        top: sticky && 0,
      }}
    >
      {Object.keys(errors).map((k) => (
        <ErrorMessage key={k}>{errors[k]}</ErrorMessage>
      ))}
    </Box>
  );
}

ErrorsList.propTypes = {
  errors: PropTypes.any,
};
