/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text_color: "#6B7A99",
        primary_color: "#8833FF",
      },
    },
    screens: {
      tablet: { max: "768px" },
      mobilelg: { max: "650px" },
      tabletlg: { max: "900px" },
      desktop: { max: "1200px" },
      mobile: { max: "575px" },
    },
  },
  plugins: [],
};
