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
          navy: "#0B2447",   // deep blue
          blue: "#134B8A",   // secondary
          red:  "#B91C1C",   // accent
          light:"#F8FAFC",   // bg
        },
      },
      boxShadow: {
        card: "0 6px 24px rgba(0,0,0,.08)",
      }
    },
  },
  plugins: [],
};
