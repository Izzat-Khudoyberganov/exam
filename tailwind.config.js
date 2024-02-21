/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem"
    },
    extend: {
      colors: {
        dark: "rgb(47, 48, 53)",
        blue: "rgb(28, 98, 205)",
        gray: "rgb(196, 196, 196)"
      },
      boxShadow:{
        shadow: "3px 3px 20px 0px rgba(50, 50, 50, 0.25);"
      }
    },
  },
  plugins: [],
}

