"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Icon;

var _core = require("@material-ui/core/");

var _styles = require("@material-ui/core/styles");

var _excluded = ["icon", "size", "display", "verticalAlign"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      "& svg": {
        verticalAlign: "middle"
      }
    }
  };
});

function Icon(_ref) {
  var icon = _ref.icon,
      size = _ref.size,
      _ref$display = _ref.display,
      display = _ref$display === void 0 ? "inline-block" : _ref$display,
      _ref$verticalAlign = _ref.verticalAlign,
      verticalAlign = _ref$verticalAlign === void 0 ? "middle" : _ref$verticalAlign,
      props = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  var isSizeMappable = typeof size !== "string";
  var sizeMapping = {
    small: 14,
    medium: 16,
    large: 20
  };
  var finalSize = isSizeMappable ? sizeMapping[size] : size;
  return /*#__PURE__*/React.createElement(_core.Box, {
    className: classes.root,
    style: {
      width: finalSize,
      height: finalSize,
      verticalAlign: verticalAlign
    },
    display: display
  }, icon);
}