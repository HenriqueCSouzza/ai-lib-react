"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TopbarCaret;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      verticalAlign: 'middle',
      color: theme.palette.common.white
    },
    smallSize: {
      width: '0.75em',
      height: '0.75em'
    },
    mediumSize: {
      width: '0.9em',
      height: '0.9em'
    }
  };
});

function TopbarCaret(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'small' : _ref$size;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_ExpandMore["default"], {
    className: (0, _clsx["default"])(classes.root, classes["".concat(size, "Size")])
  });
}