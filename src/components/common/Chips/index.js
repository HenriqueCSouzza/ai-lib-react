import React from "react";
import { Box } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import BodyText from "../../RapicareTable/BodyText";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-flex",
    backgroundColor: "#EAF0F6",
    borderRadius: ".2rem",
    border: "1px solid transparent",
    padding: "0 .2rem",
    lineHeight: "1.375rem",
    textAlign: "center",
  },
}));

const Chips = ({ text }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root} component="span">
      <BodyText variant="caption" bold>
        {text}
      </BodyText>
    </Box>
  );
};

export default Chips;
