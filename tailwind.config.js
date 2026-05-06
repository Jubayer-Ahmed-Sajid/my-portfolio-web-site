/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss-textshadow"),
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-xl': {
          'text-shadow': '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
      });
    },
  ],
};
