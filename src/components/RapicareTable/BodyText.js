import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import React from "react";
import Typography from "@material-ui/core/Typography";
import spacingProps from "./spacing";
import { useTheme } from "@material-ui/core/styles";
export default function BodyText({
  type = "default",
  variant = "body1",
  bold = false,
  children,
  boxProps,
  size,
  ...props
}) {
  const theme = useTheme();
  const textColor = {
    inherit: theme.palette.primary.text,
    default: theme.palette.newPrimary.main,
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    error: theme.palette.candyApple.main,
    success: theme.palette.status.processing,
    disabled: theme.palette.appBarColor.lightColor,
    white: theme.palette.white,
    cyan: theme.palette.cyan.main,
    grey: "#113033",
    greyLight: "#576D6F",
  };
  return (
    <Box {...spacingProps(props)} {...boxProps}>
      <Typography
        variant={variant}
        {...props}
        style={{
          // color: textColor[type],
          fontWeight: bold && "bold",
          fontSize: size,
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}

BodyText.propTypes = {
  boxProps: PropTypes.any,
  children: PropTypes.any,
  size: PropTypes.string,
  type: PropTypes.string,
};
