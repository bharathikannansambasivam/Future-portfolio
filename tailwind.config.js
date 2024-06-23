/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    animation: {
      "bounce-slowest": " bounce 2s infinite",
      "bounce-slower": " bounce 2.5s infinite",
      "bounce-slow": " bounce 1.5s infinite",
      "bounce-jump": " bounce 4s infinite",
      "animate-spin": "spin 1s linear infinite",
      "animate-ping": "ping 1s cubic-bezier(3,0, 1, 0) infinite",
      "animate-pulse": "pulse 2s cubic-bezier(1, 0, 0.6, 1) infinite",
    },
  },
  plugins: [],
};
