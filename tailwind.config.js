/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 0px 4px 4px rgba(0, 0, 0, 0.25)', // Spread value and transparent color
      },
    },
  },
  plugins: [],
}

