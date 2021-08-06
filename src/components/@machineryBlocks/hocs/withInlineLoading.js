import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import InlineLoading from "../../common/InlineLoading";

const useStyles = makeStyles((theme) => ({
  element: {
    display: "inline-block",
    verticalAlign: "middle",
  },
  spinner: {
    height: 24,
    marginLeft: theme.spacing(2),
  },
}));

const withInlineLoading = (WrappedComponent) => ({
  disabled,
  children,
  loading,
  className,
  rootClassName,
  spinnerClassName,
  ...props
}) => {
  const classes = useStyles();
  return (
    <div className={rootClassName}>
      <WrappedComponent
        className={clsx(classes.element, className)}
        {...props}
        disabled={disabled || loading}
      >
        {children}
      </WrappedComponent>
      {loading && (
        <InlineLoading className={clsx(classes.element, classes.spinner)} />
      )}
    </div>
  );
};

export default withInlineLoading;
