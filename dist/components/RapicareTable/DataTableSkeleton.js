"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DataTableSkeleton;

var _react = _interopRequireDefault(require("react"));

var _Skeleton = _interopRequireDefault(require("@material-ui/lab/Skeleton"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function DataTableSkeleton(_ref) {
  var _ref$lines = _ref.lines,
      lines = _ref$lines === void 0 ? 10 : _ref$lines;
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    px: 3,
    pt: 2
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    align: "right",
    mb: 3
  }, /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], {
    variant: "text",
    width: "100%",
    animation: "wave"
  })), new Array(lines).fill(null).map(function () {
    return /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], {
      variant: "text",
      key: Math.random(15),
      height: 50,
      animation: "wave"
    });
  }));
}