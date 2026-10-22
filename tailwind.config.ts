import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        card: "var(--card)",
        sidebar: "var(--sidebar)",
        border: "var(--border)",
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
        },
        success: "var(--success)",
        warning: "var(--warning)",
        danger: "var(--danger)",

        // Harmonize existing legacy tokens to CSS variables so all existing components adapt seamlessly:
        canvas: "var(--background)",
        ghost: "var(--text-primary)",
        readable: "var(--text-secondary)",
        muted: "var(--text-muted)",
        indigo: {
          accent: "var(--primary)",
          hover: "var(--primary-hover)",
          glow: "rgba(var(--primary-rgb), 0.25)",
        },
        cyan: {
          accent: "var(--accent)",
          hover: "var(--accent-hover)",
          glow: "rgba(var(--accent-rgb), 0.2)",
        },
        emerald: {
          accent: "var(--success)",
          hover: "#059669",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "Plus Jakarta Sans", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(var(--primary-rgb), 0.3)",
        cyanGlow: "0 0 20px -3px rgba(var(--accent-rgb), 0.3)",
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  plugins: [],
};

export default config;
