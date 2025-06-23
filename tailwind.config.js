/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-out both',
        qboxxFloatGlow: 'floatGlow 4s ease-in-out infinite',
        slideUpFade: 'slideUpFade 0.8s ease-out both', // 🔥 New animation
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatGlow: {
          '0%': {
            transform: 'translateY(0) scale(1)',
            filter: 'drop-shadow(0 0 0px rgba(0, 191, 255, 0.5))',
          },
          '50%': {
            transform: 'translateY(-10px) scale(1.03)',
            filter: 'drop-shadow(0 0 10px rgba(0, 191, 255, 0.9))',
          },
          '100%': {
            transform: 'translateY(0) scale(1)',
            filter: 'drop-shadow(0 0 0px rgba(0, 191, 255, 0.5))',
          },
        },
        dropShadow: {
          glow: '0 0 10px rgba(0, 191, 255, 0.7)',
        },
        animation: {
          slideUpFade: 'slideUpFade 0.8s ease-out both',
        },
        keyframes: {
          slideUpFade: {
            '0%': { opacity: '0', transform: 'translateY(30px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
        },
        slideUpFade: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
