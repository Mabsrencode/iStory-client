/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "primary-color": "#9E6240",
        "secondary-color": "#DEA47E",
        "primary-accent-color": "#CD4631",
        "secondary-accent-color": "#F8F2DC",
        "buttons-color": "#81ADC8",
      },
    },
  },
  plugins: [],
});
