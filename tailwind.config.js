/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,md,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,md,jsx,tsx,mdx}",
    "./posts/**/*.{js,ts,md,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      // typography: {
      // },
      colors: {
        lite: 'white',
        dark: 'black',
        neut: 'neutral',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}