"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _InlineLoading = _interopRequireDefault(require("../../common/InlineLoading"));

var _excluded = ["disabled", "children", "loading", "className", "rootClassName", "spinnerClassName"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    element: {
      display: "inline-block",
      verticalAlign: "middle"
    },
    spinner: {
      height: 24,
      marginLeft: theme.spacing(2)
    }
  };
});

var withInlineLoading = function withInlineLoading(WrappedComponent) {
  return function (_ref) {
    var disabled = _ref.disabled,
        children = _ref.children,
        loading = _ref.loading,
        className = _ref.className,
        rootClassName = _ref.rootClassName,
        spinnerClassName = _ref.spinnerClassName,
        props = _objectWithoutProperties(_ref, _excluded);

    var classes = useStyles();
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: rootClassName
    }, /*#__PURE__*/_react["default"].createElement(WrappedComponent, _extends({
      className: (0, _clsx["default"])(classes.element, className)
    }, props, {
      disabled: disabled || loading
    }), children), loading && /*#__PURE__*/_react["default"].createElement(_InlineLoading["default"], {
      className: (0, _clsx["default"])(classes.element, classes.spinner)
    }));
  };
};

var _default = withInlineLoading;
exports["default"] = _default;