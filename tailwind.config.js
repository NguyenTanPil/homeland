/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		extend: {
			maxWidth: {
				1440: '1440px',
				480: '480px',
			},
			maxHeight: {
				640: '640px',
			},
			minHeight: {
				1800: '1800px',
			},
		},
	},
	plugins: [],
};
