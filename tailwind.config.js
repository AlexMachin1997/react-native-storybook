/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        regular: ["PublicSans_400Regular"],
        semibold: ["PublicSans_600SemiBold"],
      },
      colors: {
        p3rform: {
          blue: {
            DEFAULT: "#0B132B",
            mid: "#2DD9F0",
          },
          green: {
            DEFAULT: "#2FDB90",
            light: "#DCF7EA",
          },
          orange: {
            DEFAULT: "#FFAF15",
          },
          grey: {
            DEFAULT: "#B7B7B7",
            2: "#E5E5E5",
            4: "#929292",
          },
          white: "#FFFFFF",
        },
      },
    },
    plugins: [],
  },
};
