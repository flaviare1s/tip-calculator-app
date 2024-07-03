/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        space: ["Space Mono", "monospace"],
      },
      colors: {
        "strong-cyan": "hsl(172, 67%, 45%)",
        "dark-cyan": "hsl(183, 100%, 15%)",
        "grayish-cyan": "hsl(186, 14%, 43%)",
        "light-grayish-cyan": "hsl(184, 14%, 56%)",
        "very-light-grayish-cyan": "hsl(185, 41%, 84%)",
        "very-light-grayish-cyan-hover": "hsl(189, 41%, 97%)",
      },
    },
    plugins: [],
  },
};
