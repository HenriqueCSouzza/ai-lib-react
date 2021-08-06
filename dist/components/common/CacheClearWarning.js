"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CacheClearWarning;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _reactClearCache = _interopRequireDefault(require("react-clear-cache"));

var _Snackbar = _interopRequireDefault(require("@material-ui/core/Snackbar"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _BodyText = _interopRequireDefault(require("@/components/RapicareTable/BodyText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    dialog: {
      border: "1px solid ".concat(theme.palette.grey[400])
    }
  };
});

function CacheClearWarning(_ref) {
  var basePath = _ref.basePath;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_reactClearCache["default"], {
    basePath: basePath
  }, function (_ref2) {
    var isLatestVersion = _ref2.isLatestVersion,
        emptyCacheStorage = _ref2.emptyCacheStorage;
    return !isLatestVersion && /*#__PURE__*/_react["default"].createElement(_Snackbar["default"], {
      open: true,
      anchorOrigin: {
        vertical: "top",
        horizontal: "left"
      },
      style: {
        maxWidth: 320
      }
    }, /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
      elevation: 4,
      className: classes.dialog
    }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      p: 3
    }, /*#__PURE__*/_react["default"].createElement(_BodyText["default"], {
      variant: "subtitle1"
    }, /*#__PURE__*/_react["default"].createElement("b", null, "Aplica\xE7\xE3o atualizada"), " ", /*#__PURE__*/_react["default"].createElement("span", {
      role: "img",
      "aria-label": "happy emotion"
    }, "\uD83C\uDF89")), /*#__PURE__*/_react["default"].createElement(_BodyText["default"], {
      type: "disabled"
    }, "O aplicativo foi atualizado e a p\xE1gina precisa ser recarregada."), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      mt: 2,
      textAlign: "right"
    }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      variant: "secondary",
      onClick: function onClick(e) {
        e.preventDefault();
        emptyCacheStorage();
      }
    }, "Atualizar vers\xE3o")))));
  });
}