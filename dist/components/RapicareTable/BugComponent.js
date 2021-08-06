"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = BugComponent;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core/");

var _Bug = _interopRequireDefault(require("../../assets/Bug.svg"));

var _styles = require("@material-ui/core/styles");

var _Apple = _interopRequireDefault(require("@material-ui/icons/Apple"));

var _ti = require("react-icons/ti");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    color: {
      color: theme.palette.primary.main
    },
    TypographyIcons: {
      color: theme.palette.primary.main,
      fontSize: 12,
      alignSelf: "center"
    },
    SizeIcons: {
      width: 16,
      height: 16
    }
  };
});

function BugComponent() {
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_core.Box, {
    m: 10
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    direction: "row",
    justify: "center",
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    lg: 10,
    md: 10
  }, /*#__PURE__*/_react["default"].createElement(_core.Box, {
    align: "center"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _Bug["default"],
    alt: "Bugs"
  }), /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    className: classes.color,
    variant: "h3",
    align: "center"
  }, "Ops! Voc\xEA encontrou um bug"), /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    className: classes.color,
    variant: "subtitle1",
    align: "center"
  }, "Atualize seu navegador sem cache. Caso o erro persista, entre em contato conosco pelo chat."), /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    className: classes.TypographyIcons,
    align: "center"
  }, /*#__PURE__*/_react["default"].createElement(_ti.TiVendorMicrosoft, {
    className: classes.SizeIcons
  }), "CTRL + F5"), /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    className: classes.TypographyIcons,
    align: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Apple["default"], {
    className: classes.SizeIcons
  }), "Comand + Shift + R")))));
}