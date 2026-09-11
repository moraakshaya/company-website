import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brown: "var(--color-brown)",
        orange: "var(--color-orange)",
        ivory: "var(--color-ivory)",
        peach: "var(--color-peach)",
        lavender: "var(--color-lavender)",
        teal: "var(--color-teal)",
        muted: "var(--color-muted)",
      }
    },
  },
  plugins: [],
} satisfies Config

