"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DropdownMenu;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _NavLinkHelper = _interopRequireDefault(require("./NavLinkHelper"));

var _excluded = ["items", "segmentPosition"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    paper: {
      overflow: "visible",
      marginTop: theme.spacing(1),
      "&:before": {
        width: 0,
        height: 0,
        content: '""',
        borderLeft: "".concat(theme.spacing(2), "px solid transparent"),
        borderRight: "".concat(theme.spacing(2), "px solid transparent"),
        borderBottom: "".concat(theme.spacing(2), "px solid ").concat(theme.palette.common.white),
        position: "absolute",
        top: "-".concat(theme.spacing(1), "px")
      },
      "&.segment-right:before": {
        right: theme.spacing(1)
      },
      "&.segment-center:before": {
        left: "50%",
        transform: "translate(-50%, 0)"
      }
    }
  };
});

function DropdownMenu(_ref) {
  var items = _ref.items,
      segmentPosition = _ref.segmentPosition,
      props = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_core.Menu, _extends({
    getContentAnchorEl: null,
    variant: "menu",
    classes: {
      paper: (0, _clsx["default"])(classes.paper, segmentPosition && "segment-".concat(segmentPosition))
    },
    autoFocus: false,
    elevation: 3
  }, props), items.map(function (item, i) {
    return item === "divider" ? /*#__PURE__*/_react["default"].createElement(_core.Divider, {
      key: "".concat(i, "-").concat(i)
    }) : /*#__PURE__*/_react["default"].createElement(_core.MenuItem, {
      key: i,
      component: _NavLinkHelper["default"],
      to: item.to,
      onClick: props.onClose,
      dense: true
    }, item.label);
  }));
}