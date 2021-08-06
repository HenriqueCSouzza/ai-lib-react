"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core/");

var _styles = require("@material-ui/core/styles");

var _BodyText = _interopRequireDefault(require("../../RapicareTable/BodyText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: "inline-flex",
      backgroundColor: "#EAF0F6",
      borderRadius: ".2rem",
      border: "1px solid transparent",
      padding: "0 .2rem",
      lineHeight: "1.375rem",
      textAlign: "center"
    }
  };
});

var Chips = function Chips(_ref) {
  var text = _ref.text;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_core.Box, {
    className: classes.root,
    component: "span"
  }, /*#__PURE__*/_react["default"].createElement(_BodyText["default"], {
    variant: "caption",
    bold: true
  }, text));
};

var _default = Chips;
exports["default"] = _default;