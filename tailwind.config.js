/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.html", "./src/**/*.js", "./styles/**/*.css"],
  theme: {
    extend: {
      colors: {
        colorDarkBackground: '#111729',
        colorDarkPrimary: '#223344',
        colorDarkSecondary: '#909193',
        colorLightSecondary: '#F2F9FE',
        colorLightBackground: '#FFFFFF',
        colorPrimaryAccent: '#2A4DD0',
        colorSecondaryAccent: '#4CA154',
      },
      fontFamily: {
        DMSans: ["Sora", "sans-serif"],
      },
    },
    screens: {
      sm: "640px",
      md: "1024px",
      lg: "1280px",
    },
  },
  darkMode: 'class',
  plugins: [],
}
