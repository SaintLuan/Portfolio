const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media'
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ['Raleway', 'Source Sans Pro', 'sans-sarif']
      },
      colors: {
        primary: {
          '50': '#ffedef',
          '100': '#ff94a0',
          '200': '#ff8290',
          '300': '#ff7080',
          '400': '#ff5e70',
          '500': '#00509d',
          '600': '#003f88', 
          '700': '#cc3d4d',
          '800': '#b33543',
          '900': '#992e3a'
        },
        indigo: {
          'overlay': 'rgba(99,102,241, 0.8)'
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: theme('colors.primary.600'),
              },
            },
            blockquote: {
              color: theme('colors.gray.800'),
              borderLeftColor: theme('colors.primary.500'),
              fontSize: theme('fontSize.xl'),
              fontStyle: 'not-italic',
            }
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
