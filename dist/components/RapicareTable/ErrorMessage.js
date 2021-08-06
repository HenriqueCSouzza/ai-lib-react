"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core/");

var _red = _interopRequireDefault(require("@material-ui/core/colors/red"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ErrorMessage(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "body1",
    style: {
      color: _red["default"][300]
    }
  }, children);
}

ErrorMessage.propTypes = {
  children: _propTypes["default"].any
};
var _default = ErrorMessage;
exports["default"] = _default;