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
        sans: ['"Space Grotesk"', '"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        space: {
          950: '#030712',
          mid:  '#07112a',
          900: '#060a14',
          800: '#070b16',
          750: '#090d18',
          700: '#0d1527',
          600: '#0d1a2e',
        },
        navy: {
          950: '#070A10',
          900: '#0B0F16',
          800: '#131A24',
          700: '#1C2A3D',
          600: '#253552',
          500: '#37517E',
          400: '#5A7AB3',
          300: '#7B9BC8',
          200: '#A8BCD9',
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
