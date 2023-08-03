const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	daisyui: {
		themes: ['dark', 'cupcake']
	},
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: colors.blue,
				secondary: colors.slate,
			}
		},
	},
	plugins: [require("daisyui"),require("@tailwindcss/typography"), require("@tailwindcss/forms")],
}
