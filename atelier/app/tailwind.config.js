const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        'custom-black': '0 4px 25px -3px rgba(0, 0, 0, 0.7), 0 4px 6px -10px rgba(0, 0, 0, 0.5)',
        'green': '0 4px 25px -8px rgba(0, 0, 0, 0.7), 0 4px 6px -10px rgba(0, 0, 0, 0.5)',
        'green-cyan1': '0 4px 25px 3px rgba(0, 0, 0, 0.7), 0 4px 6px -10px rgba(0, 0, 0, 0.5)',
      },
      screens: {
        'md': '768px', // This is for tablets
        'sl': '1024px', // This is for small laptops
        'al': '1440px', // This is for average laptops
        'lg': '1650px', // 
        '2lg': '1920px',
        'xl':'2560px',
      },
        colors: {
            'white':'#ffff',
            'green-cyan1':'#3b978a',
            'green-cyan' : '#6ec6ba',
            'green': '#247a65',
            'green-dark1': '#025643',
            'gray-dark': '#273444',
            'gray': '#8492a6',
            'gray-light': '#F5F4F4',
            'black' : '#000000',
            border: "hsl(var(--border))",
              input: "hsl(var(--input))",
              ring: "hsl(var(--ring))",
              background: "hsl(var(--background))",
              foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        '2xl':`calc(var(--radius) + 10px)`,
        xl:`calc(var(--radius) + 5px)`,
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"),
  require("tailwindcss-animate")],
}
