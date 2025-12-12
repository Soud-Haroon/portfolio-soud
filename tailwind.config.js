/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Elegant Color Palette
        dark: {
          DEFAULT: '#000000',
          lighter: '#0a0a0a',
          light: '#141414',
        },
        pink: {
          DEFAULT: '#be3de2',
          light: '#d16ef0',
          dark: '#a02bc4',
          glow: '#be3de2',
        },
        purple: {
          DEFAULT: '#581c8f',
          light: '#7a2db8',
          dark: '#3d1364',
          glow: '#581c8f',
        },
        accent: {
          pink: '#be3de2',
          purple: '#581c8f',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'elegant-gradient': 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)',
        'pink-glow': 'radial-gradient(circle at 50% 50%, rgba(190, 61, 226, 0.15) 0%, transparent 70%)',
        'purple-glow': 'radial-gradient(circle at 50% 50%, rgba(88, 28, 143, 0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'pink-glow': '0 0 20px rgba(190, 61, 226, 0.15), 0 0 40px rgba(190, 61, 226, 0.1)',
        'purple-glow': '0 0 20px rgba(88, 28, 143, 0.15), 0 0 40px rgba(88, 28, 143, 0.1)',
        'elegant': '0 10px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(190, 61, 226, 0.05)',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "4rem",
          "3xl": "5rem",
        },
      },
      screens: {
        "4k": "1980px",
      },
    },
  },
  plugins: [],
}
