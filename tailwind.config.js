/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./design-system/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        "home-hero": "url('/images/HomeHeaderSvg.svg')",
        header: "url('/images/header.svg')",
        homeAboutUs: "url('/images/home/home_aboutUs_firstIlls.svg')",
        blogHero: "url('/images/about/header-top.svg')",
        footer: "url('/images/footer/Footer.svg')",
        "gradient-radial": "radial-gradient(#FFFFFF,#F3BFCF,#F3BFCF,#F3BFCF)",
        "gradient-radial-yellow":
          "radial-gradient(#FFFFFF,#FFDF8D,#FFDF8D,#FFDF8D,#FFDF8D,#FFDF8D)",
      }),
      width: {
        "fit-content": "fit-content",
      },
      fontSize: {
        ts: ".69rem",
        xs: ".79rem",
        md: ".91rem",
      },
      scale: {
        "-1": "-1",
      },
      animation: {
        bouncy: "bouncy 1.5s none 1",
      },
      boxShadow: {
        primary: "inset 3px -6px 6px 0 rgba(0, 0, 0, 0.25)",
        secondary: "inset 3px -6px 6px 0 rgba(0, 0, 0, 0.25)",
        line: "inset 0px -1px 1px 0 rgba(194,194,238)",
        all: " -1px -1px 70px 1px rgba(0, 0, 0, 0.25)",
        cat: "0 0 86px 0 rgba(121, 116, 208, 0.29)",
        // drawer: "-18px 11px 32px -5px rgba(0,0,0,0.57)",
        drawer: "-18px 20px 35px -9px rgba(0,0,0,0.6)",
        drawerCat: "inset 0px -22px 50px -26px rgba(0,0,0,0.15)",
        footer: "9px 9px 1px -1px #000000",
        shadow: "3px 2px 0px 0px #000000",
        shadowbtn: "6px 8px 0px -5px #000000",
      },
      screens: {
        xs: "375px",
        xs2: "390px",
        "2.5xl": "1750px",
        "3xl": "1920px",
        "3.5xl": "2120px",
        "4xl": "2560px",
        "4.5xl": "2960px",
        "5xl": "3440px",
      },
      colors: {
        tbeste: {
          blue: {
            default: "#5AC7E5",
            hover: "#50bbd9",
          },
          orange: {
            default: "#F69A34",
            hover: "#eeb23a",
          },
          text: {
            default: "#4B4B4B",
            hero: "#9871A2",
          },
          pink: {
            default: "#EF1E7C",
            hover: "#ffd4e2",
          },

          gray: "#c2c2ee",
          paleGray: "rgba(240, 240, 255, 0.31)",
          lightGray: "#c2c2ee",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Montserrat", ...fontFamily.sans],
        body: ["Montserrat"],
        primary: ["Montserrat"],
        secondary: ["Montserrat"],
      },
    },
  },
  plugins: [
    // require("daisyui"),
    require("@tailwindcss/forms"),
    plugin(function ({ addVariant }) {
      addVariant("mo", "@media screen and (max-width: theme('screens.sm'))"); // instead of hard-coded 640px use sm breakpoint value from config. Or anything
    }),
  ],
};
