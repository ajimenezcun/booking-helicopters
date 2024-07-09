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
					'50': '#f2f7fc',
					'100': '#e1edf8',
					'200': '#cbdff2',
					'300': '#a6cbea',
					'400': '#7cafde',
					'500': '#5d93d4',
					'600': '#497ac7',
					'700': '#3f67b6',
					'800': '#395594',
					'900': '#324976',
					'950': '#263351',
				},
				'second': {
					'50': '#f2f8f9',
					'100': '#ddebf0',
					'200': '#bfd8e2',
					'300': '#93bccd',
					'400': '#5b95ae',
					'500': '#447c96',
					'600': '#3b677f',
					'700': '#355569',
					'800': '#324958',
					'900': '#2d3e4c',
					'950': '#1a2732',
				},
				'cta': {
					'50': '#fdf8ef',
					'100': '#fbeed9',
					'200': '#f6d9b2',
					'300': '#f0bf81',
					'400': '#e99c4e',
					'500': '#e3802c',
					'600': '#ce6420',
					'700': '#b14f1d',
					'800': '#8d3f1f',
					'900': '#72361c',
					'950': '#3d190d',
				}
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
				'body': { fontSize: theme('fontSize.base'), fontFamily: 'Nanum Gothic' }
			})
		})
	],
}
