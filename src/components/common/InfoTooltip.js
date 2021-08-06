import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.cyan.main,
  },
  tooltip: {
    backgroundColor: theme.palette.cyan.main,
    width: 216,
    padding: theme.spacing(2),
    fontSize: 12,
  },
  root: {
    color: theme.palette.cyan.main,
  },
}));

export default function TriggersTooltips({ text = "adicione um texto" }) {
  const classes = useStyles();
  return (
    <Tooltip arrow placement="top-end" title={text} classes={classes}>
      <IconButton className={classes.root} size="small">
        <InfoIcon />
      </IconButton>
    </Tooltip>
  );
}
