import { createFluidValue, remToPx } from "./src/utils/createFluidValue";
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
      fontSize: {
        xs: [
          createFluidValue(remToPx(0.75), remToPx(0.875)),
          createFluidValue(remToPx(1), remToPx(1.25)),
        ],
        sm: [
          createFluidValue(remToPx(0.875), remToPx(1)),
          createFluidValue(remToPx(1.25), remToPx(1.5)),
        ],
        base: [
          createFluidValue(remToPx(1), remToPx(1.125)),
          createFluidValue(remToPx(1.5), remToPx(1.75)),
        ],
        lg: [
          createFluidValue(remToPx(1.125), remToPx(1.25)),
          createFluidValue(remToPx(1.75), remToPx(1.75)),
        ],
        xl: [
          createFluidValue(remToPx(1.25), remToPx(1.5)),
          createFluidValue(remToPx(1.75), remToPx(2)),
        ],
        "2xl": [
          createFluidValue(remToPx(1.5), remToPx(1.875)),
          createFluidValue(remToPx(2), remToPx(2.25)),
        ],
        "3xl": [
          createFluidValue(remToPx(1.875), remToPx(2.25)),
          createFluidValue(remToPx(2.25), remToPx(2.5)),
        ],
        "4xl": [createFluidValue(remToPx(2.25), remToPx(3)), "1"],
        "5xl": [createFluidValue(remToPx(3), remToPx(3.75)), "1"],
        "6xl": [createFluidValue(remToPx(3.75), remToPx(4.5)), "1"],
        "7xl": [createFluidValue(remToPx(4.5), remToPx(6)), "1"],
      },
    },
  },
  plugins: [],
};
export default config;
