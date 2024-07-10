import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      spaceGrotesk: ["var(--font-spaceGrotesk)"],
    },
    colors: {
      "color-primary": "rgb(242, 245, 247)",
      "bg-color": "#0f0c1f",
      "color-light-blue": "rgb(30, 129, 176)",
      "color-white": "#ffffff",
      "color-black": "#000000",
      "color-red": "#ff6b6b",
      "color-text": {
        1: "rgba(255, 255, 255, 0.5)",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
