import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    backgroundColor: "#33475B",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({
  textSubmit = "Confirmar e Continuar",
  component,
  isOpen,
  onClose,
  refresher,
  formProps,
  onSubmit,
}) {
  const classes = useStyles();
  const onSuccess = () => {
    refresher && refresher(Date.now());
    onClose();
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={isOpen}
        onClose={onClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={onClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Fechar
            </Typography>
          </Toolbar>
        </AppBar>
        <Box className={classes.container}>
          {React.createElement(component, {
            onSuccess: onSuccess,
            ...formProps,
          })}
        </Box>
      </Dialog>
    </div>
  );
}
