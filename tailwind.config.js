/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "var(--blue)",
        "pale-blue": "var(--pale-blue)",
        "light-red": "var(--light-red)",
        gray: "var(--gray)",
        "very-dark-blue": "var(--very-dark-blue)",
      },
      fontFamily: {
        libre: "var(--libre)",
      },
    },
  },
  plugins: [],
};
