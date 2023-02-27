/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "512px",
      sm: "600px",
      md: "888px",
      lg: "1144px",
      xl: "1800px",
      "2xl": "2302px",
    },
    colors: {
      // light
      "yt-red": "#FF0000",
      "yt-almost-black": "#282828",
      "yt-base-background": "#fff",
      "yt-raised-background": "#fff",
      "yt-menu-background": "#fff",
      "yt-text-primary": "#0f0f0f",
      "yt-text-primary-inverse": "#fff",
      "yt-text-secondary": "#606060",
      "yt-badge-chip-background": "#0000000d",
      "yt-button-chip-background-hover": "#0000001a",
      "yt-searchbox-border-color": "#88888833",
      "yt-searchbox-background": "#ffffff",
      "yt-searchbox-text-color": "#111111",
      "yt-searchbox-button-color": "#f8f8f8",

      //dark
      // "yt-base-background": "#0f0f0f",
      // "yt-menu-background": "#282828",
      // "yt-text-primary": "#f1f1f1",
      // "yt-text-primary-inverse": "#0f0f0f",
      // "yt-text-secondary": "#aaa",
      // "yt-badge-chip-background": "#ffffff1a",
      // "yt-button-chip-background-hover": "#ffffff33",
      // "yt-searchbox-border-color": "#88888866",
      // "yt-searchbox-background": "#121212",
      // "yt-searchbox-text-color": "#ffffffe0",
      // "yt-searchbox-button-color": "##d3d3d3",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
