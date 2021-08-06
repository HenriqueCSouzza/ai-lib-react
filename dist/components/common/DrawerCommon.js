"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DrawerCommon;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core/");

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var drawerWidth = 500;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    drawer: {
      width: drawerWidth
    },
    drawerPaper: {
      width: "50%"
    },
    container: {
      padding: theme.spacing(1)
    }
  };
});

function DrawerCommon(_ref) {
  var _ref$anchor = _ref.anchor,
      anchor = _ref$anchor === void 0 ? "right" : _ref$anchor,
      component = _ref.component,
      _ref$open = _ref.open,
      open = _ref$open === void 0 ? false : _ref$open,
      refresher = _ref.refresher,
      onClose = _ref.onClose,
      formProps = _ref.formProps,
      _ref$infoHead = _ref.infoHead,
      infoHead = _ref$infoHead === void 0 ? "teste" : _ref$infoHead,
      backgroundColor = _ref.backgroundColor;
  var classes = useStyles();

  var onSuccess = function onSuccess() {
    refresher(Date.now());
    onClose();
  };

  var DrawerHead = (0, _styles.withStyles)(function (theme) {
    return {
      root: _objectSpread(_objectSpread({
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1)
      }, theme.mixins.toolbar), {}, {
        justifyContent: "space-between",
        minHeight: 64,
        backgroundColor: theme.palette.secondary.dark
      }),
      // a style rule
      title: {
        color: theme.palette.white,
        fontWeight: 700
      },
      icon: {
        color: theme.palette.white,
        fontWeight: 700
      } // a nested style rule

    };
  })(function (_ref2) {
    var classes = _ref2.classes,
        infoHead = _ref2.infoHead,
        onClose = _ref2.onClose;
    return /*#__PURE__*/_react["default"].createElement(_core.Box, {
      className: classes.root,
      display: "flex"
    }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
      variant: "h6",
      className: classes.title
    }, infoHead), /*#__PURE__*/_react["default"].createElement(_core.Box, {
      className: classes.icon
    }, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
      "aria-label": "close",
      onClick: onClose,
      className: classes.icon
    }, /*#__PURE__*/_react["default"].createElement(_Close["default"], {
      fontSize: "large"
    }))));
  });
  return /*#__PURE__*/_react["default"].createElement(_core.Drawer, {
    className: classes.drawer,
    anchor: anchor,
    open: open,
    onClose: onClose,
    classes: {
      paper: classes.drawerPaper
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(DrawerHead, _extends({
    infoHead: infoHead,
    onClose: onClose,
    backgroundColor: backgroundColor
  }, formProps)), /*#__PURE__*/_react["default"].createElement(_core.Box, {
    className: classes.container
  }, /*#__PURE__*/_react["default"].createElement(component, _objectSpread({
    onSuccess: onSuccess
  }, formProps)))));
}