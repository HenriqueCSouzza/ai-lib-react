import React from "react";
import { Box, Typography } from "@material-ui/core/";
import Chips from "./index";

const ChipsGroup = ({ primaryText, secondaryText }) => {
  return (
    <Box>
      <Chips text={primaryText} />
      <Box style={{ textAlign: "right" }}>
        <Typography variant="caption">{secondaryText}</Typography>
      </Box>
    </Box>
  );
};

export default ChipsGroup;
