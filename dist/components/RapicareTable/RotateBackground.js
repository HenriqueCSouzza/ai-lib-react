"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RotateBackground;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function RotateBackground(_ref) {
  var children = _ref.children,
      images = _ref.images,
      background = _ref.background,
      opacity = _ref.opacity;
  var random = Math.floor(Math.random() * images.length);
  var image = images[random];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      position: "fixed",
      backgroundImage: "url(".concat(image, ")"),
      backgroundRepeat: "no-repeat",
      backgroundColor: "#666",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }, children, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      position: "fixed",
      top: 0,
      left: 0,
      backgroundColor: background,
      opacity: opacity,
      zIndex: -1
    }
  })));
}

RotateBackground.propTypes = {
  background: _propTypes["default"].any,
  children: _propTypes["default"].any,
  images: _propTypes["default"].any,
  opacity: _propTypes["default"].any
};