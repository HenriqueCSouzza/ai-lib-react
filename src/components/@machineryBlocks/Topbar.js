import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import Container from "./Container";
import TopbarMenu from "./TopbarMenu";
import TopbarIconMenu from "./TopbarIconMenu";
import TopbarUserBadge from "./TopbarUserBadge";
import TopbarDivider from "./TopbarDivider";
import TopbarBrand from "./TopbarBrand";
import brand from "@/assets/logo/icon.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    flexGrow: 1,
    "& .MuiAppBar-root": {
      top: 0,
      width: "100%",
      zIndex: 500,
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  brand: {
    marginRight: theme.spacing(4),
    marginLeft: `-${theme.spacing(3)}px`,
  },
  image: {
    display: "inline-block",
    verticalAlign: "middle",
    marginRight: theme.spacing(1),
  },
  title: {
    display: "none",
    textTransform: "lowercase",
    verticalAlign: "middle",
    fontWeight: "bold",
    [theme.breakpoints.up("sm")]: {
      display: "inline-block",
    },
  },
}));

export default function Topbar({
  product,
  primaryMenu,
  secondaryMenu,
  userBadge,
  download,
  type = "ordinary",
  defaultTo = "/app/",
}) {
  const classes = useStyles();

  return type === "document" ? (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar variant="dense">
            {download && <div>{download()}</div>}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  ) : (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar variant="dense">
            <TopbarBrand brand={brand} product={product} to={defaultTo} />
            {primaryMenu && <TopbarMenu items={primaryMenu} />}
            {secondaryMenu && <TopbarIconMenu items={secondaryMenu} />}
            {userBadge && (
              <>
                <TopbarDivider />
                <TopbarUserBadge user={userBadge} />
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
