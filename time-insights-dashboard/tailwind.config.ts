import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Your previous colors can remain here
        'brand-background': '#F7F8FA',
        'brand-card': '#2C3A4B',
        'brand-accent': '#5C67F2',
        'brand-positive': '#4ADE80',
        'brand-negative': '#F87171',
        'brand-sidebar-new': '#253D61',
        'brand-active': '#ADCEEB',
        'brand-border': '#4A5568', // A visible border color for the line
      },
    },
  },
  plugins: [],
}
export default config