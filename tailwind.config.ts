import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: '0.625rem',
      sm: '0.75rem',
      base: '0.8125rem',
      lg: '0.9375rem',
      xl: '1.125rem',
      '2xl': '1.375rem',
      '3xl': '1.75rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    boxShadow: {
      sm: '0 1px 2px 0 hsla(var(--color-shadow) / 0.05)',
      DEFAULT: '0 1px 3px 0 hsla(var(--color-shadow) / 0.1), 0 1px 2px -1px hsla(var(--color-shadow) / 0.1)',
      md: '0 4px 6px -1px hsla(var(--color-shadow) / 0.1), 0 2px 4px -2px hsla(var(--color-shadow) / 0.1)',
      lg: '0 10px 15px -3px hsla(var(--color-shadow) / 0.1), 0 4px 6px -4px hsla(var(--color-shadow) / 0.1)',
      xl: '0 20px 25px -5px hsla(var(--color-shadow) / 0.1), 0 8px 10px -6px hsla(var(--color-shadow) / 0.1)',
      '2xl': '0 25px 50px -12px hsla(var(--color-shadow) / 0.25)',
      inner: 'inset 0 2px 4px 0 hsla(var(--color-shadow) / 0.05)',
      none: 'none',
    },
    extend: {
      colors: {
        primary: {
          lighter: 'hsl(var(--color-primary-lighter) / <alpha-value>)',
          light: 'hsl(var(--color-primary-light) / <alpha-value>)',
          DEFAULT: 'hsl(var(--color-primary) / <alpha-value>)',
          dark: 'hsl(var(--color-primary-dark) / <alpha-value>)',
          darker: 'hsl(var(--color-primary-darker) / <alpha-value>)',
        },
        success: {
          lighter: 'hsl(var(--color-success-lighter) / <alpha-value>)',
          light: 'hsl(var(--color-success-light) / <alpha-value>)',
          DEFAULT: 'hsl(var(--color-success) / <alpha-value>)',
          dark: 'hsl(var(--color-success-dark) / <alpha-value>)',
          darker: 'hsl(var(--color-success-darker) / <alpha-value>)',
        },
        error: {
          lighter: 'hsl(var(--color-error-lighter) / <alpha-value>)',
          light: 'hsl(var(--color-error-light) / <alpha-value>)',
          DEFAULT: 'hsl(var(--color-error) / <alpha-value>)',
          dark: 'hsl(var(--color-error-dark) / <alpha-value>)',
          darker: 'hsl(var(--color-error-darker) / <alpha-value>)',
        },
        warning: {
          lighter: 'hsl(var(--color-warning-lighter) / <alpha-value>)',
          light: 'hsl(var(--color-warning-light) / <alpha-value>)',
          DEFAULT: 'hsl(var(--color-warning) / <alpha-value>)',
          dark: 'hsl(var(--color-warning-dark) / <alpha-value>)',
          darker: 'hsl(var(--color-warning-darker) / <alpha-value>)',
        },
        surface: {
          lighter: 'hsl(var(--color-surface-lighter) / <alpha-value>)',
          light: 'hsl(var(--color-surface-light) / <alpha-value>)',
          DEFAULT: 'hsl(var(--color-surface) / <alpha-value>)',
          dark: 'hsl(var(--color-surface-dark) / <alpha-value>)',
          darker: 'hsl(var(--color-surface-darker) / <alpha-value>)',
        },
        contrast: {
          lower: 'hsl(var(--color-contrast-lower) / <alpha-value>)',
          low: 'hsl(var(--color-contrast-low) / <alpha-value>)',
          medium: 'hsl(var(--color-contrast-medium) / <alpha-value>)',
          high: 'hsl(var(--color-contrast-high) / <alpha-value>)',
          higher: 'hsl(var(--color-contrast-higher) / <alpha-value>)',
        },
        shadow: 'hsl(var(--color-shadow) / <alpha-value>)',
        white: 'hsl(var(--color-white) / <alpha-value>)',
        black: 'hsl(var(--color-black) / <alpha-value>)',
      },
      fontFamily: {
        'body': ['ui-sans-serif', 'system-ui', 'Inter', 'sans-serif'],
        'title': ['ui-sans-serif', 'system-ui', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        'inherit': 'inherit',
      },
    },
  },
  plugins: [],
};
export default config;