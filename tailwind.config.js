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
      boxShadow: {
        "css-1": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
      },
    },
  },
  plugins: [],
};
