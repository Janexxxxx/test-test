import axios, { AxiosResponse } from 'axios';
import { useSelector } from 'react-redux';

const createAxiosInstance = (token: string) => {
  const requestHttp = axios.create({
    //import.meta.env 是 Vite 提供的一个特殊变量，用于在项目中访问环境变量。它可以在你的 Vite 项目中的任何地方使用，而无需导入。
    baseURL: import.meta.env.VITE_API_URL as string,
    timeout: 10000,
    // withCredentials: true,
  });
  requestHttp.interceptors.request.use((config: any) => {
    console.log('又来一个1', token);

    return { ...config, headers: { ...config.headers, 'x-access-token': token } };
  });
  requestHttp.interceptors.response.use((response: AxiosResponse) => {
    const { data } = response;
    return data;
  });
  return requestHttp;
};

const getRequestHttp = () => {
  const token: string = useSelector((state: any) => state.global.token); // 注意替换你的状态结构
  return createAxiosInstance(token);
};
export default getRequestHttp;
