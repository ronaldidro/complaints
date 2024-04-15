const { colors } = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        'breadcrumb': '0px 4px 4px 0px rgba(0, 0, 0, 0.15)',
        'complaint-criteria': '0px 0px 4px 0px rgba(0, 0, 0, 0.15)',
        'complainant-type': '0px 0px 4px 0px rgba(0, 0, 0, 0.25)'
      },
      colors: {
        blue: {
          ...colors.blue,
          700: '#0056AC'
        },
        gray: {
          ...colors.gray,
          100: '#EEF0F4'
        },
        green: {
          ...colors.green,
          200: '#00823B'
        },
        neutral: {
          ...colors.neutral,
          100: '#F6F9FC',
          400: '#C5CDDA',
          500: '#8A94A2'
        },
        red: {
          ...colors.red,
          700: '#DC362E',
          800: '#BF0909'
        }
      },
      height: {
        9.5: '2.375rem'
      },
      padding: {
        '3.75': '0.938rem'
      }
    }
  },
  plugins: []
}
