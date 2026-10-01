/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#52665C",
          dark: "#3F5047",
          light: "#667D71",
        },
        ivory: {
          DEFAULT: "#F7F4EC",
          light: "#FCFAF6",
          dark: "#EDE8DD",
        },
        cream: {
          DEFAULT: "#F7F4EC",
          light: "#FCFAF6",
          dark: "#EDE8DD",
        },
        sage: {
          DEFAULT: "#B8C5B8",
          light: "#C9D4C9",
          dark: "#9BAA9B",
        },
        misty: {
          DEFAULT: "#B9D1D5",
          light: "#D0E1E4",
          dark: "#9EBCC1",
        },
        charcoal: {
          DEFAULT: "#29312E",
          light: "#414C48",
          dark: "#1A201E",
        },
        warmgrey: {
          DEFAULT: "#6F756F",
          light: "#8B928B",
          dark: "#575D57",
        },
        borderNeutral: "#E3DDD2",
      },
      fontFamily: {
        cormorant: ["'Cormorant Garamond'", "Georgia", "serif"],
        manrope: ["'Manrope'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Manrope'", "system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.15em",
        wide: "0.08em",
        wider: "0.14em",
        widest: "0.18em",
      },
      lineHeight: {
        editorial: "1.15",
        relaxed: "1.68",
      },
    },
  },
  plugins: [],
};
