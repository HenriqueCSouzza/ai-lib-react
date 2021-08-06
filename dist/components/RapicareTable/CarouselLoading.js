"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _clean = _interopRequireDefault(require("../../assets/loading/clean.svg"));

var _flask = _interopRequireDefault(require("../../assets/loading/flask.svg"));

var _garbage = _interopRequireDefault(require("../../assets/loading/garbage.svg"));

var _injection = _interopRequireDefault(require("../../assets/loading/injection.svg"));

var _pills = _interopRequireDefault(require("../../assets/loading/pills.svg"));

var _soap = _interopRequireDefault(require("../../assets/loading/soap.svg"));

var _stethoscope = _interopRequireDefault(require("../../assets/loading/stethoscope.svg"));

var _thermometer = _interopRequireDefault(require("../../assets/loading/thermometer.svg"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      width: "120px",
      height: "100px",
      margin: "auto",
      "& span": {
        display: "block",
        width: "100%",
        textAlign: "center",
        lineHeight: "100%",
        marginTop: theme.spacing(2)
      }
    },
    image: {
      textAlign: "center",
      "& img": {
        width: "50px",
        height: "60px",
        fontSize: "40px",
        textAlign: "center",
        transformOrigin: "bottom center",
        animation: "3s $animaLoading infinite",
        opacity: 0,
        filter: "invert(56%) sepia(7%) saturate(1346%) hue-rotate(155deg) brightness(82%) contrast(89%)"
      }
    },
    "@keyframes animaLoading": {
      "0%": {
        transform: "rotate(90deg)"
      },
      "10%": {
        opacity: 0
      },
      "35%": {
        transform: "rotate(0deg)",
        opacity: 1
      },
      "65%": {
        transform: "rotate(0deg)",
        opacity: 1
      },
      "80%": {
        opacity: 0
      },
      "100%": {
        transform: "rotate(-90deg)"
      }
    }
  };
});

function CarouselLoading(_ref) {
  var delay = _ref.delay,
      text = _ref.text,
      style = _ref.style;
  var images = [_clean["default"], _flask["default"], _garbage["default"], _injection["default"], _pills["default"], _soap["default"], _stethoscope["default"], _thermometer["default"]];

  var _useState = (0, _react.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      imageIndex = _useState2[0],
      setImageIndex = _useState2[1];

  (0, _react.useEffect)(function () {
    var interval = setInterval(function () {
      imageEl.current.webkitAnimationPlayState = "paused";
      setImageIndex(function (i) {
        return i < images.length - 1 ? i + 1 : 0;
      });
    }, 3000);
    return function () {
      return clearInterval(interval);
    };
  }, [images.length]);
  (0, _react.useEffect)(function () {
    imageEl.current.webkitAnimationPlayState = "running";
  }, [imageIndex]);
  var imageEl = (0, _react.useRef)(null);
  var styles = useStyles();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: styles.root,
    style: style
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: styles.image
  }, /*#__PURE__*/_react["default"].createElement("img", {
    ref: imageEl,
    src: images[imageIndex],
    alt: "".concat(images[imageIndex])
  })), /*#__PURE__*/_react["default"].createElement("span", null, text));
}

CarouselLoading.propTypes = {
  delay: _propTypes["default"].number,
  style: _propTypes["default"].any,
  text: _propTypes["default"].string
};
var _default = CarouselLoading;
exports["default"] = _default;