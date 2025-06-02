export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        btn_color: "#E01B25"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      screens: {
        "forMenu": '992px',
        "2xl": '1441px',
      },
      fontSize: {
        'heading': ['clamp(32px, 4vw, 42px)', {
          lineHeight: '42px',
          fontWeight: '700'
        }],
        "heroHeading": 'clamp(40px, 5vw, 80px)'
        // 1.75rem ≈ 28px (minimum)
        // 2.625rem ≈ 42px (maximum)
        // 4vw makes it scale between these values
      },
    },
  },
  plugins: [],
  darkMode: 'media',
}