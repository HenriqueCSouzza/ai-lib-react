"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@material-ui/core");

var white = "#FFFFFF";
var black = "#000000";
var palette = {
  black: black,
  white: white,
  cyan: {
    light: "#91D7E3",
    main: "#00A4BD"
  },
  appBarColor: {
    borderLeftColor: black,
    primaryColor: black,
    secondaryColor: "#607D8B",
    lightColor: "#BDBDBD",
    secondaryLigthColor: "#B0BEC5",
    backgroundDefault: "#F5F5F5"
  },
  generalColor: {
    light: _core.colors.grey[50],
    surface: _core.colors.grey[100],
    surMedium: "#ebebeb",
    medium: _core.colors.grey[200],
    medMain: _core.colors.grey[300],
    main: _core.colors.grey[500],
    text: "#757575",
    dark: _core.colors.grey[800],
    darkest: _core.colors.grey[900]
  },
  status: {
    draft: "#BDBDBD",
    error: "#F44336",
    warning: "#FFC422",
    processing: "#4CAF50",
    refused: "#673AB7",
    readyToship: _core.colors.deepOrange[300]
  },
  newPrimary: {
    main: "#596775"
  },
  calypso: {
    main: "#00A4BD"
  },
  lorax: {
    main: "#FF7A59"
  },
  oz: {
    main: "#00BDA5"
  },
  thuderdome: {
    main: "#6A78D1"
  },
  candyApple: {
    main: "#F2545B"
  },
  norman: {
    main: "#F2547D"
  },
  sorbet: {
    main: "#FF8F59"
  },
  mariGold: {
    main: "#F5C26B"
  },
  grey: {
    50: "#F5F8FA",
    100: "#EAF0F6",
    200: "#DFE3EB",
    300: "#CBD6E2",
    400: "#99ACC2",
    500: "#7C98B6",
    600: "#516F90",
    700: "#425B76",
    800: "#33475B",
    900: "#2D3E50"
  },
  primary: {
    light: "#dff1d5",
    main: "#00A100"
  },
  secondary: {
    light: "#4E8A83",
    main: "#04594F",
    dark: "#113033"
  },

  get background() {
    return {
      "default": "#fff"
    };
  },

  text: {
    get primary() {
      return palette.grey[800];
    },

    get secondary() {
      return palette.grey[600];
    },

    get hint() {
      return palette.grey[400];
    }

  }
};
var _default = palette;
exports["default"] = _default;