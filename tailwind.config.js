/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(185,5,5,1) 100%, rgba(0,212,255,1) 100%)',
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
