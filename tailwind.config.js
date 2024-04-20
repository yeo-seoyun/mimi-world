import textShadowPlugin from "tailwindcss-textshadow";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { min: "320px", max: "767px" },
      md: { min: "768px", max: "1079px" },
      lg: { min: "1080px" },
    },
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
        pink: {
          100: "#facfcf",
          200: "#fca8a8",
        },
      },
      fontFamily: {
        mimi: ['"1973MimiWorld"', "sans-serif"],
      },
      backgroundImage: {
        "mimi-logo": "url('/assets/components/logo.png')",
        "main-bg1": "url('/assets/Home/main1.png')",
        "main-bg2": "url('/assets/Home/main2.png')",
        "age-img1": "url('/assets/Home/age1.png')",
        "age-img2": "url('/assets/Home/age2.png')",
        "age-img3": "url('/assets/Home/age3.png')",
        "age-img4": "url('/assets/Home/age4.png')",
        "age-img5": "url('/assets/Home/age5.png')",
        "age-img6": "url('/assets/Home/age6.png')",
        "sns-naver": "url('/assets/Home/sns1.png')",
        "sns-insta": "url('/assets/Home/sns2.png')",
        "sns-youtube": "url('/assets/Home/sns3.png')",
        organization: "url('/assets/Mimiworld/enterpriseValue.jpg')",
        emterprise: "url('/assets/Mimiworld/img_organization.jpg')",
        "tit-icon": "url('/assets/Mimiworld/tit_EnterpriseValue.png')",
        "ceo-story": "url('/assets/Mimiworld/img_ceoStory.jpg')",
        "mimi-step": "url('/assets/Mimiworld/img_step.png')",
        "mimi-talent": "url('/assets/Mimiworld/img_talent.png')",
        "mimi-benefits": "url('/assets/Mimiworld/benefits.png')",
        "mimi-princess": "url('/assets/Brand/brandB1.webp')",
        "mimi-princess-logo": "url('/assets/Brand/mimiblogo1.webp')",
        "mimi-princess-doll": "url('/assets/Brand/mimidoll.png')",
        "mimi-friends": "url('/assets/Brand/brandB2.webp')",
        "mimi-friends-logo": "url('/assets/Brand/mimiblogo2.webp')",
        "mimi-friends-img": "url('/assets/Brand/mimiimg1.webp')",
        "mimi-pet": "url('/assets/Brand/brandB3.webp')",
        "mimi-pet-logo": "url('/assets/Brand/mimiblogo3.webp')",
        "mimi-pet-img": "url('/assets/Brand/mimiimg2.webp')",
        "mimi-ddol": "url('/assets/Brand/itembanner2.webp')",
        "mimi-ddol-logo": "url('/assets/Brand/mimiblogo4.webp')",
        "mimi-ddol-img": "url('/assets/Brand/mimiimg3.png')",
        "event-img": "url('/assets/event-img.png')",
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
