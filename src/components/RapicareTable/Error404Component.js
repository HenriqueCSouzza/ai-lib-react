import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography } from "@material-ui/core/";
import Error404 from "../../assets/Error.svg";

const useStyles = makeStyles((theme) => ({
  color: {
    color: theme.palette.primary.main,
  },
  image: {
    marginBottom: theme.spacing(2),
  },
}));

export default function Error404Component({ error }) {
  const classes = useStyles();
  return (
    <Box m={10}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item lg={10} md={10}>
          <Box align="center">
            <img src={Error404} alt="404" />
            <Typography className={classes.color} variant="h4" align="center">
              Erro 404 - Página não encontrada
            </Typography>
            {error ? (
              <Typography color="error" variant="subtitle1" align="center" bold>
                {error}
              </Typography>
            ) : (
              <Typography
                className={classes.color}
                variant="subtitle1"
                align="center"
              >
                A página que você está buscando parece não existir, qualquer
                dúvida utilize o chat ao lado ou clique no botão abaixo para
                retornar ao início.
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
