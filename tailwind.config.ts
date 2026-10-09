import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ink-black': '#111111',
        'warm-ivory': '#F5F1E8',
        'ivory-light': '#FAF7F2',
        'coffee-brown': '#5A3825',
        'espresso-dark': '#2A1B16',
        'seoul-concrete': '#B8B4AD',
        'concrete-light': '#E5E2DC',
        'korean-red': '#A63D32',
        'champagne-gold': '#C8B58A',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
        korean: ['var(--font-noto-serif-kr)', 'Noto Serif KR', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        'spin-reverse': 'spin-reverse 22s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      boxShadow: {
        'editorial': '0 10px 30px -10px rgba(17, 17, 17, 0.08)',
        'elevated': '0 20px 40px -15px rgba(42, 27, 22, 0.12)',
        'glow-red': '0 0 25px rgba(166, 61, 50, 0.35)',
        'glow-gold': '0 0 25px rgba(200, 181, 138, 0.3)',
      },
    },
  },
  plugins: [],
};

export default config;
