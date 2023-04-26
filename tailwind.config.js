/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,.module.js,scss}"],
	theme: {
		extend: {
			colors: {
				transparent: "transparent",
				current: "currentColor",

				gray: "#121829",
				primary: "#5a4af4",
				secondary: "#1ea5fc",
				tertary: "#b66dff",
				error: "#ff6161",
				warning: "#ffad49",
			},
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
