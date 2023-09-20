/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'earth': "url('./src/assets/earth.jpg')",
        
    },
  },
  plugins: [],
},

}