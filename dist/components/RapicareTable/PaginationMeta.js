"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _BodyText = _interopRequireDefault(require("./BodyText"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function PaginationMeta(_ref) {
  var meta = _ref.meta;
  var limit = meta.page === meta.totalPages ? meta.totalResults : meta.limit;
  return /*#__PURE__*/_react["default"].createElement(_BodyText["default"], {
    variant: "body2",
    type: "inherit"
  }, "Mostrando ", meta.offset === 0 ? 1 : meta.offset + 1, "-", limit, " de", " ", meta.totalResults, " registros");
}

PaginationMeta.propTypes = {
  meta: _propTypes["default"].shape({
    limit: _propTypes["default"].any,
    offset: _propTypes["default"].number,
    page: _propTypes["default"].any,
    totalPages: _propTypes["default"].any,
    totalResults: _propTypes["default"].any
  })
};
var _default = PaginationMeta;
exports["default"] = _default;