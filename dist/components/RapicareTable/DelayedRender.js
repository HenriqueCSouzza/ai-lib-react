"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _useDelayedRender = _interopRequireDefault(require("../../hooks/useDelayedRender"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function DelayedRender(_ref) {
  var delay = _ref.delay,
      children = _ref.children;
  return (0, _useDelayedRender["default"])(delay)(function () {
    return children;
  });
}

var _default = DelayedRender;
exports["default"] = _default;