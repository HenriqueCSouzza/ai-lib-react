"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Copyright;

var _react = _interopRequireDefault(require("react"));

var _BodyText = _interopRequireDefault(require("./BodyText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Copyright() {
  var d = new Date();
  return /*#__PURE__*/_react["default"].createElement(_BodyText["default"], {
    variant: "caption",
    type: "white",
    align: "center",
    component: "div"
  }, "\xA9 ", d.getFullYear(), " - Zaga S/A - Todos os direitos reservados");
}