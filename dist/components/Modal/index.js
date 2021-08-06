"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FullScreenDialog;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _Slide = _interopRequireDefault(require("@material-ui/core/Slide"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    appBar: {
      position: "relative",
      backgroundColor: "#33475B"
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1
    }
  };
});

var Transition = /*#__PURE__*/_react["default"].forwardRef(function Transition(props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_Slide["default"], _extends({
    direction: "up",
    ref: ref
  }, props));
});

function FullScreenDialog(_ref) {
  var _ref$textSubmit = _ref.textSubmit,
      textSubmit = _ref$textSubmit === void 0 ? "Confirmar e Continuar" : _ref$textSubmit,
      component = _ref.component,
      isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      refresher = _ref.refresher,
      formProps = _ref.formProps,
      onSubmit = _ref.onSubmit;
  var classes = useStyles();

  var onSuccess = function onSuccess() {
    refresher && refresher(Date.now());
    onClose();
  };

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    fullScreen: true,
    open: isOpen,
    onClose: onClose,
    TransitionComponent: Transition
  }, /*#__PURE__*/_react["default"].createElement(_AppBar["default"], {
    className: classes.appBar
  }, /*#__PURE__*/_react["default"].createElement(_Toolbar["default"], null, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    edge: "start",
    color: "inherit",
    onClick: onClose,
    "aria-label": "close"
  }, /*#__PURE__*/_react["default"].createElement(_Close["default"], null)), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h6",
    className: classes.title
  }, "Fechar"))), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    className: classes.container
  }, /*#__PURE__*/_react["default"].createElement(component, _objectSpread({
    onSuccess: onSuccess
  }, formProps)))));
}