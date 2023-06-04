module.exports = {
  purge: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    fontFamily: {},
    extend: {
      colors: {
        theme: {
          default: '#f9f4ef',
          headline: '#020826',
          main: '#d7532f',
          sub: '#283b72',
        },
      },
    },
    screens: {
      sm: '375px',
      md: '820px',
      lg: '1366px',
      xl: '1920px',
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
