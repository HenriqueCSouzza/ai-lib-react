"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Error404Component;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core/");

var _Error = _interopRequireDefault(require("../../assets/Error.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    color: {
      color: theme.palette.primary.main
    },
    image: {
      marginBottom: theme.spacing(2)
    }
  };
});

function Error404Component(_ref) {
  var error = _ref.error;
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
    src: _Error["default"],
    alt: "404"
  }), /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    className: classes.color,
    variant: "h4",
    align: "center"
  }, "Erro 404 - P\xE1gina n\xE3o encontrada"), error ? /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    color: "error",
    variant: "subtitle1",
    align: "center",
    bold: true
  }, error) : /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    className: classes.color,
    variant: "subtitle1",
    align: "center"
  }, "A p\xE1gina que voc\xEA est\xE1 buscando parece n\xE3o existir, qualquer d\xFAvida utilize o chat ao lado ou clique no bot\xE3o abaixo para retornar ao in\xEDcio.")))));
}