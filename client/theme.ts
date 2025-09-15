import { createTheme } from "@mui/material/styles";

const brandBlue = {
  900: "#01161e",
  700: "#124559",
  500: "#598392",
  300: "#aec3b0",
  100: "#eff6e0",
};
const brandGreen = {
  500: "#56e39f",
  400: "#59c9a5",
};

export const theme = createTheme({
  palette: {
    primary: { main: brandGreen[500], contrastText: brandBlue[900] },
    secondary: { main: brandBlue[700] },
    background: { default: brandBlue[100], paper: "#ffffff" },
    text: { primary: brandBlue[900], secondary: brandBlue[500] },
    success: { main: brandGreen[400] },
    info: { main: brandBlue[500] },
  },
  typography: {
    fontFamily:
      'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
    h1: { fontWeight: 800, letterSpacing: -0.5 },
    h2: { fontWeight: 700, letterSpacing: -0.25 },
    h3: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 700 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 12, paddingInline: 18 },
        containedPrimary: { boxShadow: "0 6px 20px rgba(86, 227, 159, 0.35)" },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: "saturate(1.2) blur(12px)",
          background: "rgba(255,255,255,0.6)",
        },
      },
    },
    MuiPaper: { styleOverrides: { root: { borderRadius: 16 } } },
  },
});
export default theme;
