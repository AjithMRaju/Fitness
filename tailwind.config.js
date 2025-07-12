/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // red: "#F7EF8A",
        gold: "#F7EF8A",
        red: "rgb(195 34 34)",
        hash: "#111111",
        secondaryBlack: "#222",
        primeryText: "#b7ab98",
        secondaryBg: "#f5f5f5",
        navText: "d3d340",
      },
      borderColor: {
        "custom-gray": "#1111111f", // Add your custom color here
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(297deg, rgba(1,0,9,0.98) 0%, rgba(1,1,11,0.95) 35%, rgba(17,25,27,0.80) 100%)",
      },
      fontFamily: {
        fantasy: ["fantasy"],
      },
      minHeight: {
        "323px": "323px", // Custom value
      },
    },
  },
  plugins: [],
};
