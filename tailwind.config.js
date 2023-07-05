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
    backgroundImage: {
      'linear-gradient':
        'linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)',
      'radial-gradient':
        'radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3),var(--transparent))',
    },
    keyframes: {
      'fade-in': {
        from: { opacity: 0, transform: 'translateY(-20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
      },
      'fade-in-up': {
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
      },
    },
    animation: {
      'fade-in': 'fade-in 1000ms ease-in-out',
      'fade-in-up': 'fade-in-up 1000ms ease-in-out',
    },
  },
  plugins: [],
};
