import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			// All requests to /api will be proxied to http://localhost:5000
			"/api": {
				target: "http://localhost:5000", // Your backend address (JSON Server)
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""), // Removes the /api prefix before the request
			},
		},
	},
});
