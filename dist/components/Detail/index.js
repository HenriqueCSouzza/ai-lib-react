"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Money = _interopRequireDefault(require("@components/RapicareTable/Money"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Detail = function Detail(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "default" : _ref$type,
      value = _ref.value;
  var colors = {
    expansive: "#F2545B",
    cheap: "#00BDA5",
    "default": "#2D3E50"
  };
  return /*#__PURE__*/_react["default"].createElement(_Money["default"], {
    style: {
      color: colors[type]
    }
  }, value);
};

var _default = Detail;
exports["default"] = _default;