module.exports = {
  purge: [],

  darkMode: false, // or 'media' or 'class'

  theme: {

    // backgroundImage : true,

    fontFamily: {
      'OpenSans': ['Open Sans', 'sans-serif'],
     },

    container: {
      center: true,
    },

    extend: {
      colors: {
        'primary': '#52951B',
        'primary-text': '313030',
        'border': '#E5E5E5',
        'icon-active': '98DD5F',
        'muted': '#909090',
        'white': 'FFFFFF'
      },
    },
  },

  variants: {

    backgroundColor: ['responsive', 'hover', 'focus', 'active'],

    extend: {},
  },
  plugins: [],
}
