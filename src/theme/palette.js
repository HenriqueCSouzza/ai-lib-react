import { colors } from "@material-ui/core";

const white = "#FFFFFF";
const black = "#000000";

const palette = {
  black,
  white,
  cyan: {
    light: "#91D7E3",
    main: "#00A4BD",
  },
  appBarColor: {
    borderLeftColor: black,
    primaryColor: black,
    secondaryColor: "#607D8B",
    lightColor: "#BDBDBD",
    secondaryLigthColor: "#B0BEC5",
    backgroundDefault: "#F5F5F5",
  },
  generalColor: {
    light: colors.grey[50],
    surface: colors.grey[100],
    surMedium: "#ebebeb",
    medium: colors.grey[200],
    medMain: colors.grey[300],
    main: colors.grey[500],
    text: "#757575",
    dark: colors.grey[800],
    darkest: colors.grey[900],
  },
  status: {
    draft: "#BDBDBD",
    error: "#F44336",
    warning: "#FFC422",
    processing: "#4CAF50",
    refused: "#673AB7",
    readyToship: colors.deepOrange[300],
  },
  newPrimary: {
    main: "#596775",
  },
  calypso: {
    main: "#00A4BD",
  },
  lorax: {
    main: "#FF7A59",
  },
  oz: {
    main: "#00BDA5",
  },
  thuderdome: {
    main: "#6A78D1",
  },
  candyApple: {
    main: "#F2545B",
  },
  norman: {
    main: "#F2547D",
  },
  sorbet: {
    main: "#FF8F59",
  },
  mariGold: {
    main: "#F5C26B",
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
    900: "#2D3E50",
  },
  primary: {
    light: "#dff1d5",
    main: "#00A100",
  },
  secondary: {
    light: "#4E8A83",
    main: "#04594F",
    dark: "#113033",
  },

  get background() {
    return { default: "#fff" };
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
    },
  },
};

export default palette;
