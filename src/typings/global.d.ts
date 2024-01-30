declare type Recordable<T = any> = Record<string, T>;

declare interface ViteEnv {
  VITE_USER_NODE_ENV: string;
  VITE_API_URL: string;
  VITE_GLOB_APP_TITLE: string;
  VITE_PORT: number;
  VITE_OPEN: boolean;
  VITE_REPORT: boolean;
  VITE_BUILD_GZIP: boolean;
  VITE_DROP_CONSOLE: boolean;
}
