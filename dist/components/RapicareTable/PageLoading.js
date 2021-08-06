"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PageLoading;

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
      marginLeft: "auto",
      marginRight: "auto"
    },
    top: {
      color: theme.palette.primary.light
    },
    bottom: {
      color: theme.palette.primary.main,
      animationDuration: "550ms",
      position: "absolute",
      left: 0
    }
  };
});

function PageLoading(_ref) {
  var className = _ref.className,
      _ref$mt = _ref.mt,
      mt = _ref$mt === void 0 ? 15 : _ref$mt,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "medium" : _ref$size;
  var sizePropMapping = {
    small: 32,
    medium: 48,
    large: 64
  };
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    className: (0, _clsx["default"])(classes.root, className),
    style: {
      width: sizePropMapping[size],
      height: sizePropMapping[size]
    },
    mt: mt
  }, /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], {
    variant: "determinate",
    value: 100,
    className: classes.top,
    size: sizePropMapping[size],
    thickness: 4
  }), /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], {
    variant: "indeterminate",
    disableShrink: true,
    className: classes.bottom,
    size: sizePropMapping[size],
    thickness: 4
  }));
}