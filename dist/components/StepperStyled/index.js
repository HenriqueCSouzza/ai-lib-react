"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CustomizedSteppers;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _clsx3 = _interopRequireDefault(require("clsx"));

var _Stepper = _interopRequireDefault(require("@material-ui/core/Stepper"));

var _Step = _interopRequireDefault(require("@material-ui/core/Step"));

var _StepLabel = _interopRequireDefault(require("@material-ui/core/StepLabel"));

var _CheckCircleOutline = _interopRequireDefault(require("@material-ui/icons/CheckCircleOutline"));

var _CheckCircle = _interopRequireDefault(require("@material-ui/icons/CheckCircle"));

var _StepConnector = _interopRequireDefault(require("@material-ui/core/StepConnector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ColorlibConnector = (0, _styles.withStyles)(function (theme) {
  return {
    active: {
      "& $line": {
        borderColor: theme.palette.primary.main
      }
    },
    completed: {
      "& $line": {
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main
      }
    },
    line: {
      border: 1,
      borderStyle: "dashed",
      backgroundColor: "transparent",
      borderColor: "#99ACC2"
    }
  };
})(_StepConnector["default"]);
var useColorlibStepIconStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      cursor: "pointer",
      backgroundColor: "transparent",
      zIndex: 1,
      color: "#99ACC2"
    },
    active: {
      color: theme.palette.primary.main,
      "& .MuiStepLabel-label": {
        color: "#99ACC2",
        fontWeight: 700
      }
    },
    completed: {
      color: theme.palette.primary.main
    }
  };
});

function ColorlibStepIcon(props) {
  var _clsx;

  var classes = useColorlibStepIconStyles();
  var active = props.active,
      completed = props.completed;
  var icons = {
    1: /*#__PURE__*/_react["default"].createElement(_CheckCircleOutline["default"], null),
    2: /*#__PURE__*/_react["default"].createElement(_CheckCircleOutline["default"], null),
    3: /*#__PURE__*/_react["default"].createElement(_CheckCircleOutline["default"], null),
    4: /*#__PURE__*/_react["default"].createElement(_CheckCircleOutline["default"], null)
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx3["default"])(classes.root, (_clsx = {}, _defineProperty(_clsx, classes.active, active), _defineProperty(_clsx, classes.completed, completed), _clsx))
  }, completed ? /*#__PURE__*/_react["default"].createElement(_CheckCircle["default"], null) : icons[String(props.icon)]);
}

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      width: "100%",
      "& .MuiPaper-root": {
        backgroundColor: "transparent",
        color: "#99ACC2"
      },
      "& .MuiStepLabel-label": {
        color: "#99ACC2",
        fontWeight: 700
      }
    },
    active: {
      "& .MuiStepLabel-label": {
        color: theme.palette.primary.main,
        fontWeight: 700
      }
    },
    completed: {
      "& .MuiStepLabel-label": {
        color: "#516F90",
        fontWeight: 700
      }
    },
    button: {
      marginRight: theme.spacing(1)
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    }
  };
});

function CustomizedSteppers(_ref) {
  var steps = _ref.steps,
      activeStep = _ref.activeStep,
      handleStep = _ref.handleStep;
  var classes = useStyles();

  function getStepTitle(index) {
    return steps[index].title;
  }

  return steps && /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx3["default"])(classes.root)
  }, /*#__PURE__*/_react["default"].createElement(_Stepper["default"], {
    alternativeLabel: true,
    activeStep: activeStep,
    connector: /*#__PURE__*/_react["default"].createElement(ColorlibConnector, null)
  }, steps.map(function (label, index) {
    var _clsx2;

    return /*#__PURE__*/_react["default"].createElement(_Step["default"], {
      key: index,
      onClick: function onClick() {
        return handleStep(index);
      }
    }, /*#__PURE__*/_react["default"].createElement(_StepLabel["default"], {
      key: index,
      StepIconComponent: ColorlibStepIcon,
      className: (0, _clsx3["default"])((_clsx2 = {}, _defineProperty(_clsx2, classes.active, activeStep === index), _defineProperty(_clsx2, classes.completed, index < activeStep), _clsx2))
    }, getStepTitle(index)));
  })));
}