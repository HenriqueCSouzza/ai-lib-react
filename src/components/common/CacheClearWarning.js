import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClearCache from "react-clear-cache";
import Snackbar from "@material-ui/core/Snackbar";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import BodyText from "@/components/RapicareTable/BodyText";

const useStyles = makeStyles((theme) => ({
  dialog: {
    border: `1px solid ${theme.palette.grey[400]}`,
  },
}));

export default function CacheClearWarning({ basePath }) {
  const classes = useStyles();
  return (
    <ClearCache basePath={basePath}>
      {({ isLatestVersion, emptyCacheStorage }) =>
        !isLatestVersion && (
          <Snackbar
            open
            anchorOrigin={{ vertical: "top", horizontal: "left" }}
            style={{ maxWidth: 320 }}
          >
            <Paper elevation={4} className={classes.dialog}>
              <Box p={3}>
                <BodyText variant="subtitle1">
                  <b>Aplicação atualizada</b>{" "}
                  <span role="img" aria-label="happy emotion">
                    🎉
                  </span>
                </BodyText>
                <BodyText type="disabled">
                  O aplicativo foi atualizado e a página precisa ser
                  recarregada.
                </BodyText>
                <Box mt={2} textAlign="right">
                  <Button
                    variant="secondary"
                    onClick={(e) => {
                      e.preventDefault();
                      emptyCacheStorage();
                    }}
                  >
                    Atualizar versão
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Snackbar>
        )
      }
    </ClearCache>
  );
}
