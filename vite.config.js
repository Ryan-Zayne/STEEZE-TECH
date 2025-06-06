import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [tailwindcss()],
	build: {
		outDir: "output",
		minify: false,
		rollupOptions: {
			input: ["index.html", "signin.html", "signup.html", "reset-password.html"]
		}
	},
	server: {
		open: '/index.html'
	},
	base: '/'
});
