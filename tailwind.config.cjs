/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}", "./index.html"],

  theme: {
    extend: {
      colors: {
        dark: "#222831",
        primary: "#00ADB5",
        text: "#EEEEEE",
        secondaryDark: "#393E46"
      },
      keyframes: {
        'jump': {
          '0%, 10%,100%': { transform: 'translateY(0px)'},
          '40%': {transform: 'translateY(-30px)'}
        },
        'jump-less': {
          '0%,10%, 100%': { transform: 'translateY(0px)',
                        'color': '#00ADB5'},
          '40%': {transform: 'translateY(-10px)',
                  'color': '#EEEEEE'}
        },
        'progress':{
          '0%': {
            'width': '0',
            'opacity': '0'
          },
          '100%':{
            'opacity': '1'
          }
        }
      },
      animation: {
        'jump': 'jump 1s ease-in-out 1',
        'jump-less': 'jump-less 0.5s ease-in-out 1',
        'progress': 'progress 0.9s ease-in-out 1',
      },
    }
    ,
    theme: {
      screens: {
        'sm': { 'min': '640px', 'max': '767px' },
        // => @media (min-width: 640px) { ... } 

        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lmd': '900px',
        // => @media (min-width: 900px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
      }
    }
  },
  plugins: [],
}
