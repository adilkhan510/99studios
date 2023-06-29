/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: '"SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif',
    },
    fontSize: {
      xs: '1.3rem',
      sm: '1.4rem',
      md: '1.6rem',
      lg: '1.8rem',
      xl: ['2.2rem', '1.3'],
      '2xl': '2.4rem',
      '3xl': '2.6rem',
      '4xl': '3.2rem',
      '5xl': '4rem',
      '6xl': ['4.4rem', '1.1'],
      '7xl': ['4.8rem', '1.1'],
      '8xl': ['8rem', '1.1'],
    },
    colors: {
      transparent: 'transparent',
      white: '#fff',
      'off-white': '#f7f8f8',
      'transparent-white': 'rgba(255, 255, 255, 0.08)',
      background: '#000212',
      grey: '#858699',
      'grey-dark': '#222326',
      'primary-text': '#b4bcd0',
      'black-100': '#000',
    },
    plugins: [],
  },
};
