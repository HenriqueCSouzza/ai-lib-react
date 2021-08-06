import React, { useContext } from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { random } from "lodash";
import { __RouterContext as RouterContext, matchPath } from "react-router";
import NavLinkHelper from "./NavLinkHelper";
import TopbarSubmenu from "./TopbarSubmenu";
import usePopupState from "./hooks/usePopupSate";
import TopbarCaret from "./TopbarCaret";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    display: "inline-flex",
    background: "transparent",
    "&.active, &.Mui-selected, &:hover, &$selected, &$selected:hover": {
      background: theme.palette.secondary.dark,
      "&:hover": {
        background: theme.palette.secondary.dark,
      },
    },
    "& .MuiTypography-root": {
      fontWeight: 500,
      fontSize: theme.typography.caption.fontSize,
    },
  },
}));

export default function TopbarMenuitem({
  children,
  to,
  exact,
  icon,
  iconPosition = "left",
  disabled,
  last,
  items,
}) {
  const { triggerProps, popupProps } = usePopupState(
    `menu-${random(0, 100000)}`
  );
  const ifTriggerProps = items?.length > 0 && triggerProps;
  const classes = useStyles();
  const value = useContext(RouterContext);
  const selected =
    matchPath(to, { path: value.location?.pathname, exact: exact }) !== null
      ? true
      : false;
  return (
    <>
      <ListItem
        {...ifTriggerProps}
        disabled={disabled}
        button
        dense
        exact={exact}
        to={to}
        selected={items?.length > 0 ? popupProps.open : selected}
        className={classes.root}
        style={last && { borderRight: 0 }}
        component={to && NavLinkHelper}
      >
        {icon && iconPosition === "left" && <ListItemIcon>{icon}</ListItemIcon>}
        {children && (
          <ListItemText
            primary={
              <>
                {children}
                {items?.length > 0 && <TopbarCaret size="small" />}
              </>
            }
            primaryTypographyProps={{ variant: "body2" }}
          />
        )}
        {icon && iconPosition === "right" && (
          <ListItemIcon>{icon}</ListItemIcon>
        )}
      </ListItem>
      {items?.length > 0 && <TopbarSubmenu items={items} {...popupProps} />}
    </>
  );
}
