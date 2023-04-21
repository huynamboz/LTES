/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"!./components/loading/**/*.vue"
	],
	theme: {
		colors: {
			white: '#ffffff',
			gray:{
				100:'#8f8f8f',
				200:'#131e2f',
				300:'#0e1827',
			},
			yellow:{
				100:'#ffcd78',
			},
			blue:{
				100:'#3a95c9'
			}
		},
		borderRadius: {
			'5': '5px',
			'10': '10px',
			'20': '20px',
			'30': '30px',
		},
		borderWidth: {
			'0': '0',
			'1': '1px',
		},
		extend: {},
	},
	plugins: [],
}

