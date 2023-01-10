/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./components/**/**/*.{js,jsx}",
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
          400: "#4E4C4C",
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
        "w3w-bold": ["W3W Bold", "sans-serif", ...defaultTheme.fontFamily.sans],
        "w3w-regular": [
          "W3W Regular",
          "sans-serif",
          ...defaultTheme.fontFamily.sans,
        ],
        "fira-code": [
          "Fira Code",
          "sans-serif",
          ...defaultTheme.fontFamily.sans,
        ],
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
  corePlugins: {
    container: false,
  },
  plugins: [
    // Plugin (Init)
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),

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

    // Background Cover Shadow
    ({ addUtilities }) => {
      addUtilities({
        ".bg-shadow-black": {
          background:
            "linear-gradient(180deg, rgba(30, 30, 30, 0) 0%, #1E1E1E 100%)",
        },
      });
    },

    // Buttons
    ({ addComponents, theme }) => {
      addComponents({
        ".btn": {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: theme("borderRadius.rounded"),
          fontFamily: theme("fontFamily.fira-code"),
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.bold"),
          outline: "none",
          position: "relative",
          paddingTop: theme("padding.3"),
          paddingBottom: theme("padding.3"),
          paddingLeft: theme("padding.3"),
          paddingRight: theme("padding.3"),
          width: theme("width.max"),
        },
        ".btn-xs": {
          fontSize: theme("fontSize.xs"),
          paddingTop: theme("padding.2"),
          paddingBottom: theme("padding.2"),
          paddingLeft: theme("padding.3"),
          paddingRight: theme("padding.3"),
        },
        ".btn-sm": {
          fontSize: theme("fontSize.sm"),
          paddingTop: theme("padding.3"),
          paddingBottom: theme("padding.3"),
          paddingLeft: theme("padding.6"),
          paddingRight: theme("padding.6"),
        },
        ".btn-base": {
          fontSize: theme("fontSize.sm"),
          paddingTop: theme("padding.4"),
          paddingBottom: theme("padding.4"),
          paddingLeft: theme("padding.8"),
          paddingRight: theme("padding.8"),
        },
        ".btn-lg": {
          fontSize: theme("fontSize.base"),
          paddingTop: theme("padding.6"),
          paddingBottom: theme("padding.6"),
          paddingLeft: theme("padding.8"),
          paddingRight: theme("padding.8"),
        },
        ".btn-pill": {
          borderRadius: theme("borderRadius.full"),
        },
        ".btn-square": {
          borderRadius: theme("borderRadius.none"),
        },
        ".btn-block": {
          width: theme("width.full"),
        },
        ".btn-max": {
          width: theme("width.max"),
        },
      });
    },

    // Buttons (Variants)
    ({ addComponents, theme }) => {
      addComponents({
        ".btn-primary": {
          backgroundColor: theme("backgroundColor.primary"),
          color: theme("colors.black.100"),
        },
        ".btn-outline-white": {
          backgroundColor: theme("backgroundColor.transparent"),
          borderWidth: "1px",
          borderColor: theme("borderColor.white"),
          color: theme("colors.white"),
        },
        ".btn-outline-primary": {
          backgroundColor: "rgba(18, 229, 130, 0.5)",
          borderWidth: "1px",
          borderColor: theme("borderColor.primary"),
          color: theme("colors.white"),
        },
      });
    },
  ],
};
