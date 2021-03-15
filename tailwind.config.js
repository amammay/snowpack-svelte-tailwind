const colors = require("tailwindcss/colors");

const purgeConfig = [

];
if (process.env.NODE_ENV === 'production') {
    purgeConfig.push("./src/**/*.svelte")
}

module.exports = {
  purge: purgeConfig,
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        orange: colors.orange
      }
    }
  },
  variants: {},
  plugins: []
};
