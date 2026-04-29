import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#3D2A6B', dark: '#2B1D5C' },
        accent: { DEFAULT: '#F5C518', hover: '#E0B010' },
        bgLight: '#F9F5EE',
        bgDark: '#2B1D5C',
        green: '#4CAF50',
        danger: '#E30613',
        textDark: '#1A1A2E',
        textLight: '#FFFFFF',
        star: '#FFC107',
        border: '#E0D9F0',
      },
      fontFamily: {
        sans: ['Fredoka', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-left': {
          from: { opacity: '0', transform: 'translateX(-32px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-right': {
          from: { opacity: '0', transform: 'translateX(32px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'heart-pop': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 200ms ease-out',
        'fade-up': 'fade-up 500ms ease-out',
        'slide-left': 'slide-left 500ms ease-out',
        'slide-right': 'slide-right 500ms ease-out',
        'heart-pop': 'heart-pop 220ms ease-out',
      },
    },
  },
} satisfies Config
