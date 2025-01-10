import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        moveLeftRight: "moveLeftRight 3s ease-in-out infinite",
      },
      keyframes: {
        moveLeftRight: {
          "0%": { transform: "translateX(-50%) translateX(-40px)" },
          "50%": { transform: "translateX(-50%) translateX(40px)" },
          "100%": { transform: "translateX(-50%) translateX(-40px)" },
        },
      },
    },
  },
  plugins: [],

  
} satisfies Config;


