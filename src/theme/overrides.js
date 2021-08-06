import palette from "./palette";
const overrides = {
  MuiCssBaseline: {
    "@global": {
      "b, strong": {
        fontWeight: 600,
      },
    },
  },
  MuiTableHead: {
    root: {
      color: `#fff`,
      fontWeight: 600,
      lineHeight: `1.3928571428571428rem`,
      "& .MuiTableCell-stickyHeader": {
        backgroundColor: palette.secondary.main,
        fontWeight: 700,
        color: `#fff`,
        "& .MuiCheckbox-root": {
          color: "#fff",
        },
      },
    },
    fontWeight: 600,
  },
  MuiTableCell: {
    "& .MuiTableCell-stickyHeader": {
      backgroundColor: palette.primary.main,
      // backgroundColor: "#eaf0f6",
    },
  },
};

export default overrides;
