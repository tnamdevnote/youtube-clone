/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      // light
      'yt-red': '#FF0000',
      'yt-almost-black': '#282828',
      'yt-spec-base-background': '#fff',
      'yt-spec-raised-background': '#fff',
      'yt-spec-menu-background': '#fff',
      'yt-spec-text-primary': '#0f0f0f',
      'yt-spec-text-primary-inverse': '#fff',
      'yt-spec-text-secondary': '#606060',
      'yt-spec-badge-chip-background': '#0000000d',
      'yt-spec-button-chip-background-hover': '#0000001a',
      'ytd-searchbox-border-color': '#88888833',
      'ytd-searchbox-background': '#ffffff',
      'ytd-searchbox-text-color': '#111111',

      //dark
      'yt-spec-base-background': '#0f0f0f',
      'yt-spec-menu-background': '#282828',
      'yt-spec-text-primary': '#f1f1f1',
      'yt-spec-text-primary-inverse': '#0f0f0f',
      'yt-spec-text-secondary': '#aaa',
      'yt-spec-badge-chip-background': '#ffffff1a',
      'yt-spec-button-chip-background-hover': '#ffffff33',
      'ytd-searchbox-border-color': '#88888866',
      'ytd-searchbox-background': '#121212',
      'ytd-searchbox-text-color': '#ffffffe0',
    },
    extend: {},
  },
  plugins: [],
};
