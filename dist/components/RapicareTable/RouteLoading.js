"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _PageLoading = _interopRequireDefault(require("./PageLoading"));

var _DelayedRender = _interopRequireDefault(require("./DelayedRender"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function RouteLoading(_ref) {
  var delay = _ref.delay,
      text = _ref.text,
      style = _ref.style;
  return /*#__PURE__*/_react["default"].createElement(_DelayedRender["default"], {
    delay: 1000
  }, /*#__PURE__*/_react["default"].createElement(_PageLoading["default"], null));
}

RouteLoading.propTypes = {
  delay: _propTypes["default"].any,
  style: _propTypes["default"].any,
  text: _propTypes["default"].any
};
var _default = RouteLoading;
exports["default"] = _default;