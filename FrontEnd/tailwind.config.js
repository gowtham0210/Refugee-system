/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        '5xl':'20px 20px 50px rgba(0,0,0,0.5)',
      },
      fontFamily:{
        'poppins':['Poppins','sans-serif'],
        'roboto':['Roboto','sans-serif'],
      },
      colors:{
        'myprofilebg':'#ECF2FF',
        'myprofiletxtclr':"#5D3891",
      },
      spacing:{
        '100':'75rem',
      }
    },
  },
  plugins: [],
}
