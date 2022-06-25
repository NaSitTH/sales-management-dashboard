module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /(bg|text|border)-(app)-(orange|green|blue|pink)/,
    },
  ],
  theme: {
    fontSize: {
      xs: ["12px", "15px"],
      sm: ["14px", "18px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      super: ["60px", "70px"],
    },
    extend: {
      colors: {
        "app-d900": "#171821",
        "app-d800": "#21222D",
        "app-d700": "#2B2B36",
        "app-d600": "#2C2D33",
        "app-d500": "#87888C",
        "app-d400": "#A0A0A0",
        "app-d300": "#D2D2D2",
        "app-green": "#A9DFD8",
        "app-orange": "#FEB95A",
        "app-pink": "#F2C8ED",
        "app-blue": "#20AEF3",
      },
      keyframes: {
        progress: {
          from: { width: "0%" },
          to: { width: "75%" },
        },
      },
      animation: {
        progress: "progress .5s linear",
      },
    },
  },
  plugins: [],
};
