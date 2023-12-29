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
      colors:{
          secbg:'#EAFFFB',
          btn:'#D2FFF6',
          grstroke:'#CDFAF1',
          text:'#65C3A5',
          btnwhite:'#F9FEFD',
          brstroke:'#E4E6E5',
          line:'#DADADA',
          pribg:'#F8F8F8'
        },
      },
    },
  plugins: [],
}
export default config
