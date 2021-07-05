module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        radley: ['Radley'],
        belgrano: ['Belgrano'],
        K2D: ['K2D'],
        amethysta: ['Amethysta']
      },
      boxShadow: {
        boxShadow : '0 4px 8px  #00000030, 0 6px 20px #00000030',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
