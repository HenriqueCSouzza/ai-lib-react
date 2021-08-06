"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var _palette = _interopRequireDefault(require("./palette"));

var _typography = _interopRequireDefault(require("./typography"));

var _overrides = _interopRequireDefault(require("./overrides"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var theme = (0, _styles.createMuiTheme)({
  palette: _palette["default"],
  typography: _typography["default"],
  overrides: _overrides["default"]
});
var _default = theme;
exports["default"] = _default;