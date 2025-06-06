import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [tailwindcss()],

	// eslint-disable-next-line perfectionist/sort-objects
	build: {
		minify: false,
		outDir: "output",
		rollupOptions: {
			input: [
				"index.html",
				"signin.html",
				"signup.html",
				"reset-password.html",
				"contact.html",
				"about.html",
			],
		},
	},
});
