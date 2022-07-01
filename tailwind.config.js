module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '350px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      dropShadow: {
        '3xl': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        '4xl': '5px 5px 13px rgba(0, 0, 0, 0.63)',
      },
      boxShadow: {
        innerSh: 'inset 4px 4px 20px #4D4D4D',
      },
      backgroundImage: {
        'gradient-radial-to-tr':
          'radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        91: '27rem',
        92: '32rem',
        96: '40rem',
        98: '56rem',
        99: '65rem',
      },
    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      'extra-bold': 800,
      black: 900,
    },
    colors: {
      grad1: '#534571',
      grad2: '#342C46',
      grad3: '#345161',
      grad4: '#7B5A5A',
      dark30: '#C4B6B2',
      dark50: '#333333',
      blue: '#2029F3',
      backdrop: '#042639',
      link: '#3A7DA3',
      green: '#53C02C',
      red: '#EB5757',
      white: '#FFFFFF',
      brown: '#501C1C',
      blue2: '#143B52',
      placeholder: '#A8A3A3',
    },
    animation: {
      bounce: 'bounce 1s 5 ',
      pulse: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      'spin-slow': 'spin 3s linear infinite',
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
