"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TopbarDivider;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Box = _interopRequireDefault(require("./Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      width: 1,
      height: 32,
      borderLeft: "1px solid ".concat(theme.palette.grey[400])
    }
  };
});

function TopbarDivider() {
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    className: classes.root,
    mx: 2
  });
}