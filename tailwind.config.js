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
      // typography: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            'img': {
              display: 'block',
              float: 'none',
              // marginLeft: 'auto'
              // marginRight: 'auto'
              margin: 'auto',
              width: 'auto',
              height: 'auto',
              maxWidth: '50%', // makes images responsive by default
              maxHeight: 'auto', // allows images to maintain their aspect ratio
            },
            // changes color of list numbers
            '--tw-prose-counters': theme('colors.zinc[500]'),
            '--tw-prose-invert-counters': theme('colors.zinc[400]'),
            // changes color of list bullets
            '--tw-prose-bullets': theme('colors.zinc[500]'),
            '--tw-prose-invert-bullets': theme('colors.zinc[400]'),
            // https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
          },
        },
      // },
      }),
      // fontFamily: {
      //   dancingScript: ['Dancing Script', 'cursive'],
      // },
      // colors: {
      //   lite: 'white',
      //   dark: 'black',
      //   neut: 'neutral',
      // },

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