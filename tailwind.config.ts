import type { Config } from 'tailwindcss'

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B2447",   // deep professional blue
          blue: "#134B8A",   // secondary blue
          red:  "#B91C1C",   // accent red
          light:"#F8FAFC",   // near-white bg
        },
      },
      boxShadow: {
        card: "0 6px 24px rgba(0,0,0,.08)",
      }
    },
  },
  plugins: [],
} satisfies Config
