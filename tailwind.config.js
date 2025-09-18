/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blueDeep: '#1E3A8A',
        weldingRed: '#DC2626',
        steelGray: '#374151',
        graphite: '#111827',
        spark: '#F59E0B',
      },
      fontFamily: {
        display: ['Oswald', 'ui-sans-serif', 'system-ui'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        'steel-gradient': 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
      }
    },
  },
  plugins: [],
};


