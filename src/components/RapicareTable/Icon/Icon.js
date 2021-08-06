import { Box } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& svg": {
      verticalAlign: "middle",
    },
  },
}));

export default function Icon({
  icon,
  size,
  display = "inline-block",
  verticalAlign = "middle",
  ...props
}) {
  const classes = useStyles();
  const isSizeMappable = typeof size !== "string";
  const sizeMapping = {
    small: 14,
    medium: 16,
    large: 20,
  };
  const finalSize = isSizeMappable ? sizeMapping[size] : size;
  return (
    <Box
      className={classes.root}
      style={{ width: finalSize, height: finalSize, verticalAlign }}
      display={display}
    >
      {icon}
    </Box>
  );
}
