import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
// import tscPaths from 'vite-plugin-tsconfig-paths';
// https://vitejs.dev/config/
export default defineConfig(() => {
  const __dirname = path.dirname(new URL(import.meta.url).pathname);
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    // plugins: [react(), tscPaths()],
    plugins: [react()],
  };
});
