import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      dark: {
        900: '#1C1C1C',
        800: '#2A2A2A',
        400: '#535353'
      },
      grey: {
        200: '#7B7B7B',
        50: '#F8F8F8'
      },
      blue: {
        600: '#2793F2',
        500: '#22A2F2',
        400: '#22B7F2',
        100: '#61C8F1'
      },
      purple: {
        500: '#4E55FF',
        200: '#7479FF'
      }
    },
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat']
      },
      fontSize: {
        presentation: [
          '2.5rem',
          {
            lineHeight: '2.5rem'
          }
        ]
      }
    }
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'stop-color': value => ({
            stopColor: value
          })
        },
        { values: theme('stopColor') }
      )
    })
  ]
}
