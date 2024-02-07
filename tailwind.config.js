/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#ff3200',
        'passive': '#F2F2FC',
        'primary': '#343A40',
        'secondary': '#868E96',
      },
      flex: {
        '2': '2',
        '3': '3',
      }
    },
  },
  plugins: [],
}

