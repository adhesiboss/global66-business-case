// front/tailwind.config.js
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './plugins/**/*.{js}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        // Tokens semánticos (Figma-like)
        primary: '#2F4FB2', // main blue
        accent: '#00E38C', // green accent
        ink: '#0B1220', // dark text
        muted: '#667085', // secondary text
        surface: '#FFFFFF',
        panel: '#F4F7FF', // light panel bg
      },
      borderRadius: {
        xl: '16px',
        '2xl': '20px',
        '3xl': '24px',
      },
      boxShadow: {
        // Token de sombra suave (equivalente a tu "shadow-soft")
        soft: '0 12px 32px rgba(11, 18, 32, 0.10)',
      },
      fontFamily: {
        // Mantiene look moderno similar al default, pero tokenizado
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Ubuntu',
          'Cantarell',
          'Noto Sans',
          'sans-serif',
        ],
      },
      letterSpacing: {
        tight: '-0.025em',
        wide: '0.025em',
      },
    },
  },
  plugins: [],
}