"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TopbarIconMenu;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _NavLinkHelper = _interopRequireDefault(require("./NavLinkHelper"));

var _Link = _interopRequireDefault(require("./atoms/Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: "flex"
    },
    icon: {
      color: theme.palette.grey[500],
      padding: theme.spacing(1),
      borderRadius: 0,
      "&:hover": {
        background: theme.palette.secondary.dark,
        color: theme.palette.common.white
      }
    }
  };
});

function TopbarIconMenu(_ref) {
  var items = _ref.items;
  var classes = useStyles();
  var menu = items.map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      key: i,
      className: classes.icon,
      component: item.to ? _NavLinkHelper["default"] : _Link["default"],
      "aria-label": item.label,
      to: item.to,
      href: item.href,
      target: item.target
    }, item.icon);
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, menu);
}