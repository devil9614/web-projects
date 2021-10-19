module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      theme:('colors'),
       'primary': '#3490dc',
    },
  },
  variants: {
    extend: {
      animation:['responsive', 'hover', 'focus', 'group-hover']
    },
  },
  plugins: [ require('tailwind-scrollbar-hide')],
}
