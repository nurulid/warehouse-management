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
          200: "#E9E6E9",
          300: "#DBD8DB",
          500: "#908C95"
        },
        ink: {
          75: "#C2BFC3",
          100: "#9A979A",
          200: "#666366",
          300: "#161622"
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
