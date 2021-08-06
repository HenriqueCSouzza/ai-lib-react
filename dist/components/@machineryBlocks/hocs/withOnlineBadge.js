"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Badge = _interopRequireDefault(require("@material-ui/core/Badge"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styledBy = function styledBy(property, mapping) {
  return function (props) {
    return mapping[props[property]];
  };
};

var StyledBadge = (0, _styles.withStyles)(function (theme) {
  return {
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: styledBy('background', {
        "default": "0 0 0 2px ".concat(theme.palette.background.paper),
        secondary: "0 0 0 2px ".concat(theme.palette.secondary.main),
        primary: "0 0 0 2px ".concat(theme.palette.secondary.primary)
      })
    }
  };
})(_Badge["default"]);

var withOnlineBadge = function withOnlineBadge(WrappedComponent) {
  var background = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
  return function (_ref) {
    var props = _extends({}, _ref);

    return /*#__PURE__*/_react["default"].createElement(StyledBadge, {
      overlap: "circle",
      background: background,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
      },
      variant: "dot"
    }, /*#__PURE__*/_react["default"].createElement(WrappedComponent, props));
  };
};

var _default = withOnlineBadge;
exports["default"] = _default;