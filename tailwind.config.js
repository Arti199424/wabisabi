/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow': 'rgb(225 204 180)',
       'custom-red':' rgb(151 46 52)',
       'custom-pink':'rgb(248 242 236)',
       'custom-darkred':'rgb(79 46 44)',
       'custom-top-footer':'rgb(0 0 0)'
      },
    },
  },
  plugins: [],
}

