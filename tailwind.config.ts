import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "White": "hsl(0, 0%, 100%)",
        "Light-gray": "hsl(212, 45%, 89%)",
        "Grayish-blue": "hsl(220, 15%, 55%)",
        "Dark-blue": "hsl(218, 44%, 22%)"
      }
    },
  },
  plugins: [],
}
export default config
