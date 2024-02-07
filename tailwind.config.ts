import type {Config} from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        xl: "80%",
      },
    },
    extend: {
      colors: {
        background: {
          DEFAULT: "hsl(var(--light-background))",
          foreground: "hsl(var(--text))",
          light: {
            DEFAULT: "hsl(var(--light-background))",
            foreground: "hsl(var(--text))",
            gray: {
              DEFAULT: "hsl(var(--light-background-gray))",
              foreground: "hsl(var(--second-text))",
            },
            "gray-2": {
              DEFAULT: "hsl(var(--light-background-gray-2))",
              foreground: "hsl(var(--second-text))",
            },
          },
          dark: {
            DEFAULT: "hsl(var(--dark-background))",
            foreground: "hsl(var(--light-text))",
          },
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--light-text))",
          hover: "hsl(var(--primary-hover))",
          faded: "hsl(var(--primary-faded)",
        },
        text: {
          DEFAULT: "hsl(var(--text))",
          second: "hsl(var(--second-text))",
          light: "hsl(var(--light-text))",
          danger: "hsl(var(--danger-text))",
        },
        muted: "hsl(var(--muted))",
        success: "hsl(var(--success))",
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

export default config;
