/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#2FFF9B',
        'brand-background': '',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
