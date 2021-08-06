"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _excluded = ["children", "noSpan", "fraction"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Money(_ref) {
  var children = _ref.children,
      _ref$noSpan = _ref.noSpan,
      noSpan = _ref$noSpan === void 0 ? false : _ref$noSpan,
      _ref$fraction = _ref.fraction,
      fraction = _ref$fraction === void 0 ? 2 : _ref$fraction,
      props = _objectWithoutProperties(_ref, _excluded);

  var formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: fraction
  });

  if (noSpan) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, formatter.format(children));
  }

  return /*#__PURE__*/_react["default"].createElement("span", props, formatter.format(children));
}

Money.propTypes = {
  children: _propTypes["default"].any
};
var _default = Money;
exports["default"] = _default;