import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-hover": "var(--primary-hover)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        "foreground-hover": "var(--foreground-hover)",
        border: "var(--border)",
      },
      spacing: {
        "13": "3.75rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
