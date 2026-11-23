/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        body: ["var(--font-body)", "Georgia", "serif"],
      },
      colors: {
        wine: {
          50: "#fbf1ee",
          100: "#f6e1dc",
          200: "#ecc6c3",
          300: "#d99aa0",
          400: "#c06a78",
          500: "#a8344f",
          600: "#a3173a",
          700: "#8f1231",
          800: "#7a0f27",
          900: "#4a0818",
        },
        cream: {
          50: "#fdf6f2",
          100: "#f9ebe5",
          200: "#f3dcd4",
        },
      },
      keyframes: {
        confetti: {
          "0%": { transform: "translateY(-10vh) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(110vh) rotate(720deg)", opacity: "0.9" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(5px)" },
          "75%": { transform: "translateX(-3px)" },
        },
        beat: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0) rotate(var(--r, 0deg))" },
          "50%": { transform: "translateY(-12px) rotate(calc(var(--r, 0deg) + 6deg))" },
        },
      },
      animation: {
        confetti: "confetti linear infinite",
        fadeUp: "fadeUp 0.6s ease-out both",
        shake: "shake 0.35s ease-in-out",
        beat: "beat 1.8s ease-in-out infinite",
        bob: "bob 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
