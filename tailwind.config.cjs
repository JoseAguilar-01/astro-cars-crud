/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,ts}', './node_modules/flowbite/**/*.js'],
	theme: {
		extend: {},
	},
	plugins: [require('flowbite/plugin')],
};
