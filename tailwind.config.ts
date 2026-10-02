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
        canvas: "#090D16",
        card: "#0F172A",
        border: "#1E293B",
        indigo: {
          accent: "#6366F1",
          hover: "#4F46E5",
          glow: "rgba(99, 102, 241, 0.25)",
        },
        cyan: {
          accent: "#06B6D4",
          hover: "#0891B2",
          glow: "rgba(6, 182, 212, 0.2)",
        },
        emerald: {
          accent: "#10B981",
          hover: "#059669",
        },
        ghost: "#F8FAFC",
        readable: "#CBD5E1",
        muted: "#94A3B8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "Plus Jakarta Sans", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(99, 102, 241, 0.3)",
        cyanGlow: "0 0 20px -3px rgba(6, 182, 212, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
