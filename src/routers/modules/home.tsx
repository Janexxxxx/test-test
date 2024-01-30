import React from 'react';
import lazyLoad from '@/routers/utils/lazyLoad';
import { LayoutIndex } from '@/routers/constant';

const homeRouter = [
  {
    element: <LayoutIndex />,
    children: [
      {
        path: '/home/index',
        element: lazyLoad(React.lazy(() => import('@/views/home/index'))),
        meta: {
          requiresAuth: true,
          title: '首页',
          key: 'home',
        },
      },
    ],
  },
];
export default homeRouter;
