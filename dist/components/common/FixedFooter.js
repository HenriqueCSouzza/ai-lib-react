"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _clsx2 = _interopRequireDefault(require("clsx"));

var _spacing = _interopRequireDefault(require("../../core/utils/spacing"));

var _excluded = ["children", "boxProps", "newStyle", "margin"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      position: "fixed",
      bottom: 0,
      backgroundColor: "#fff",
      width: "100%",
      height: 60,
      zIndex: 1100,
      border: "1px solid ".concat(theme.palette.primary.light)
    },
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      height: "100%"
    }
  };
});

var FixedFooter = function FixedFooter(_ref) {
  var children = _ref.children,
      boxProps = _ref.boxProps,
      _ref$newStyle = _ref.newStyle,
      newStyle = _ref$newStyle === void 0 ? false : _ref$newStyle,
      margin = _ref.margin,
      props = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_core.Box, {
    className: classes.root,
    style: {
      margin: margin
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.Box, _extends({}, (0, _spacing["default"])(props), boxProps, {
    className: (0, _clsx2["default"])(_defineProperty({}, classes.container, newStyle ? undefined : true))
  }), children));
};

var _default = FixedFooter;
exports["default"] = _default;