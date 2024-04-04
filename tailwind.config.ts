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
          secbg:'#202020',
          btn:'#262626',
          grstroke:'#202020',
          buttons:'#9747FF',
          text:'#a06be3',
          btnwhite:'#262626',
          brstroke:'#E4E6E5',
          line:'#323232',
          pribg:'#161616'
        },
      },
    },
  plugins: [],
}
export default config
