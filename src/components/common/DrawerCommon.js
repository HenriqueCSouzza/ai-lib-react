import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Box, Drawer, IconButton, Typography } from "@material-ui/core/";
import CloseIcon from "@material-ui/icons/Close";
const drawerWidth = 500;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: "50%",
  },
  container: { padding: theme.spacing(1) },
}));

export default function DrawerCommon({
  anchor = "right",
  component,
  open = false,
  refresher,
  onClose,
  formProps,
  infoHead = "teste",
  backgroundColor,
}) {
  const classes = useStyles();

  const onSuccess = () => {
    refresher(Date.now());
    onClose();
  };

  const DrawerHead = withStyles((theme) => ({
    root: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "space-between",
      minHeight: 64,
      backgroundColor: theme.palette.secondary.dark,
    }, // a style rule
    title: {
      color: theme.palette.white,
      fontWeight: 700,
    },
    icon: {
      color: theme.palette.white,
      fontWeight: 700,
    }, // a nested style rule
  }))(({ classes, infoHead, onClose }) => (
    <Box className={classes.root} display="flex">
      <Typography variant="h6" className={classes.title}>
        {infoHead}
      </Typography>

      <Box className={classes.icon}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          className={classes.icon}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  ));

  return (
    <Drawer
      className={classes.drawer}
      anchor={anchor}
      open={open}
      onClose={onClose}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <>
        <DrawerHead
          infoHead={infoHead}
          onClose={onClose}
          backgroundColor={backgroundColor}
          {...formProps}
        />
        <Box className={classes.container}>
          {React.createElement(component, {
            onSuccess: onSuccess,
            ...formProps,
          })}
        </Box>
      </>
    </Drawer>
  );
}
