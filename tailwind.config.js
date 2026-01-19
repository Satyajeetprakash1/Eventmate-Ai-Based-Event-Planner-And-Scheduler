/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        glass: "rgba(255,255,255,0.06)",
        neon: "#7DF9FF",
        primary: "#9400D3",
        dark: "#212121"
      },
      backdropBlur: {
        glass: "12px"
      }
    }
  },
  plugins: []
};
