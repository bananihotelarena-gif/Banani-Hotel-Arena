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
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream: {
          50: "#FCFBF7",
          100: "#FAF8F5",
          200: "#F4EFE6",
          300: "#EAE2D5",
          400: "#DDD2C0",
        },
        charcoal: {
          DEFAULT: "#181C19",
          900: "#121613",
          800: "#1E241F",
          700: "#2B332C",
          600: "#4D564F",
          500: "#6A756C",
          400: "#919D93",
        },
        gold: {
          DEFAULT: "#B89758",
          light: "#CCAE6F",
          dark: "#9E7F3F",
          50: "#FAF6EE",
          100: "#F4ECD9",
          200: "#E6D6B0",
          300: "#D4BC84",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(24, 28, 25, 0.05)',
        'soft': '0 8px 24px -4px rgba(24, 28, 25, 0.06), 0 2px 6px -1px rgba(24, 28, 25, 0.04)',
        'soft-lg': '0 16px 36px -6px rgba(24, 28, 25, 0.08), 0 4px 12px -2px rgba(24, 28, 25, 0.04)',
        'gold-glow': '0 0 25px -5px rgba(184, 151, 88, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
