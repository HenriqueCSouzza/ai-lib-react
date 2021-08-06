"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TablePaginatioStyled;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core/");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      fontFamily: "Roboto, sans-serif",
      fontSize: "12px",
      fontWeight: 400,
      color: theme.palette.primary.text,
      "& .MuiSvgIcon-root": {
        width: "0.7em",
        height: "0.7em"
      }
    }
  };
});

function TablePaginatioStyled(_ref) {
  var meta = _ref.meta,
      onChangePage = _ref.onChangePage,
      onChangeRowsPerPage = _ref.onChangeRowsPerPage,
      _ref$rowsPerPageOptio = _ref.rowsPerPageOptions,
      rowsPerPageOptions = _ref$rowsPerPageOptio === void 0 ? [32] : _ref$rowsPerPageOptio;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_core.TablePagination, {
    component: "div",
    onChangeRowsPerPage: onChangeRowsPerPage,
    onChangePage: onChangePage,
    count: meta.totalResults,
    page: meta.page - 1,
    rowsPerPage: meta.perPage,
    rowsPerPageOptions: rowsPerPageOptions,
    className: classes.root
  });
}

TablePaginatioStyled.propTypes = {
  meta: _propTypes["default"].shape({
    page: _propTypes["default"].number,
    perPage: _propTypes["default"].any,
    totalResults: _propTypes["default"].any
  }),
  onChangePage: _propTypes["default"].any
};