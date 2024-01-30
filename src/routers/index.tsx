//三块工作内容：

//菜单栏顺序
//先modules/**.tsx分组写好菜单内容，再在routers / index.tsx里面导入所有菜单
//在公共组件Menu导入菜单栏，在页面中展示
//在src/layouts中搭建整体一个框架布局，包括侧边栏、顶部导航、页面内容等，具体的样式和布局逻辑可以在引入的子组件中分别实现
import { Navigate, useRoutes } from 'react-router-dom';
import Login from '@/views/login/index';
import { RouteObject } from '@/routers/interface';

type Module = {
  default: RouteObject[]; // 假设模块导出的是 RouteObject 数组
};

// const metaRouters = import.meta.globEager('./modules/*.tsx');
const metaRouters = import.meta.glob('./modules/*.tsx', { eager: true });
export const routerArray: RouteObject[] = [];
Object.keys(metaRouters).forEach(item => {
  const modules = metaRouters[item] as Module;
  Object.keys(modules).forEach((key: string) => {
    if (key === 'default') {
      routerArray.push(...(modules[key] as RouteObject[]));
    }
  });
});

const rootRouter: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/login" />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  ...routerArray,
];
const Router = () => {
  const routes = useRoutes(rootRouter);
  return routes;
};

export default Router;
