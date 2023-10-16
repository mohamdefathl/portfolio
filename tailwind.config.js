/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#0EA5E9", // Define your custom color
        customPurble: "#804dee", // Define your custom color
      },
    },
  },
  plugins: [],
};
