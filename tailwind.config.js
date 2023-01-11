/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./components/**/*.{js,jsx}",
    "./layouts/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#12E582",
        black: {
          50: "#2C2A2A",
          100: "#1E1E1E",
          900: "#000000",
        },
        gray: {
          100: "#555555",
          300: "#272727",
          // 400: "#878787",
          400: "#A8A8A8",
          500: "#C0C0C0",
          600: "#7B7B7B",
          700: "#757575",
          800: "#2B2B2B",
        },
        green: {
          500: "#12E582",
        },
      },
      fontFamily: {
        "w3w-bold": ["W3W Bold", ...defaultTheme.fontFamily.sans],
        "w3w-regular": ["W3W Regular", ...defaultTheme.fontFamily.sans],
        "fira-code": ["Fira Code", ...defaultTheme.fontFamily.sans],
      },
      lineHeight: {
        initial: "initial",
        inherit: "inherit",
        unset: "unset",
      },
      letterSpacing: {
        wide: "0.015em",
        tight: "-0.03em",
      },
      spacing: {
        4.5: "18px",
        13: "52px",
        14: "52px",
        15: "56px",
        18: "72px",
        22: "86px",
        34: "136px",
      },
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        14: "14",
        15: "15",
      },
      screens: {
        xxs: "381px",
        xs: "419px",
        "3xl": "1908px",
        "4xl": "2110px",
        "5xl": "2526px",
      },
      zIndex: {
        px: "1",
        0.5: "2",
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
        sm: "509",
        base: "1053",
        lg: "1557",
        xl: "2045",
        "2xl": "2476",
        "3xl": "3051",
        "4xl": "3677",
        "5xl": "4731",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),

    // Variant
    ({ addVariant }) => {
      addVariant("hocus", ["&:hover", "&:focus"]);
      addVariant("supports-grid", "@supports (display: grid)");
    },

    // Container
    ({ addComponents }) => {
      addComponents({
        ".container": {
          padding: "0 16px",
          margin: "0 auto",
          width: "100%",
          maxWidth: "100%",

          "@screen sm": [
            {
              padding: "0 0",
              maxWidth: "640px",
            },
          ],
          "@screen md": {
            maxWidth: "700px",
          },
          "@screen lg": {
            maxWidth: "924px",
          },
          "@screen xl": {
            maxWidth: "1246px",
          },
          "@screen 2xl": {
            maxWidth: "1312px",
          },
        },
      });
    },

    // Word Break
    ({ addUtilities }) => {
      addUtilities({
        ".break-area": {
          wordBreak: "break-word",
        },
      });
    },
  ],
};
