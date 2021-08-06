"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FormErrorMessage;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _BodyText = _interopRequireDefault(require("./BodyText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function FormErrorMessage(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_BodyText["default"], {
    type: "error",
    mb: 3,
    style: {
      minHeight: 21
    }
  }, children);
}

FormErrorMessage.propTypes = {
  children: _propTypes["default"].any
};