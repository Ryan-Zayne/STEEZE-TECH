// import tailwindcss from "@tailwindcss/vite";
import { globSync } from "glob";
import { defineConfig } from "vite";

export default defineConfig({
	// plugins: [tailwindcss()],

	build: {
		minify: false,
		outDir: "output",
		rollupOptions: {
			input: globSync("*.html"),
		},
	},
});
