/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        void: 'rgb(var(--c-void) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        surface2: 'rgb(var(--c-surface2) / <alpha-value>)',
        surface3: 'rgb(var(--c-surface3) / <alpha-value>)',
        line: 'rgb(var(--c-line) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        ink2: 'rgb(var(--c-ink2) / <alpha-value>)',
        ink3: 'rgb(var(--c-ink3) / <alpha-value>)',
        echo: {
          DEFAULT: 'rgb(var(--c-echo) / <alpha-value>)',
          soft: 'rgb(var(--c-echo-soft) / <alpha-value>)',
          dim: 'rgb(var(--c-echo-dim) / <alpha-value>)',
        },
        teal: {
          DEFAULT: 'rgb(var(--c-teal) / <alpha-value>)',
          dim: 'rgb(var(--c-teal-dim) / <alpha-value>)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at center, rgb(var(--c-echo) / 0.16), transparent 70%)',
      },
      boxShadow: {
        glow: '0 0 60px -12px rgb(var(--c-echo) / 0.45)',
        'glow-teal': '0 0 60px -16px rgb(var(--c-teal) / 0.35)',
        card: '0 1px 0 0 rgb(var(--c-card-hi) / 0.04) inset, 0 20px 40px -20px rgb(0 0 0 / 0.6)',
      },
      animation: {
        ripple: 'ripple 4s cubic-bezier(0.2,0.6,0.3,1) infinite',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        marquee2: 'marquee2 40s linear infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'pulse-soft': {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
      },
    },
  },
  plugins: [],
}
