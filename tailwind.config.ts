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
      "color-black-trans": "rgba(0, 0, 0, 0.5)",
    },
    screens: {
      "2xl": { max: "1300px" },
      // => @media (max-width: 1300px) { ... }
      xl: { max: "1200px" },
      // => @media (max-width: 1200px) { ... }
      xlg: { max: "1100px" },
      // => @media (max-width: 1100px) { ... }
      xmd: { max: "900px" },
      // => @media (max-width: 900px) { ... }
      md: { max: "800px" },
      // => @media (max-width: 800px) { ... }
      smd: { max: "700px" },
      // => @media (max-width: 700px) { ... }
      sm: { max: "600px" },
      // => @media (max-width: 600px) { ... }
      ssm: { max: "300px" },
      // => @media (max-width: 500px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
export default config;
