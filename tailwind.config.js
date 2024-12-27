/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroImage': 'url("/BgHome.png")'
      },
      screens: {
        '@desktop': '1024px',
        '@screen1200': '1200px',
      },
    },
  },
  plugins: [],
};
