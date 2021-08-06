"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputFieldCostumized = exports.InputField = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var useStyles = (0, _core.makeStyles)(function () {
  return {
    root: {
      fontSize: 12,
      "& input": {
        fontSize: 12
      },
      "& input::placeholder": {
        fontSize: 12
      }
    }
  };
});

var InputField = function InputField(props) {
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, props, {
    className: classes.root
  }));
};

exports.InputField = InputField;

var InputFieldCostumized = function InputFieldCostumized(props) {
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, props, {
    className: classes.root
  }));
};

exports.InputFieldCostumized = InputFieldCostumized;