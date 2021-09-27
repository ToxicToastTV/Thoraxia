const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './apps/inventory-admin/src/**/*.{js,jsx,ts,tsx}',
    './apps/inventory-admin/src/index.html',
    './apps/inventory-shell/src/**/*.{js,jsx,ts,tsx}',
    './apps/inventory-shell/src/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
