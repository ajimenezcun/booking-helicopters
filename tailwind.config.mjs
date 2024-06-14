/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				josefin: ['"Josefin Sans"'],
				nanum: ['"Nanum Gothic"'],
				montse: ['"Montserrat"']
			},
			colors: {
				'primary': {
					'50': '#effaff',
					'100': '#dff4ff',
					'200': '#b7ecff',
					'300': '#77deff',
					'400': '#2fcdff',
					'500': '#04b8f3',
					'600': '#0094d0',
					'700': '#0076a8',
					'800': '#01648b',
					'900': '#075273',
					'950': '#063f5c',
				},
				'second': {
					'50': '#f0fbfa',
					'100': '#d8f5f5',
					'200': '#b6e9eb',
					'300': '#83d8dd',
					'400': '#3fbac4',
					'500': '#2da1ad',
					'600': '#288392',
					'700': '#276b77',
					'800': '#275763',
					'900': '#254a54',
					'950': '#133039',
				},
				'third': {
					'50': '#f3f9fc',
					'100': '#e5f3f9',
					'200': '#c6e6f1',
					'300': '#a7daea',
					'400': '#5abad6',
					'500': '#35a2c2',
					'600': '#2584a4',
					'700': '#1f6a85',
					'800': '#1d596f',
					'900': '#1d4a5d',
					'950': '#14303d',
				},

			}
		},
	},
	plugins: [
		plugin(function ({ addBase, theme }) {
			addBase({
				'h1': { fontSize: '3rem', fontWeight: 'bold', fontFamily: 'Josefin Sans' },
				'h2': { fontSize: '2.5rem', fontWeight: 'bold', fontFamily: 'Josefin Sans' },
				'h3': { fontSize: '2rem', fontWeight: 'bold', fontFamily: 'Josefin Sans' },
				'h4': { fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'Josefin Sans' },
				'h5': { fontSize: '1.25rem', fontWeight: 'bold', fontFamily: 'Josefin Sans' },
				'body': { fontSize: theme('fontSize.base'), fontFamily: 'Nanum Gothic' },
				'.demo': { fontSize: '30px' }
			})
		})
	],
}
