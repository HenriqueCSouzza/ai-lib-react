"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TopbarSubmenu;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _NavLinkHelper = _interopRequireDefault(require("./NavLinkHelper"));

var _TopbarSubmenuDivider = _interopRequireDefault(require("./TopbarSubmenuDivider"));

var _excluded = ["items"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    paper: {
      minWidth: 180,
      overflow: "visible",
      background: theme.palette.secondary.dark,
      marginTop: theme.spacing(5),
      borderRadius: 0
    },
    menuItem: {
      color: theme.palette.secondary.contrastText,
      fontSize: theme.typography.caption.fontSize,
      padding: "".concat(theme.spacing(1.5), "px ").concat(theme.spacing(2), "px"),
      "&:hover": {
        background: theme.palette.secondary.main
      }
    }
  };
});

function TopbarSubmenu(_ref) {
  var items = _ref.items,
      props = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_core.Menu, _extends({
    getContentAnchorEl: null,
    variant: "menu",
    classes: {
      paper: classes.paper
    },
    autoFocus: false,
    elevation: 0
  }, props), items.map(function (item, i) {
    return item === "divider" ? /*#__PURE__*/_react["default"].createElement(_TopbarSubmenuDivider["default"], {
      key: i
    }) : /*#__PURE__*/_react["default"].createElement(_core.MenuItem, {
      key: i,
      component: _NavLinkHelper["default"],
      to: item.to,
      dense: true,
      className: classes.menuItem,
      onClick: props.onClose
    }, item.label);
  }));
}