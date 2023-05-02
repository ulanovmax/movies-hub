/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,.module.js,scss}"],
	theme: {
		extend: {
			colors: {
				transparent: "transparent",
				current: "currentColor",

				grey: "#121829",
				"grey-400": "#767E94",
				primary: "#5a4af4",
				secondary: "#1ea5fc",
				tertary: "#b66dff",
				error: "#ff6161",
				warning: "#ffad49",
			},
		},

		fontSize: {
			base: "16px",
		},

		screens: {
			xs: "361px",
			se: "381px",
			sm: "641px",
			md: "769px",
			lg: "1025px",
			xl: "1281px",
			"2xl": "1537px",
		},
	},
	plugins: [],
};
