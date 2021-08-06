import React from "react";
import { Box, Grid, Typography } from "@material-ui/core/";
import Bug from "../../assets/Bug.svg";
import { makeStyles } from "@material-ui/core/styles";
import AppleIcon from "@material-ui/icons/Apple";
import { TiVendorMicrosoft } from "react-icons/ti";

const useStyles = makeStyles((theme) => ({
  color: {
    color: theme.palette.primary.main,
  },
  TypographyIcons: {
    color: theme.palette.primary.main,
    fontSize: 12,
    alignSelf: "center",
  },
  SizeIcons: {
    width: 16,
    height: 16,
  },
}));
export default function BugComponent() {
  const classes = useStyles();
  return (
    <Box m={10}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item lg={10} md={10}>
          <Box align="center">
            <img src={Bug} alt="Bugs" />
            <Typography className={classes.color} variant="h3" align="center">
              Ops! Você encontrou um bug
            </Typography>
            <Typography
              className={classes.color}
              variant="subtitle1"
              align="center"
            >
              Atualize seu navegador sem cache. Caso o erro persista, entre em
              contato conosco pelo chat.
            </Typography>

            <Typography className={classes.TypographyIcons} align="center">
              <TiVendorMicrosoft className={classes.SizeIcons} />
              CTRL + F5
            </Typography>
            <Typography className={classes.TypographyIcons} align="center">
              <AppleIcon className={classes.SizeIcons} />
              Comand + Shift + R
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
