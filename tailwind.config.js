/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hs-blue': '#3B82F6',
        'hs-gray': '#6B7280',
      },
    },
  },
  plugins: [],
}

