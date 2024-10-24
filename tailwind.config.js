/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        customPurple: 'rgb(21, 11, 43)',
        springGreen : 'rgb(11, 229, 138)',
        grayLight : 'rgb(40, 40, 40)',
        grayLighter : 'rgb(135, 135, 135)',
      },
    },
  },
  plugins: [
      require('daisyui'),
  ],
}

