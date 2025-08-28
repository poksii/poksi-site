/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{ts,tsx,mdx}', './components/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['ui-sans-serif','system-ui','-apple-system','Segoe UI','Roboto','Ubuntu','Cantarell','Noto Sans','sans-serif'] },
    },
  },
  darkMode: 'class',
  plugins: [],
}
