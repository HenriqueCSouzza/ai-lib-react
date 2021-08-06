"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TriggersTooltips;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Info = _interopRequireDefault(require("@material-ui/icons/Info"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    arrow: {
      color: theme.palette.cyan.main
    },
    tooltip: {
      backgroundColor: theme.palette.cyan.main,
      width: 216,
      padding: theme.spacing(2),
      fontSize: 12
    },
    root: {
      color: theme.palette.cyan.main
    }
  };
});

function TriggersTooltips(_ref) {
  var _ref$text = _ref.text,
      text = _ref$text === void 0 ? "adicione um texto" : _ref$text;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    arrow: true,
    placement: "top-end",
    title: text,
    classes: classes
  }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    className: classes.root,
    size: "small"
  }, /*#__PURE__*/_react["default"].createElement(_Info["default"], null)));
}