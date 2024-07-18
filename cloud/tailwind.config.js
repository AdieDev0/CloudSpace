/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Modak: ["Modak", "system-ui"],
        Shrikhand: ["Shrikhand"],
        Jost:["Jost"],
        DynaPuff:["Dynapuff"],
        Lexend:["Lexend"],
        Roboto:["Roboto"],
      }

    },
  },
  plugins: [],
}