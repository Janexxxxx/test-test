import http from '@/api';
import { Login, Menu } from '@/api/interface/index';
import { PORT1 } from '@/api/servicePort';

// 用户登录接口
export const loginApi = (params: Login.ReqLoginForm) => {
  return http.post<Login.ResLogin>(PORT1 + `/login`, params);
};

//获取菜单列表
export const getMenuList = () => {
  return http.get<Menu.MenuOptions>(PORT1 + `/menu/list`);
};
