"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TopbarUserBadge;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _usePopupSate = _interopRequireDefault(require("./hooks/usePopupSate"));

var _Box = _interopRequireDefault(require("./Box"));

var _Avatar = _interopRequireDefault(require("./Avatar"));

var _DropdownMenu = _interopRequireDefault(require("./DropdownMenu"));

var _withOnlineBadge = _interopRequireDefault(require("./hocs/withOnlineBadge"));

var _TopbarCaret = _interopRequireDefault(require("./TopbarCaret"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      cursor: "pointer"
    }
  };
});

function TopbarUserBadge(_ref) {
  var user = _ref.user;
  var classes = useStyles();
  var AvatarOnline = (0, _withOnlineBadge["default"])(_Avatar["default"], "secondary");

  var _usePopupState = (0, _usePopupSate["default"])("user-badge"),
      triggerProps = _usePopupState.triggerProps,
      popupProps = _usePopupState.popupProps;

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Box["default"], _extends({
    className: classes.root,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }, triggerProps), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    mr: 1
  }, /*#__PURE__*/_react["default"].createElement(AvatarOnline, {
    src: user.avatar,
    size: 32
  })), /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "caption"
  }, user.displayName), /*#__PURE__*/_react["default"].createElement(_TopbarCaret["default"], {
    size: "small"
  })), /*#__PURE__*/_react["default"].createElement(_DropdownMenu["default"], _extends({}, popupProps, {
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "center"
    },
    segmentPosition: "right",
    items: [// { label: "Convidar amigos", to: "/referal" },
    // { label: "Minhas preferências", to: "/settings/profile" },
    // { label: "Gerenciar conta", to: "/settings/account" },
    // "divider",
    {
      label: "Sair",
      to: "/app/logout"
    }]
  })));
}