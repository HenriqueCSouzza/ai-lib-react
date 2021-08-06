"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Message;

var _react = _interopRequireDefault(require("react"));

var _notistack = require("notistack");

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Message() {
  var _useSnackbar = (0, _notistack.useSnackbar)(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  var notification = (0, _reactRedux.useSelector)(function (_ref) {
    var notification = _ref.notification;
    return notification.message;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  _react["default"].useEffect(function () {
    var open = notification.open,
        message = notification.message,
        type = notification.type;

    if (open) {
      enqueueSnackbar(message, {
        variant: type,
        anchorOrigin: {
          vertical: "top",
          horizontal: "center"
        },
        autoHideDuration: 2000
      });
    }
  }, [enqueueSnackbar, notification, dispatch]);

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
}