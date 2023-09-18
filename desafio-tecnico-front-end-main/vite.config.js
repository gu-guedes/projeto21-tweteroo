import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dotenv from 'dotenv';
import { env } from 'vite-plugin-env';

dotenv.config();

export default defineConfig({
	plugins: [
		react(),
		env({
			dotenv:'.env'
		})
	],
});
