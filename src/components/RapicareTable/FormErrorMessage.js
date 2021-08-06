import PropTypes from "prop-types";
import React from "react";
import BodyText from "./BodyText";
export default function FormErrorMessage({ children }) {
  return (
    <BodyText type="error" mb={3} style={{ minHeight: 21 }}>
      {children}
    </BodyText>
  );
}

FormErrorMessage.propTypes = {
  children: PropTypes.any,
};
