import { createMuiTheme } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";

const white = "#FFFFFF";
const black = "#000000";

const lightTheme = createMuiTheme({
  palette: {
    black,
    white,
    type: "light",
    primary: {
      main: "#ff7a59",
      contrastText: "rgba(255,255,255,0.87)",
      dark: "#cb644b",
      light: "#27aa35",
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
    secondary: {
      main: "#d84416",
    },
    status: {
      draft: "#BDBDBD",
      error: "#F44336",
      warning: "#FFC422",
      processing: "#4CAF50",
      refused: "#673AB7",
      readyToship: colors.deepOrange[300],
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: 14,
    htmlFontSize: 16,
    h1: {
      fontSize: "34px",
      fontWeight: "bold",
      letterSpacing: "72%",
    },
    h2: {
      fontSize: "24px",
      fontWeight: 500,
      letterSpacing: "100%",
    },
    h3: {
      fontSize: "20px",
      fontWeight: 500,
      letterSpacing: "129%",
    },
    subtitle1: {
      fontSize: "16px",
      letterSpacing: "96%",
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: "14px",
      letterSpacing: "67%",
      fontWeight: 600,
    },
    body1: {
      fontSize: "18px",
      fontWeight: 500,
    },
    body2: {
      fontSize: "12px",
      fontWeight: 400,
    },
    body3: {
      fontSize: "14px",
      fontWeight: 900,
    },
    caption: {
      fontWeight: 700,
      fontSize: "12px",
    },
    button: {
      fontSize: "14px",
      fontWeight: 600,
      textTransform: "uppercase",
      // letterSpacing: "0.2em",
    },
    overline: {
      fontSize: "12px",
      textTransform: "none",
      fontWeight: 500,
    },
  },
  overrides: {
    MuiButtonBase: {
      root: {
        fontSize: 14,
      },
    },
    MuiButton: {
      root: {
        textTransform: "normal",
        boxShadow: "none",
      },
      label: {
        textTransform: "none",
      },
      contained: {
        boxShadow: "none",
        "&:focus": {
          outline: "none",
        },
        "&:hover": {
          boxShadow: "none",
        },
      },
    },
  },
});

export default lightTheme;
