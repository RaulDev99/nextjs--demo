module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth:{
        '1':'1px'
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
