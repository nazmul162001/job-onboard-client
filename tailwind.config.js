module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        customWidth: "auto 200px 200px 200px auto",
        sidebarWidth: '400px auto',
        sidebarMdWidth: '200px auto',
      },
    },
  },
  daisyui: {
    themes: [
      {
        job_onboards_theme: {
          primary: "#8b5cf6",
          secondary: "#a855f7",
          accent: "#FF4545",
          neutral: "#3d4451",
          success: "#22c55e",
          warning: "#facc15",
          error: "#ff3333",
          "base-100": "#ffffff",
          "base-200": "#FFF0F5",
          "base-300": "#f5f6fa",
        },
      },
      "night",
    ],
  },
  plugins: [require("daisyui") , require('@tailwindcss/typography')] ,
};
