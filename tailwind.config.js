/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'ExoSemiBold': '"ExoSemiBold"',
      'JostMedium': '"JostMedium"',
      'JostRegular': '"JostRegular"'
    },
    extend: {
      backgroundImage: {
        "sliderLeftBtn": "url('./images/leftBtn.png')",
        "sliderRightBtn": "url('./images/rightBtn.png')"
      }
    }
  },
  plugins: [],
}