"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TopbarBrand;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _NavLinkHelper = _interopRequireDefault(require("./NavLinkHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    brand: {
      marginRight: theme.spacing(4),
      marginLeft: "-".concat(theme.spacing(3), "px"),
      textDecoration: "none",
      color: theme.palette.common.white,
      "&:hover": {
        color: theme.palette.grey[100]
      }
    },
    image: {
      display: "inline-block",
      verticalAlign: "middle",
      marginRight: theme.spacing(1),
      width: 23.5
    },
    title: _defineProperty({
      display: "none",
      textTransform: "lowercase",
      verticalAlign: "middle",
      fontWeight: "bold"
    }, theme.breakpoints.up("sm"), {
      display: "inline-block"
    })
  };
});

function TopbarBrand(_ref) {
  var brand = _ref.brand,
      product = _ref.product,
      to = _ref.to;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_NavLinkHelper["default"], {
    className: classes.brand,
    to: to
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: brand,
    alt: "Rapicare",
    className: classes.image
  }), /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "h6",
    noWrap: true,
    component: "span",
    className: classes.title
  }, product));
}