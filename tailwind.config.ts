import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        textPrimary: "#0C92D2",
        bgButton: "#C80A72",
        background: "#ECF0F3",
        titleBoxTow: "#01608F",
        hoverHeader: "#BFD4DE",
      },
    },
  },
  plugins: [],
};
export default config;
