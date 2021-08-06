import PropTypes from "prop-types";
import React from "react";
import { Typography } from "@material-ui/core/";
import red from "@material-ui/core/colors/red";

function ErrorMessage({ children }) {
  return (
    <Typography variant="body1" style={{ color: red[300] }}>
      {children}
    </Typography>
  );
}

ErrorMessage.propTypes = {
  children: PropTypes.any,
};

export default ErrorMessage;
