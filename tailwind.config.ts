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
        customBlue: 'rgba(2, 146, 211, 1)',
        customGrey: 'rgba(92, 92, 92, 1)',
      },
      width:{
        '267px': '267px'
      },
      fontSize: {
        '36px': '36px',
        '16px': '16px',
        '14px': '14px',
        '12px': '12px',

      },
      fontFamily: {
        sans: ['Tahoma', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
export default config;
