/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F2940',
          light: '#1A3F5C',
        },
        'accent-cool': {
          DEFAULT: '#3FB6D3',
          hover: '#2D9DB8',
        },
        'accent-warm': {
          DEFAULT: '#D2762E',
          hover: '#B8651F',
        },
        'bg-light': '#F7F9FC',
        'text-dark': '#1E1E2A',
        'text-soft': '#4A4A5A',
        white: '#FFFFFF',
      },
      boxShadow: {
        'soft': '0 20px 50px -20px rgba(15, 41, 64, 0.12)',
        'glow-cool': '0 20px 40px -12px rgba(63, 182, 211, 0.25)',
        'glow-warm': '0 20px 40px -12px rgba(210, 118, 46, 0.25)',
      },
    },
  },
  plugins: [],
};