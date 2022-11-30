/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./public/assets/js/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,tsx}",
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
          400: "#383838",
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
        "w3w-bold": ["W3W Bold", "sans-serif"],
        "w3w-regular": ["W3W Regular", "sans-serif"],
        "fira-code": ["Fira Code", "sans-serif"],
      },
      letterSpacing: {
        tight: "-0.03em",
      },
      spacing: {
        14: "52px",
        15: "56px",
        18: "72px",
      },
      screens: {
        "1xl": "1440px",
        "2xl": "1530px",
        "3xl": "1908px",
        "4xl": "2110px",
        "5xl": "2526px",
        "max-sm": {
          max: "640px",
        },
        "max-md": {
          max: "768px",
        },
        "max-lg": {
          max: "1024px",
        },
        "max-xl": {
          max: "1280px",
        },
        "max-2xl": {
          max: "1440px",
        },
        "max-3xl": {
          max: "1920px",
        },
        "max-4xl": {
          max: "2560px",
        },
        "max-5xl": {
          max: "3840px",
        },
      },
      zIndex: {
        px: "1",
        0.5: "2",
        sm: "500",
        base: "1050",
        lg: "1550",
        xl: "2050",
        "2xl": "2550",
        "3xl": "5050",
        "4xl": "7550",
        "5xl": "9550",
      },
    },
  },
  plugins: [
    ({ addVariant }) => {
      addVariant("hocus", ["&:hover", "&:focus"]);
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

    // Buttons
    ({ addComponents, theme }) => {
      addComponents({
        ".btn": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "4px",
          fontFamily: theme("fontFamily.fira-code"),
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.bold"),
          outline: "none",
          paddingTop: theme("padding.3"),
          paddingBottom: theme("padding.3"),
          width: theme("width.max"),
        },
        ".btn-block": {
          width: theme("width.full"),
        },
        ".btn-max": {
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
        ".btn-primary": {
          backgroundColor: theme("backgroundColor.green.500"),
          color: theme("colors.black.100"),
        },
        ".btn-outline-white": {
          backgroundColor: theme("backgroundColor.transparent"),
          borderWidth: "1px",
          borderColor: theme("borderColor.white"),
          color: theme("colors.white"),
        },
      });
    },
  ],
};
