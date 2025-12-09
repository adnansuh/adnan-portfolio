export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Existing colors (keep them)
        dark: "#0b0b0d",
        dark2: "#121214",
        purpleAccent: "#a855f7",
        purpleNeon: "#c084fc",
        purpleSoft: "#d8b4fe",

        // Dynamic theme colors
        primary: "var(--primary)",
        accent: "var(--accent)",
      },
    },
  },
  plugins: [],
};
