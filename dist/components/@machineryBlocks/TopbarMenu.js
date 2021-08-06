"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TopbarMenu;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _MenuList = _interopRequireDefault(require("@material-ui/core/MenuList"));

var _TopbarMenuItem = _interopRequireDefault(require("./TopbarMenuItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: "flex",
      marginRight: "auto",
      padding: 0
    },
    positionRight: {
      marginLeft: "auto",
      marginRight: "0"
    }
  };
});

function TopbarMenu(_ref) {
  var items = _ref.items,
      position = _ref.position;
  var classes = useStyles();
  var links = items.map(function (item, i) {
    var _item$items;

    var props = ((_item$items = item.items) === null || _item$items === void 0 ? void 0 : _item$items.length) > 0 ? {
      items: item.items
    } : {
      to: item.to,
      exact: item.exact,
      icon: item.icon
    };
    return /*#__PURE__*/_react["default"].createElement(_TopbarMenuItem["default"], _extends({
      key: i,
      iconPosition: item.iconPosition
    }, props), item.label && item.label);
  });
  return /*#__PURE__*/_react["default"].createElement(_MenuList["default"], {
    component: "nav",
    className: position === "right" ? (0, _clsx["default"])(classes.root, classes.positionRight) : classes.root
  }, links);
}