// tailwind.config.js

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}', 'components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
    },
    fontFamily: {
      gochi: ['Gochi Hand', 'sans-serif'],
      roboto: ['Roboto Mono', 'sans-serif']
    },
    backgroundImage: {
      'hero-pattern': "url('/assets/hero-pattern.png')"
    },
    dropShadow: {
      'blue-glow': '0 0px 25px rgba(97, 127, 240, 0.08)',
      'blue-glow-hover': '0 0px 25px rgba(97, 127, 240, 0.18)',
      'gold-glow': '0 0px 25px rgba(246, 147, 26, 0.12)',
      'gold-glow-hover': '0 0px 25px rgba(246, 147, 26, 0.18)'
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
}
