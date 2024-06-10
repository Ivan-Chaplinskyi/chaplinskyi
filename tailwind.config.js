/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      maxWidth: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: '1440px',
      },
      colors: {
        black: "#0A0A0A",
        neutralBlack: "#222222",
        white: "#FFFFFF",
        primary: "#D3E97A",
        text: "#C7C7C7",
      },
      fontSize: {
        base: '16px'
      },
      fontFamily: {
        BebasNeue: ['BebasNeue Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
