"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Topbar;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _Container = _interopRequireDefault(require("./Container"));

var _TopbarMenu = _interopRequireDefault(require("./TopbarMenu"));

var _TopbarIconMenu = _interopRequireDefault(require("./TopbarIconMenu"));

var _TopbarUserBadge = _interopRequireDefault(require("./TopbarUserBadge"));

var _TopbarDivider = _interopRequireDefault(require("./TopbarDivider"));

var _TopbarBrand = _interopRequireDefault(require("./TopbarBrand"));

var _icon = _interopRequireDefault(require("@/assets/logo/icon.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      width: "100%",
      flexGrow: 1,
      "& .MuiAppBar-root": {
        top: 0,
        width: "100%",
        zIndex: 500,
        backgroundColor: theme.palette.secondary.dark
      }
    },
    brand: {
      marginRight: theme.spacing(4),
      marginLeft: "-".concat(theme.spacing(3), "px")
    },
    image: {
      display: "inline-block",
      verticalAlign: "middle",
      marginRight: theme.spacing(1)
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

function Topbar(_ref) {
  var product = _ref.product,
      primaryMenu = _ref.primaryMenu,
      secondaryMenu = _ref.secondaryMenu,
      userBadge = _ref.userBadge,
      download = _ref.download,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "ordinary" : _ref$type,
      _ref$defaultTo = _ref.defaultTo,
      defaultTo = _ref$defaultTo === void 0 ? "/app/" : _ref$defaultTo;
  var classes = useStyles();
  return type === "document" ? /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement(_core.AppBar, {
    position: "static",
    elevation: 0
  }, /*#__PURE__*/_react["default"].createElement(_Container["default"], {
    maxWidth: "xl"
  }, /*#__PURE__*/_react["default"].createElement(_core.Toolbar, {
    variant: "dense"
  }, download && /*#__PURE__*/_react["default"].createElement("div", null, download()))))) : /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement(_core.AppBar, {
    position: "static",
    elevation: 0
  }, /*#__PURE__*/_react["default"].createElement(_Container["default"], {
    maxWidth: "xl"
  }, /*#__PURE__*/_react["default"].createElement(_core.Toolbar, {
    variant: "dense"
  }, /*#__PURE__*/_react["default"].createElement(_TopbarBrand["default"], {
    brand: _icon["default"],
    product: product,
    to: defaultTo
  }), primaryMenu && /*#__PURE__*/_react["default"].createElement(_TopbarMenu["default"], {
    items: primaryMenu
  }), secondaryMenu && /*#__PURE__*/_react["default"].createElement(_TopbarIconMenu["default"], {
    items: secondaryMenu
  }), userBadge && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_TopbarDivider["default"], null), /*#__PURE__*/_react["default"].createElement(_TopbarUserBadge["default"], {
    user: userBadge
  }))))));
}