/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bellIconBgColor: "#E6E6FA",
        bellIconColor: "#000435",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
