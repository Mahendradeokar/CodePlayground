import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(26, 100%, 55%)",
          light: "hsl(25, 100%, 94%)",
        },
        white: {
          DEFAULT: "hsl(0, 0%, 100%)",
        },
        black: {
          DEFAULT: "hsl(0, 0%, 0%)",
          overlay: "hsl(0, 0%, 0%, 0.75)",
        },
        neutral: {
          "very-dark-blue": "hsl(220, 13%, 13%)",
          "dark-grayish-blue": "hsl(219, 9%, 45%)",
          "grayish-blue": "hsl(220, 14%, 75%)",
          "light-grayish-blue": "hsl(223, 64%, 98%)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
