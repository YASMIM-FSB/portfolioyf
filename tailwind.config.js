/** @type {import('tailwindcss').Config} */
cat > tailwind.config.js << 'EOF'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
  extend: {
    backgroundImage: {
      'gradient-primary': 'linear-gradient(to right, #3b82f6, #9333ea, #ec4899)',
    },
  },
},
variant: {
  ...,
  "gradient-primary":
    "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:opacity-90",
},
  plugins: [],
}
