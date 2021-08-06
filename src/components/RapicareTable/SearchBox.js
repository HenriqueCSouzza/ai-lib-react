import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { IconButton, InputBase, Paper } from "@material-ui/core/";
import SearchIcon from "@material-ui/icons/Search";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    height: 50,
    alignItems: "center",
    width: "100%",
    border: `1px solid #EBF0F5`,
  },
  input: {
    color: "#85909B",
    fontSize: 14,
    marginLeft: theme.spacing(1),
    flex: 1,
    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
  iconButton: {
    color: "#596775",
    padding: 10,
  },
}));

const SearchBox = ({
  label,
  name,
  handleChange,
  handleClick,
  search,
  value,
  ...props
}) => {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder={label}
        inputProps={{ "aria-label": label }}
        name={name}
        onChange={handleChange}
        value={value}
        {...props}
      />
      <IconButton
        className={classes.iconButton}
        aria-label="search"
        onClick={handleClick}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
export default SearchBox;

SearchBox.propTypes = {
  children: PropTypes.any,
};

SearchBox.defaultProps = {};
