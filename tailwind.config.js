/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gotham: ["Gotham", "Arial", "Helvetica", "sans-serif"],
        opensans: ["OpenSans", "Arial", "Helvetica", "sans-serif"],
      },
      colors: {
        "cv-blue": "#6ecdde",
        "cv-gray": "#999999",
        "cv-dark": "#4C4C4C",
      },
      fontSize: {
        "cv-xl": "72px",
        "cv-lg": "26px",
      },
      maxWidth: {
        cv: "920px",
      },
    },
  },
  plugins: [],
};
