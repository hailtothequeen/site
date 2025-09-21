/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B2447",
          blue: "#134B8A",
          red:  "#B91C1C",
          light:"#F8FAFC",
        },
      },
      boxShadow: {
        card: "0 6px 24px rgba(0,0,0,.08)",
      }
    },
  },
  plugins: [],
};
