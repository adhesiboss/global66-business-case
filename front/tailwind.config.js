module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0B1220',
        muted: '#6B7280',
        surface: '#FFFFFF',
        brand: '#2563EB',
        border: '#E5E7EB',
      },
      borderRadius: { xl: '14px' },
      boxShadow: { soft: '0 10px 30px rgba(0,0,0,0.08)' },
    },
  },
  plugins: [],
}
