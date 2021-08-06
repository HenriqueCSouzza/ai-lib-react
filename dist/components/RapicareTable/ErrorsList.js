"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ErrorsList;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _styles = require("@material-ui/core/styles");

var _red = _interopRequireDefault(require("@material-ui/core/colors/red"));

var _ErrorMessage = _interopRequireDefault(require("./ErrorMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      background: _red["default"][50],
      borderRadius: 4
    }
  };
});

function ErrorsList(_ref) {
  var errors = _ref.errors,
      _ref$sticky = _ref.sticky,
      sticky = _ref$sticky === void 0 ? false : _ref$sticky;
  var classes = useStyles();
  (0, _react.useEffect)(function () {
    if (typeof errors !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, [errors]);

  if (typeof errors === "undefined") {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    mb: 2,
    py: 1,
    pl: 1,
    align: "left",
    className: classes.root,
    style: {
      position: sticky && "sticky",
      top: sticky && 0
    }
  }, Object.keys(errors).map(function (k) {
    return /*#__PURE__*/_react["default"].createElement(_ErrorMessage["default"], {
      key: k
    }, errors[k]);
  }));
}

ErrorsList.propTypes = {
  errors: _propTypes["default"].any
};