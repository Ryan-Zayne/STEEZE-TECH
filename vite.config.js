import { globSync } from "glob";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		minify: false,
		outDir: "output",
		rollupOptions: {
			input: globSync("*.html"),
		},
	},
});
