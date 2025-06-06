import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [tailwindcss()],
	build: {
		outDir: "output",
		minify: false,
		rollupOptions: {
			input: {
				index: 'index.html',
				signup: 'signup.html',
				signin: 'signin.html'
			}
		}
	},
	server: {
		open: '/index.html'
	},
	base: '/'
});
