import { defineConfig, ConfigEnv, UserConfig, loadEnv } from 'vite';
import { wrapperEnv } from './src/utils/getEnv';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// import tscPaths from 'vite-plugin-tsconfig-paths';
// https://vitejs.dev/config/
export default defineConfig((mode: ConfigEnv): UserConfig => {
  // mode: {command: 'build' | 'serve'; mode: string;ssrBuild?: boolean;}
  // env: {                                                                                                                                                                                             14:51:15
  //   VITE_USER_NODE_ENV: 'development',
  //   VITE_API_URL: '/api',
  //   VITE_GLOB_APP_TITLE: 'Hooks-Admin',
  //   VITE_PORT: '3301',
  //   VITE_OPEN: 'true',
  //   VITE_REPORT: 'false',
  //   VITE_BUILD_GZIP: 'false',
  //   VITE_DROP_CONSOLE: 'true'
  // }
  const env = loadEnv(mode.mode, process.cwd());
  const viteEnv = wrapperEnv(env);
  const __dirname = path.dirname(new URL(import.meta.url).pathname);
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    //配置端口 以及跨域代理，目标地址
    server: {
      host: '0.0.0.0',
      port: viteEnv.VITE_PORT,
      open: viteEnv.VITE_OPEN,
      cors: true,
      proxy: {
        '/api': {
          target: 'https://mock.mengxuegu.com/mock/62abda3212c1416424630a45', // easymock
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
    // plugins: [react(), tscPaths()],
    plugins: [react()],
  };
});
