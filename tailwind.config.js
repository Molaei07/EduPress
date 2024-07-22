/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      'ExoSemiBold': '"ExoSemiBold", "IranSans"',
      'JostMedium': '"JostMedium", "Aban"',
      'JostRegular': '"JostRegular", "Nasim"',
      'Farsi': '"Farsi"'
    },
    extend: {
      backgroundImage: {
        "sliderLeftBtn": "url('./images/leftBtn.png')",
        "sliderRightBtn": "url('./images/rightBtn.png')",
        "arrowBottom": "url('../../../../../public/images/arrowBottom.png')",
        "arrowTop": "url('../../../../../public/images/arrowTop.png')"
      }
    }
  },
  plugins: [],
}