/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      secondary: "Inter",
    },
    extend: {
      colors: {
        colorDark: "#15202b",
        darkNight: "#13131A",
        colorDarkest: "#242526",
        colorDime: "#1e2732",

        reduxBG: "#1b1b1d",
        // reduxBG: "#1b1b1d",
        colorPrimary: "#ba8fff",
        colorSecondary: "#593d88",
        colorDarkRedux: "#1b1b1d",
        colorLightGray: "#dadde1",

        colorSaga: "#86d46b",
        colorDarkSaga: "#2f2f2f",

        text1: "#171725",
        text2: "#4B5264",
        text3: "#808191",
        text4: "#B2B3BD",
        whiteSoft: "#FCFBFF",
        graySoft: "#FCFCFC",
        grayf3: "#f3f3f3",
        strock: "#F1F1F3",

        colorPurple: "#7856ff",
        colorPink: "#f91880",
        colorBlue: "#1d9bf0",
        colorYellow: "#ffd400",
        colorOrange: "#e66e00",
        colorGreen: "#00ba7c",
      },
      backgroundImage: {
        /* GRADIENT-COLOR */
        colorGradient: "linear-gradient(to right , #ba8fff, #f91880)",
        colorGradient2: "linear-gradient(to right , #7856ff, #1d9bf0)",
        /* REVERSE GRADIENT-COLOR */
        reverseGradientColor_4:
          "linear-gradient(to left top, #7856ff, #f91880)",
      },
    },
  },
  plugins: [],
};
