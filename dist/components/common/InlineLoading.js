"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = InlineLoading;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      position: "relative"
    },
    top: {
      color: theme.palette.primary[500]
    },
    bottom: {
      color: theme.palette.primary[50],
      animationDuration: "550ms",
      position: "absolute",
      left: 0
    }
  };
});

function InlineLoading(_ref) {
  var className = _ref.className;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(classes.root, className)
  }, /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], {
    variant: "determinate",
    value: 100,
    className: classes.top,
    size: 24,
    thickness: 4
  }), /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], {
    variant: "indeterminate",
    disableShrink: true,
    className: classes.bottom,
    size: 24,
    thickness: 4
  }));
}