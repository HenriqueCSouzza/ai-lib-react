"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _dateFns = _interopRequireDefault(require("@date-io/date-fns"));

var _ptBR = _interopRequireDefault(require("date-fns/locale/pt-BR"));

var _pickers = require("@material-ui/pickers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var isWeekDay = function isWeekDay(date) {
  return date.getDay() === 6 || date.getDay() === 0 ? false : true;
};

function DatePicker(_ref) {
  var changeDate = _ref.changeDate,
      initialDate = _ref.initialDate,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? "adicionar label" : _ref$label,
      classe = _ref.classe,
      className = _ref.className,
      _ref$minDateMessage = _ref.minDateMessage,
      minDateMessage = _ref$minDateMessage === void 0 ? "Data fora do prazo de entrega, favor mudar!" : _ref$minDateMessage,
      _ref$invalidDateMessa = _ref.invalidDateMessage,
      invalidDateMessage = _ref$invalidDateMessa === void 0 ? "Selecione uma data" : _ref$invalidDateMessa,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "inline" : _ref$variant,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? "dd/MM/yyyy" : _ref$format,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? "picker" : _ref$id;

  var _useState = (0, _react.useState)(initialDate),
      _useState2 = _slicedToArray(_useState, 2),
      selectedDate = _useState2[0],
      setSelectedDate = _useState2[1];

  var handleDateChange = function handleDateChange(date) {
    setSelectedDate(date);
    changeDate(date);
  };

  return /*#__PURE__*/_react["default"].createElement(_pickers.MuiPickersUtilsProvider, {
    utils: _dateFns["default"],
    locale: _ptBR["default"]
  }, /*#__PURE__*/_react["default"].createElement(_pickers.KeyboardDatePicker, {
    autoOk: true,
    disableToolbar: true,
    margin: "normal",
    variant: variant,
    format: format,
    id: "date-picker-".concat(id),
    KeyboardButtonProps: {
      "aria-label": "change date"
    },
    style: {
      margin: 0
    },
    label: label,
    locale: _ptBR["default"],
    inputVariant: "outlined",
    minDate: minDate,
    maxDate: maxDate,
    minDateMessage: minDateMessage,
    invalidDateMessage: invalidDateMessage,
    value: selectedDate,
    onChange: handleDateChange,
    classe: classe,
    className: className,
    renderDay: function renderDay(day, selectedDate, dayInCurrentMonth, dayComponent) {
      if (isWeekDay(day)) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, dayComponent);
      } else {
        return null;
      }
    }
  }));
}

DatePicker.propTypes = {
  changeDate: _propTypes["default"].func,
  initialDate: _propTypes["default"].object,
  maxDate: _propTypes["default"].any,
  minDate: _propTypes["default"].any
};
var _default = DatePicker;
exports["default"] = _default;