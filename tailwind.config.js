/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,md,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,md,jsx,tsx,mdx}",
    // "./posts/**/*.{js,ts,md,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      typography: {
        // DEFAULT: {
        //   css: {
        //     'img': {
        //       display: 'block',
        //       float: 'none',
        //       // marginLeft: 'auto'
        //       // marginRight: 'auto'
        //       margin: 'auto',
        //       width: 'auto',
        //       height: 'auto',
        //       maxWidth: '100%', // makes images responsive by default
        //       maxHeight: 'auto', // allows images to maintain their aspect ratio
        //     },
        //   },
        // },
      },
      fontFamily: {
        dancingScript: ['Dancing Script', 'cursive'],
      },
      colors: {
        lite: 'white',
        dark: 'black',
        neut: 'neutral',
      },

      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'animatedgradient 6s ease infinite alternate',
      }

    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}