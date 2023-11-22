/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hover: {
          hv: "#f4f7f7",
        },
        primarycolor: {
          pc: "#1363df",
        },
        secundarycolor: {
          sc: "#47b5ff",
        },
        tertiarycolor: {
          tc: "#f33535",
        },
        graycolor: {
          gc: "#70727c",
        },
        darkcolor: {
          dc: "#191b21",
        },
      },
      screens: {
        xm: "400px",
        xd: "300px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "5xl": "40px",
      },
    },
  },
  plugins: [],
};
