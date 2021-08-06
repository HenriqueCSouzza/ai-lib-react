"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = BodyText;

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _spacing = _interopRequireDefault(require("./spacing"));

var _styles = require("@material-ui/core/styles");

var _excluded = ["type", "variant", "bold", "children", "boxProps", "size"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function BodyText(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "default" : _ref$type,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "body1" : _ref$variant,
      _ref$bold = _ref.bold,
      bold = _ref$bold === void 0 ? false : _ref$bold,
      children = _ref.children,
      boxProps = _ref.boxProps,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = (0, _styles.useTheme)();
  var textColor = {
    inherit: theme.palette.primary.text,
    "default": theme.palette.newPrimary.main,
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    error: theme.palette.candyApple.main,
    success: theme.palette.status.processing,
    disabled: theme.palette.appBarColor.lightColor,
    white: theme.palette.white,
    cyan: theme.palette.cyan.main,
    grey: "#113033",
    greyLight: "#576D6F"
  };
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], _extends({}, (0, _spacing["default"])(props), boxProps), /*#__PURE__*/_react["default"].createElement(_Typography["default"], _extends({
    variant: variant
  }, props, {
    style: {
      // color: textColor[type],
      fontWeight: bold && "bold",
      fontSize: size
    }
  }), children));
}

BodyText.propTypes = {
  boxProps: _propTypes["default"].any,
  children: _propTypes["default"].any,
  size: _propTypes["default"].string,
  type: _propTypes["default"].string
};