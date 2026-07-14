/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          900: '#0F172A',
        },
        secondary: {
          900: '#111827',
        },
        accent: {
          400: '#60A5FA',
          500: '#3B82F6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glow: '0 0 30px rgba(59, 130, 246, 0.1)',
        'glow-lg': '0 0 50px rgba(59, 130, 246, 0.15)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 'box-shadow': '0 0 30px rgba(59, 130, 246, 0.1)' },
          '50%': { 'box-shadow': '0 0 50px rgba(59, 130, 246, 0.3)' },
        },
      },
    },
  },
  plugins: [],
}
