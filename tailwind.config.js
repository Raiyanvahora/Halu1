/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/data/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1240px",
      },
    },
    extend: {
      colors: {
        // Halu brand blue (from the logo) + lantern gold premium palette.
        // NOTE: the `jade` key is kept so existing `jade-*` classes across the
        // site re-theme at once — the values are now the brand blue scale.
        jade: {
          50: "#eef6fd",
          100: "#d6e8fa",
          200: "#aed1f4",
          300: "#79b1ea",
          400: "#458bda",
          500: "#2470c6",
          600: "#14579e",
          700: "#114782",
          800: "#133c6c",
          900: "#13345b",
          950: "#0a1f3a",
        },
        gold: {
          50: "#fdf8ed",
          100: "#f9ecca",
          200: "#f2d791",
          300: "#ebbd57",
          400: "#e6a730",
          500: "#d98a1c",
          600: "#bf6915",
          700: "#9e4b15",
          800: "#813c18",
          900: "#6b3216",
        },
        ink: "#1a1a1a",
        cream: "#ffffff",
        sand: "#f4f5f7",
        // Avian-style accents: green savings pill + red price
        save: "#16a34a",
        price: "#e11d48",
        charcoal: "#2e2e2e",
      },
      fontFamily: {
        // Avian uses bold geometric sans for headings; serif kept as optional accent.
        display: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        serif: ["var(--font-display)", "Fraunces", "Georgia", "serif"],
      },
      boxShadow: {
        // Soft, natural, cool-grey shadows (premium app feel — never harsh).
        soft: "0 6px 24px -10px rgba(16, 24, 40, 0.10)",
        card: "0 14px 40px -16px rgba(16, 24, 40, 0.16)",
        pill: "0 4px 16px -6px rgba(16, 24, 40, 0.12)",
        glow: "0 0 0 1px rgba(255,255,255,0.4), 0 18px 44px -16px rgba(16,24,40,0.30)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "kenburns": {
          "0%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1.18)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        marquee: "marquee 28s linear infinite",
        kenburns: "kenburns 18s ease-out alternate infinite",
      },
    },
  },
  plugins: [],
};
