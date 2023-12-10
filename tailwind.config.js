/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins",
      },
      colors: {
        black: "#000B10",
        white: "#ffffff",
        dark: "#212121",
        error: "#D86161",
        primary: {
          DEFAULT: "#1597E4",
        },
        gray: {
          DEFAULT: "#7A7A7A",
        },
      },
      fontSize: {
        x: "0.75rem", // 12px
        xxs: "0.875rem", // 14px
        xs: "1rem", //16px
        s: "1.125rem", //18px
        sm: "1.25rem", //20px
        m: "1.375rem", //22px
        lg: "1.5rem", //24px
        xl: "1.625rem", //26px
        xxl: "2rem", //32px
        "3xl": "2.125rem", //34px
        "4xl": "2.25rem", //36px
        "5xl": "2.875rem", //46px
        "6xl": "3.375rem", //54px
        "7xl": "3.875rem", //62px
        "8xl": "4.625rem", //74px
        "9xl": "3.875rem", //62px
        "10xl": "5.125rem", //82px
      },
      screens: {},
    },
  },
  plugins: [],
};
