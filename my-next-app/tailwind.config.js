/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode : "class",
  theme: {
    extend: {
       colors: {
        // Add your custom colors here
        'primary': '#6D55C1',
        'bg-color': '#111111',
        'white': '#ffff',
        'secondary': '#2ecc71',
        'black': '#040C1F',
        'light-dark': '#1F2937',
        'dark': '#111827',
        'light': '#fff',
        'danger': '#dc2626',
        'success': '#22c55e',
        'warning': '#eab308',
        'info': '#06b6d4',
        'red': '#fc1043',
        // You can define as many custom colors as you need
      },
    },
  },
  plugins: [],
}