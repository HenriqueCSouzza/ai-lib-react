"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectOutlined = SelectOutlined;
exports.SelectInline = SelectInline;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _excluded = ["label", "onChange", "children", "styleFormControl", "formControlProps", "value"],
    _excluded2 = ["label", "onChange", "children", "styleFormControl", "formControlProps", "value"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var InputOutlined = (0, _styles.withStyles)(function (theme) {
  return {
    root: {
      "label + &": {
        marginTop: theme.spacing(3)
      }
    },
    input: {
      borderRadius: 4,
      position: "relative",
      color: theme.palette.primary.text,
      border: "1px solid ".concat(theme.palette.primary.medMain),
      fontSize: 12,
      padding: 6,
      select: {
        outline: "none"
      },
      "&:focus": {
        borderRadius: 4
      }
    }
  };
})(_core.InputBase);
var InputInline = (0, _styles.withStyles)(function (theme) {
  return {
    root: {
      "label + &": {
        marginTop: theme.spacing(3)
      },
      backgroundColor: theme.palette.background["default"]
    },
    input: {
      padding: 6,
      position: "relative",
      color: theme.palette.primary.text,
      backgroundColor: theme.palette.white,
      border: "none",
      fontWeight: "bold",
      fontSize: 12,
      select: {
        outline: "none"
      }
    }
  };
})(_core.InputBase);

function SelectOutlined(_ref) {
  var label = _ref.label,
      onChange = _ref.onChange,
      children = _ref.children,
      _ref$styleFormControl = _ref.styleFormControl,
      styleFormControl = _ref$styleFormControl === void 0 ? {} : _ref$styleFormControl,
      formControlProps = _ref.formControlProps,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      props = _objectWithoutProperties(_ref, _excluded);

  var inputEl = (0, _react.useRef)(null);
  return /*#__PURE__*/_react["default"].createElement(_core.FormControl, _extends({}, formControlProps, {
    ref: inputEl
  }), label && /*#__PURE__*/_react["default"].createElement(_core.InputLabel, null, label), /*#__PURE__*/_react["default"].createElement(_core.NativeSelect, _extends({
    onChange: onChange,
    input: /*#__PURE__*/_react["default"].createElement(InputOutlined, null),
    multiple: true
  }, props), children));
}

function SelectInline(_ref2) {
  var label = _ref2.label,
      onChange = _ref2.onChange,
      children = _ref2.children,
      _ref2$styleFormContro = _ref2.styleFormControl,
      styleFormControl = _ref2$styleFormContro === void 0 ? {} : _ref2$styleFormContro,
      formControlProps = _ref2.formControlProps,
      _ref2$value = _ref2.value,
      value = _ref2$value === void 0 ? [] : _ref2$value,
      props = _objectWithoutProperties(_ref2, _excluded2);

  var inputEl = (0, _react.useRef)(null);
  return /*#__PURE__*/_react["default"].createElement(_core.FormControl, _extends({}, formControlProps, {
    ref: inputEl
  }), label && /*#__PURE__*/_react["default"].createElement(_core.InputLabel, null, label), /*#__PURE__*/_react["default"].createElement(_core.NativeSelect, _extends({
    onChange: onChange,
    input: /*#__PURE__*/_react["default"].createElement(InputInline, null)
  }, props), children));
}

SelectInline.propTypes = {
  children: _propTypes["default"].any,
  formControlProps: _propTypes["default"].any,
  label: _propTypes["default"].any,
  onChange: _propTypes["default"].any,
  styleFormControl: _propTypes["default"].object,
  value: _propTypes["default"].any
};
SelectOutlined.propTypes = {
  children: _propTypes["default"].any,
  formControlProps: _propTypes["default"].any,
  label: _propTypes["default"].any,
  onChange: _propTypes["default"].any,
  styleFormControl: _propTypes["default"].object,
  value: _propTypes["default"].any
};