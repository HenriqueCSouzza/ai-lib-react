import PropTypes from "prop-types";
import React from "react";
import PageLoading from "./PageLoading";
import DelayedRender from "./DelayedRender";

function RouteLoading({ delay, text, style }) {
  return (
    <DelayedRender delay={1000}>
      <PageLoading />
    </DelayedRender>
  );
}

RouteLoading.propTypes = {
  delay: PropTypes.any,
  style: PropTypes.any,
  text: PropTypes.any,
};

export default RouteLoading;
