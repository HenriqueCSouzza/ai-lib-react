"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core/");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ChipsGroup = function ChipsGroup(_ref) {
  var primaryText = _ref.primaryText,
      secondaryText = _ref.secondaryText;
  return /*#__PURE__*/_react["default"].createElement(_core.Box, null, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    text: primaryText
  }), /*#__PURE__*/_react["default"].createElement(_core.Box, {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "caption"
  }, secondaryText)));
};

var _default = ChipsGroup;
exports["default"] = _default;