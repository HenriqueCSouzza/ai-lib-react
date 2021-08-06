"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Container;

var _styles = require("@material-ui/core/styles");

var _excluded = ["children"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6)
    }
  };
});

function Container(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, children);
}