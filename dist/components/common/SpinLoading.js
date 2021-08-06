"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = InlineLoading;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      position: "relative",
      minHeight: 200,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    bottom: {
      color: theme.palette.primary[50],
      animationDuration: "550ms"
    }
  };
});

function InlineLoading(_ref) {
  var className = _ref.className,
      children = _ref.children,
      loading = _ref.loading;
  var classes = useStyles();

  if (loading) {
    return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      className: (0, _clsx["default"])(classes.root, className)
    }, /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], {
      variant: "indeterminate",
      disableShrink: true,
      className: classes.bottom,
      size: 24,
      thickness: 4
    }));
  }

  return children;
}