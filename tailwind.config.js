/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        se: "374px",
        xr: "413px",
        pro: "389px",
        promax: "431px",
      },
    },
  },
  plugins: [],
};
