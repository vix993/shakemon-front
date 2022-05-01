module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'lexend': ['Lexend', 'sans-serif'],
      },
      screens: {
        'xsm': '450px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
