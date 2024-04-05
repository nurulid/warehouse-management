import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : "#6E3FF3",
        secondary: {
          75: "#F5F4F7",
          500: "#908C95"
        },
        info: "#3F6FF2",
        success: "#4EB77B",
        warning: "#EFD01D",
        danger: "#F31B09",
      }
    },
  },
  plugins: [],
};
export default config;
