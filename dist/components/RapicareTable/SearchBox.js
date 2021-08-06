"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core/");

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["label", "name", "handleChange", "handleClick", "search", "value"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      padding: "2px 4px",
      display: "flex",
      height: 50,
      alignItems: "center",
      width: "100%",
      border: "1px solid #EBF0F5"
    },
    input: {
      color: "#85909B",
      fontSize: 14,
      marginLeft: theme.spacing(1),
      flex: 1,
      "&:focus": {
        boxShadow: "".concat((0, _styles.fade)(theme.palette.primary.main, 0.25), " 0 0 0 0.2rem"),
        borderColor: theme.palette.primary.main
      }
    },
    iconButton: {
      color: "#596775",
      padding: 10
    }
  };
});

var SearchBox = function SearchBox(_ref) {
  var label = _ref.label,
      name = _ref.name,
      handleChange = _ref.handleChange,
      handleClick = _ref.handleClick,
      search = _ref.search,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_core.Paper, {
    elevation: 0,
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement(_core.InputBase, _extends({
    className: classes.input,
    placeholder: label,
    inputProps: {
      "aria-label": label
    },
    name: name,
    onChange: handleChange,
    value: value
  }, props)), /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
    className: classes.iconButton,
    "aria-label": "search",
    onClick: handleClick
  }, /*#__PURE__*/_react["default"].createElement(_Search["default"], null)));
};

var _default = SearchBox;
exports["default"] = _default;
SearchBox.propTypes = {
  children: _propTypes["default"].any
};
SearchBox.defaultProps = {};