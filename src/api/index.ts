import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const requestHttp = axios.create({
  //import.meta.env 是 Vite 提供的一个特殊变量，用于在项目中访问环境变量。它可以在你的 Vite 项目中的任何地方使用，而无需导入。
  baseURL: import.meta.env.VITE_API_URL as string,
  timeout: 10000,
  // withCredentials: true,
});
requestHttp.interceptors.request.use(config => {
  return config;
});
requestHttp.interceptors.response.use((response: AxiosResponse) => {
  const { data } = response;
  return data;
});

export default requestHttp;
