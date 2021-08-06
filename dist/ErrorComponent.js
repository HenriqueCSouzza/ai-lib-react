"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colors = require("@material-ui/core/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ErrorComponent = function ErrorComponent(_ref) {
  var error = _ref.error,
      description = _ref.description;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.root
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    style: styles.error
  }, error), /*#__PURE__*/_react["default"].createElement("h4", {
    style: styles.description
  }, description));
};

var styles = {
  root: {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "0% 30%",
    boxSizing: "border-box",
    backgroundColor: _colors.red[300],
    textAlign: "center",
    fontFamily: "arial"
  },
  error: {
    fontSize: 100,
    fontWeight: 700,
    margin: 0
  },
  description: {
    fontSize: 40,
    fontWeight: 100,
    margin: 0
  }
};
ErrorComponent.propTypes = {
  error: _propTypes["default"].number,
  description: _propTypes["default"].string
};
var _default = ErrorComponent;
exports["default"] = _default;