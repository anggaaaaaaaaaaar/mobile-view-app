import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "open-close": "transition: height 0.5s ease-in-out;",
      },
      colors: {
        gold: "#FFD700",
        "slate-1": "#0E191F",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-btn": "linear-gradient(90deg, #62CDCB 30%, #4599DB 90%)",
        "gradient-primary":
          "linear-gradient(220deg, #1F4247 10%, #0D1D23 50%, #09141A 100%)",
        "gradient-gold":
          "linear-gradient(90deg, #94783E 5%, #F3EDA6 30%, #F8FAE5 35%, #FFE2BE 56%, #D5BE88 70%, #F8FAE5 80%, #D5BE88 90%)",
        "gradient-blue":
          "linear-gradient(220deg, #ABFFFD 20%, #4599DB 50%, #AADAFF 80%)",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
        glow: [
          "0 10px 10px rgba(98, 205, 203, 0.25)",
          "0 12px 15px rgba(69, 153, 219, 0.15)",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
