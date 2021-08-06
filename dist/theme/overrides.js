"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _palette = _interopRequireDefault(require("./palette"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var overrides = {
  MuiCssBaseline: {
    "@global": {
      "b, strong": {
        fontWeight: 600
      }
    }
  },
  MuiTableHead: {
    root: {
      color: "#fff",
      fontWeight: 600,
      lineHeight: "1.3928571428571428rem",
      "& .MuiTableCell-stickyHeader": {
        backgroundColor: _palette["default"].secondary.main,
        fontWeight: 700,
        color: "#fff",
        "& .MuiCheckbox-root": {
          color: "#fff"
        }
      }
    },
    fontWeight: 600
  },
  MuiTableCell: {
    "& .MuiTableCell-stickyHeader": {
      backgroundColor: _palette["default"].primary.main // backgroundColor: "#eaf0f6",

    }
  }
};
var _default = overrides;
exports["default"] = _default;