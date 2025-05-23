/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
      progressBlue: "var(--prgoress-blue)",
      progressGray: "var(--progress-gray)",

      }
    },
  },
  plugins: [],
};
