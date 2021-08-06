"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _reactRouterDom = require("react-router-dom");

var _core = require("@material-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      color: theme.palette.calypso.main,
      fontWeight: 500,
      '&:hover': {
        textDecoration: 'underline'
      }
    }
  };
});

var Link = function Link(_ref) {
  var to = _ref.to,
      href = _ref.href,
      target = _ref.target,
      component = _ref.component,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      color = _ref.color,
      underline = _ref.underline,
      onClick = _ref.onClick,
      children = _ref.children,
      className = _ref.className,
      id = _ref.id;
  var sizeMapping = {
    small: 'caption',
    medium: 'body2',
    large: 'body1'
  };
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_core.Link, {
    className: (0, _clsx["default"])(classes.root, className),
    href: href,
    to: to,
    target: target,
    component: onClick && 'button' || to && _reactRouterDom.Link || href && 'a',
    color: color,
    variant: sizeMapping[size],
    underline: underline,
    onClick: onClick,
    id: id
  }, children);
};

var _default = Link;
exports["default"] = _default;
Link.propTypes = {
  children: _propTypes["default"].any,
  href: _propTypes["default"].string,
  target: _propTypes["default"].string,
  component: _propTypes["default"].string,
  color: _propTypes["default"].string,
  variant: _propTypes["default"].string,
  underline: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  id: _propTypes["default"].string
};
Link.defaultProps = {
  children: 'teste',
  component: 'button',
  color: 'primary',
  variant: 'body1',
  underline: 'none'
};