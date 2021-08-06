"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TopbarMenuitem;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _lodash = require("lodash");

var _reactRouter = require("react-router");

var _NavLinkHelper = _interopRequireDefault(require("./NavLinkHelper"));

var _TopbarSubmenu = _interopRequireDefault(require("./TopbarSubmenu"));

var _usePopupSate = _interopRequireDefault(require("./hooks/usePopupSate"));

var _TopbarCaret = _interopRequireDefault(require("./TopbarCaret"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      width: "auto",
      paddingLeft: theme.spacing(1.5),
      paddingRight: theme.spacing(1.5),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      display: "inline-flex",
      background: "transparent",
      "&.active, &.Mui-selected, &:hover, &$selected, &$selected:hover": {
        background: theme.palette.secondary.dark,
        "&:hover": {
          background: theme.palette.secondary.dark
        }
      },
      "& .MuiTypography-root": {
        fontWeight: 500,
        fontSize: theme.typography.caption.fontSize
      }
    }
  };
});

function TopbarMenuitem(_ref) {
  var _value$location;

  var children = _ref.children,
      to = _ref.to,
      exact = _ref.exact,
      icon = _ref.icon,
      _ref$iconPosition = _ref.iconPosition,
      iconPosition = _ref$iconPosition === void 0 ? "left" : _ref$iconPosition,
      disabled = _ref.disabled,
      last = _ref.last,
      items = _ref.items;

  var _usePopupState = (0, _usePopupSate["default"])("menu-".concat((0, _lodash.random)(0, 100000))),
      triggerProps = _usePopupState.triggerProps,
      popupProps = _usePopupState.popupProps;

  var ifTriggerProps = (items === null || items === void 0 ? void 0 : items.length) > 0 && triggerProps;
  var classes = useStyles();
  var value = (0, _react.useContext)(_reactRouter.__RouterContext);
  var selected = (0, _reactRouter.matchPath)(to, {
    path: (_value$location = value.location) === null || _value$location === void 0 ? void 0 : _value$location.pathname,
    exact: exact
  }) !== null ? true : false;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.ListItem, _extends({}, ifTriggerProps, {
    disabled: disabled,
    button: true,
    dense: true,
    exact: exact,
    to: to,
    selected: (items === null || items === void 0 ? void 0 : items.length) > 0 ? popupProps.open : selected,
    className: classes.root,
    style: last && {
      borderRight: 0
    },
    component: to && _NavLinkHelper["default"]
  }), icon && iconPosition === "left" && /*#__PURE__*/_react["default"].createElement(_core.ListItemIcon, null, icon), children && /*#__PURE__*/_react["default"].createElement(_core.ListItemText, {
    primary: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children, (items === null || items === void 0 ? void 0 : items.length) > 0 && /*#__PURE__*/_react["default"].createElement(_TopbarCaret["default"], {
      size: "small"
    })),
    primaryTypographyProps: {
      variant: "body2"
    }
  }), icon && iconPosition === "right" && /*#__PURE__*/_react["default"].createElement(_core.ListItemIcon, null, icon)), (items === null || items === void 0 ? void 0 : items.length) > 0 && /*#__PURE__*/_react["default"].createElement(_TopbarSubmenu["default"], _extends({
    items: items
  }, popupProps)));
}