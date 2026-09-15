/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '360px',
      },
      fontFamily: {
        sans: ['"Google Sans Flex"', '"Space Grotesk"', '"Segoe UI"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '14px',
        btn: '8px',
        pill: '9999px',
      },
      colors: {
        orbit: {
          bg: '#000000',
          surface: '#08080a',
          'surface-raised': '#121216',
          muted: '#a3a3ae',
          border: 'rgba(255, 255, 255, 0.12)',
          'border-strong': 'rgba(255, 255, 255, 0.24)',
          'border-accent': 'rgba(167, 139, 250, 0.40)',
        },
        violet: {
          accent: '#a78bfa',
          mark: '#7c3aed',
          soft: '#8b5cf6',
          bright: '#c4b5fd',
          deep: '#5b21b6',
          wash: 'rgba(124, 58, 237, 0.14)',
        },
        ft: {
          bg: '#ffffff',
          text: '#0b0b0f',
          muted: '#5b5b66',
          link: '#33333c',
          border: 'rgba(11, 11, 15, 0.14)',
        },
        space: {
          950: '#000000',
          mid:  '#050508',
          900: '#08080a',
          800: '#0c0c10',
          750: '#121216',
          700: '#181820',
          600: '#22222c',
        },
        navy: {
          950: '#000000',
          900: '#08080a',
          800: '#121216',
          700: '#1a1a24',
          600: '#252535',
          500: '#7c3aed',
          400: '#8b5cf6',
          300: '#a78bfa',
          200: '#c4b5fd',
        },
      },
      backdropBlur: {
        xs:  '4px',
        sm:  '8px',
        md:  '12px',
        lg:  '20px',
        xl:  '32px',
        '2xl': '48px',
      },
    },
  },
  plugins: [],
};
