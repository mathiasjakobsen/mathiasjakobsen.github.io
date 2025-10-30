/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        'frost-dark': 'hsl(0, 0%, 12%)',
        'frost-accent': 'hsl(0, 0%, 20%)',
        'frost-light': 'hsl(0, 0%, 98%)',
      },
      borderRadius: {
        'frost': '10px',
      },
      lineHeight: {
        'tight': '1.2',
        'medium': '1.4',
        'relaxed': '1.6',
      },
      transitionDuration: {
        '250': '0.25s',
        '500': '0.5s',
        '700': '0.7s',
      },
      backdropBlur: {
        'frost': '8px',
      },
    },
  },
  plugins: [],
}
