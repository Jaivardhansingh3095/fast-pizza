/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      pizza: "Roboto Mono, monospace",
    },
    extend: {
      height: {
        screen: "100dvh",
      },
      transitionTimingFunction: {
        "slow-mo": "cubic-bezier(1,.01,1,.74)",
      },
      boxShadow: {
        "my-shadow": `box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset`,
      },
    },
  },
  plugins: [],
};
