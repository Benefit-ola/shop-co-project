/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  backgroundImage: {
        'rectangle': "url('/src/assets/rectangle.svg')",
         'black': "url('/src/assets/rectangle2.svg')",
      },
    },
  },
  plugins: [],
}