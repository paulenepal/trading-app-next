import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        trails: {
          "primary": "#4ECAAB",
          "secondary": "#CCCCCC",
          "accent": "#FF9183",
          "neutral": "#FBFBFE",
          "base-100": "#FBFBFE",
          "info": "#3E52D3",
          "success": "#60d273",
          "warning": "#FFB663",
          "error": "#CF2020",
          "indicator-color": "#4ECAAB",
        }
      }
    ],
  },
  theme: {
    extend: {
      fontSize: {
        sm: '0.707rem',
        base: '1rem',
        xl: '1.414rem',
        '2xl': '1.999rem',
        '3xl': '2.827rem',
        '4xl': '3.997rem',
        '5xl': '5.652rem',
      },
      fontFamily: {
        heading: 'Poppins',
        body: 'Poppins',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('tailwindcss-animated')
  ],
};
export default config;
