"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  colorSchemes: {
    dark: true,
    light: true,
  },
  cssVariables: {
    colorSchemeSelector: "class",
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
});

export default theme;
