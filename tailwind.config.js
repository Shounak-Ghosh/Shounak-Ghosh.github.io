/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: '#FDE047', // Example yellow color
        customBlue: '#3B82F6', // Example blue color
      },
      backgroundImage: {
        'yellow-blue-gradient': 'linear-gradient(to right, #FDE047, #3B82F6)',
      },
    },
  },
  plugins: [
    // function ({addUtilities}) {
    //   const newUtilities = {
    //     '.text-gradient': {
    //       'background': 'linear-gradient(90deg, #306998 50%, #ffe873 50%)',
    //       '-webkit-background-clip': 'text',
    //       '-webkit-text-fill-color': 'transparent',
    //     },
    //   }
    //   addUtilities(newUtilities, ['responsive', 'hover'])
    // }
  ],
}