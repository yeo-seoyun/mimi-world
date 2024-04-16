import textShadowPlugin from "tailwindcss-textshadow";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          100: "#1E1E1E",
          200: "#231F20",
        },
        gray: {
          100: "#8D8D8D",
          200: "#EEEEEE",
          300: "#F8F8F8",
        },
      },
      fontFamily: {
        mimi: ['"1973MimiWorld"', "sans-serif"],
      },
      backgroundImage: {
        "mimi-logo": "url('src/assets/components/logo.png')",
        "main-bg1": "url('src/assets/Home/main1.png')",
        "main-bg2": "url('src/assets/Home/main2.png')",
        "age-img1": "url('src/assets/Home/age1.png')",
        "age-img2": "url('src/assets/Home/age2.png')",
        "age-img3": "url('src/assets/Home/age3.png')",
        "age-img4": "url('src/assets/Home/age4.png')",
        "age-img5": "url('src/assets/Home/age5.png')",
        "age-img6": "url('src/assets/Home/age6.png')",
        "sns-naver": "url('src/assets/Home/sns1.png')",
        "sns-insta": "url('src/assets/Home/sns2.png')",
        "sns-youtube": "url('src/assets/Home/sns3.png')",
      },
      boxShadow: {
        default: "0px 2px 15px -2px rgba(0, 0, 0, 0.09)",
      },
      textShadow: {
        "pink-glow": "0 0 8px rgb(206, 120, 120)",
      },
    },
  },
  plugins: [textShadowPlugin],
};
