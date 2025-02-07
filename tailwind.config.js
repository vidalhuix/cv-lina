export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-green': 'emerald-700',
      },
      animation: {
        reveal: 'reveal 0.3s ease-in forwards',
      },
      keyframes: {
        reveal: {
          '0%': { transform: 'scaleX(0)', display: 'none' },
          '100%': { transform: 'scaleX(1)', display: 'block' },
        },
      },
    },
  },
  plugins: [],
};
