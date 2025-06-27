import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetWind3,
} from "unocss";

export default defineConfig({
  theme: {
    colors: {
      primary: "var(--mui-palette-primary-main)",
    },
    spacing: {
      none: "0", // 0px - 0
      xs: "0.25rem", // 4px - 1
      sm: "0.5rem", // 8px - 2
      md: "0.75rem", // 12px -3
      lg: "1rem", // 16px - 4
      xl: "1.5rem", // 24px - 6
      "2xl": "2rem", // 32px - 8
      "3xl": "3rem", // 48px - 12
      "4xl": "4rem", // 64px - 16
      "5xl": "5rem", // 80px - 20
      "6xl": "6rem", // 96px - 24
      "7xl": "7rem", // 112px - 28
    },
    boxShadow: {
      // dark: '0 4px 10px rgba(255, 255, 255, 0.15), 0 2px 6px rgba(255, 255, 255, 0.1)',
      // light: '0 4px 12px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.2)',
      light: "0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.1)",
    },
    borderRadius: {
      DEFAULT: "6px",
      full: "9999px",
      sm: "4px",
      md: "6px",
      lg: "8px",
      xl: "12px",
      "2xl": "16px",
      round: "2rem",
    },
    fontFamily: {
      redHat: "'Red Hat Display', sans-serif",
    },
  },

  presets: [
    presetWind3({
      dark: "class",
    }),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetTypography(),
  ],
  safelist: ["dark"], // Ensure the dark mode class is always available
});
