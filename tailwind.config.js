/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'theme-primary': '#BDBDBD',
        'theme-secondary': '#714EFF',
        'theme-tertiary': '#1f2736',
        'theme-quaternary': '#293242',
        'theme-quinary': '#BCCBE1',
        'light-primary': '#f5f3ff',
        dark: '#0f172a',
        'dark-primary': '#161e2c',
        'gray-text': '#9ca3af',
        'text-primary': '#EDEDED',
        'text-secondary': '#4b5563',
        'text-tertiary': '#B9C0DA',
        'text-quaternary': '#EDEDED',
        'text-quinary': '#A6ABBF',
      },
      screens: {
        xs: '200px',
        folding: '320px',
      },
      display: ['group-hover'],

      keyframes: {
        'button-press': {
          '0%, 100%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(0.9)',
          },
        },
        'slide-in': {
          from: {
            opacity: 0,
            transform: 'translateX(-100%)',
          },
          to: {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        'slide-out': {
          from: {
            opacity: 1,
            transform: 'translateX(0)',
          },
          to: {
            opacity: 0,
            transform: 'translateX(-100%)',
          },
        },
        'scale-appearance': {
          from: {
            scale: 0,
            translate: '-50% -50%',
          },
          to: {
            scale: 1,
          },
        },
        'scale-hide': {
          from: {
            scale: 1,
          },
          to: {
            scale: 0,
            translate: '-50% -50%',
          },
        },
      },
      animation: {
        'button-press': 'button-press 0.4s ease-in-out',
        'slide-in': 'slide-in 0.3s ease-in forwards',
        'slide-out': 'slide-out 0.3s ease-out forwards',
        'scale-appearance': 'scale-appearance 0.3s ease-in forwards',
        'scale-hide': 'scale-hide 0.3s ease-out forwards',
      },
      opacity: {
        8: '0.08',
      },
      width: {
        1038: '1038px',
      },
    },
  },
  plugins: [require('daisyui')],
  darkMode: ['class', '[data-theme="dark"]'],
}
