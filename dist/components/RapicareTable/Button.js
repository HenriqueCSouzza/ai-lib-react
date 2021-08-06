"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AppButton;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _styles = require("@material-ui/core/styles");

var _Check = _interopRequireDefault(require("@material-ui/icons/Check"));

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _FileCopy = _interopRequireDefault(require("@material-ui/icons/FileCopy"));

var _excluded = ["disabled", "onClick", "children", "size", "type", "component", "color", "variant", "iconAdd", "iconCheck", "iconFile"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      "&:focus": {
        outline: "1px dotted !important"
      }
    }
  };
});

function AppButton(_ref) {
  var disabled = _ref.disabled,
      onClick = _ref.onClick,
      children = _ref.children,
      size = _ref.size,
      type = _ref.type,
      component = _ref.component,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "primary" : _ref$color,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "contained" : _ref$variant,
      _ref$iconAdd = _ref.iconAdd,
      iconAdd = _ref$iconAdd === void 0 ? false : _ref$iconAdd,
      _ref$iconCheck = _ref.iconCheck,
      iconCheck = _ref$iconCheck === void 0 ? false : _ref$iconCheck,
      _ref$iconFile = _ref.iconFile,
      iconFile = _ref$iconFile === void 0 ? false : _ref$iconFile,
      rest = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_Button["default"], _extends({
    className: classes.root,
    variant: variant,
    onClick: onClick,
    disabled: disabled,
    component: component,
    color: color,
    size: size
  }, rest, {
    disableElevation: true
  }), children, iconAdd && /*#__PURE__*/_react["default"].createElement(_Add["default"], {
    style: {
      marginLeft: 2,
      fontSize: 16
    }
  }), iconCheck && /*#__PURE__*/_react["default"].createElement(_Check["default"], {
    style: {
      marginLeft: 2,
      fontSize: 16
    }
  }), iconFile && /*#__PURE__*/_react["default"].createElement(_FileCopy["default"], {
    style: {
      marginLeft: 2,
      fontSize: 16
    }
  }));
}

AppButton.propTypes = {
  children: _propTypes["default"].any,
  color: _propTypes["default"].string,
  component: _propTypes["default"].any,
  disabled: _propTypes["default"].any,
  onClick: _propTypes["default"].any,
  size: _propTypes["default"].any,
  type: _propTypes["default"].any,
  variant: _propTypes["default"].string
};