import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", // Primary color
      light: "#63a4ff", // Optional: lighter shade of primary color
      dark: "#004ba0", // Optional: darker shade of primary color
      contrastText: "#ffffff", // Optional: text color on primary color
    },
    secondary: {
      main: "#f50057", // Secondary color
      light: "#ff5983", // Optional: lighter shade of secondary color
      dark: "#bb002f", // Optional: darker shade of secondary color
      contrastText: "#ffffff", // Optional: text color on secondary color
    },
    // Add additional colors as needed
    error: {
      main: "#d32f2f",
    },
    warning: {
      main: "#ffa726",
    },
    info: {
      main: "#0288d1",
    },
    success: {
      main: "#2e7d32",
    },
  },
});

export default theme;
