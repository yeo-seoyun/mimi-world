/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mimi-logo": "url('src/assets/components/logo.png')",
      },
      boxShadow: {
        default: "0px 2px 15px -2px rgba(0, 0, 0, 0.09)",
      },
    },
  },
  plugins: [],
};
