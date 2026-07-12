import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#ffffff',
        canvas: '#f7f8fa',
        line: '#d9dde3',
        muted: '#6b7280',
        ink: '#171717',
        brand: '#2563eb',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.04)',
      },
    },
  },
  plugins: [],
} satisfies Config;
