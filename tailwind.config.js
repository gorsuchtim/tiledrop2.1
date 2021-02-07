module.exports = {
  purge: ["src/**/*.html", "src/**/*.js", "src/**/*.jsx"],
  theme: {
    screens: {
      sm: "460px",
      md: "768px",
      lg: "1280px"
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      red: "#d80a07",
      green: "#027e17",
      orange: "#ffa53c",
      teal: "#05d4e1",

      "blue--primary": "#20e4ff",
      "pink--primary": "#e33cc7"
    },
    spacing: {
      full: "100%",

      0: "0px",
      2: "2px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      12: "12px",
      16: "16px",
      20: "20px",
      24: "24px",
      28: "28px",
      32: "32px",
      36: "36px",
      40: "40px",
      44: "44px",
      48: "48px",
      56: "56px",
      68: "68px",
      64: "64px",
      72: "72px",
      80: "80px",
      84: "84px",
      88: "88px",
      104: "104px",
      120: "120px",
      144: "144px",
      476: "476px"
    },
    borderColor: theme => ({
      ...theme("colors")
    }),

    borderRadius: {
      full: "9999px",
      0: "0px",
      2: "2px",
      4: "4px",
      6: "6px",
      8: "8px",
      16: "16px"
    },

    borderWidth: {
      default: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      8: "8px"
    },

    boxShadow: {
      none: "none",
      hover:
        "0 2px 4px -1px rgba(50, 80, 112, 0.2), 0 8px 10px 1px rgba(50, 80, 112, 0.14), 0 3px 14px 2px rgba(50, 80, 112, 0.12)",
      primary:
        "0 2px 4px -1px rgba(50, 80, 112, 0.2), 0 4px 6px 0 rgba(50, 80, 112, 0.14), 0 1px 10px 0 rgba(50, 80, 112, 0.12)",
      "lit--blue":
        "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228dff, 0 0 70px #228dff, 0 0 80px #228dff, 0 0 100px #228dff, 0 0 150px #228dff",
      "lit--green":
        "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #5aff18, 0 0 70px #5aff18, 0 0 80px #5aff18, 0 0 100px #5aff18, 0 0 150px #5aff18",
      "lit--white":
        "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px white, 0 0 70px white, 0 0 80px white, 0 0 100px white, 0 0 150px white"
    },

    fontSize: {
      0: 0,
      8: "8px",
      9: "9px",
      10: "10px",
      12: "12px",
      13: "13px",
      14: "14px",
      15: "15px",
      16: "16px",
      18: "18px",
      20: "20px",
      22: "22px",
      24: "24px",
      28: "28px",
      32: "32px",
      36: "36px",
      40: "40px",
      48: "48px",
      64: "64px",
      92: "92px"
    },

    fontWeight: {
      100: "100",
      200: "200",
      300: "300",
      400: "400",
      500: "500",
      600: "600",
      700: "700",
      800: "800",
      900: "900"
    },

    gradientColorStops: theme => ({
      ...theme("colors")
    }),

    height: theme => ({
      auto: "auto",
      ...theme("spacing"),
      full: "100%",
      screen: "100vh"
    }),

    margin: (theme, { negative }) => ({
      auto: "auto",
      ...theme("spacing"),
      ...negative(theme("spacing"))
    }),

    maxHeight: theme => ({
      none: "none",
      full: "100%",
      screen: "100vh",
      ...theme("spacing")
    }),

    maxWidth: (theme, { breakpoints }) => ({
      none: "none",
      full: "100%",
      ...theme("spacing"),
      ...breakpoints(theme("screens"))
    }),

    minHeight: theme => ({
      0: "0",
      full: "100%",
      ...theme("spacing")
    }),

    minWidth: theme => ({
      0: "0",
      full: "100%",
      ...theme("spacing")
    }),

    opacity: {
      0: "0",
      20: "0.20",
      24: "0.24",
      25: "0.25",
      35: "0.35",
      36: "0.36",
      40: "0.40",
      50: "0.50",
      60: "0.60",
      64: "0.64",
      65: "0.65",
      70: "0.70",
      75: "0.75",
      100: "1"
    },

    padding: theme => theme("spacing"),
    space: (theme, { negative }) => ({
      ...theme("spacing"),
      ...negative(theme("spacing"))
    }),

    textColor: theme => theme("colors"),

    width: theme => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
      screen: "100vw"
    }),

    scale: {
      0: "0",
      50: ".5",
      75: ".75",
      80: ".8",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      130: "1.3",
      150: "1.5"
    }
  },
  variants: {}
};
