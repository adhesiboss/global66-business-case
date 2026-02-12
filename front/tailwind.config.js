// front/tailwind.config.js
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
        // Brand (tu base)
        primary: '#2F4FB2',
        accent: '#00E38C',

        // Semantic (para maquetar como Figma, sin depender de gray-*)
        ink: '#0B1220',          // texto principal
        muted: '#667085',        // texto secundario
        surface: '#FFFFFF',      // cards
        canvas: '#F6F7FB',       // fondo página
        border: '#E6E8F0',       // borde suave

        // Opcionales (si los usas en el hero/glow)
        soft: '#EEF1F7',         // caja gris del hero
      },

      boxShadow: {
        soft: '0 12px 32px rgba(11, 18, 32, 0.10)',
        glow: '0 0 60px rgba(47, 79, 178, 0.25)',
      },

      borderRadius: {
        xl: '16px',
        '2xl': '20px',
      },
    },
  },
  plugins: [],
}