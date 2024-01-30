import React, { useEffect, useState } from 'react';
import { Spin, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { getMenuList } from '@/api/services/login';
import { Menu as MenuType } from '@/api/interface';
import * as Icons from '@ant-design/icons';
import { connect } from 'react-redux';
import { setMenuListAction } from '@/redux/modules/menu';

const LayoutMenu: React.FC = (props: any) => {
  const { setMenuListAction } = props;
  type MenuItem = Required<MenuProps>['items'][number];
  const [menuList, setMenuList] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(false);

  function getItem(label: React.ReactNode, key?: React.Key | null, icon?: React.ReactNode, children?: MenuItem[], type?: 'group'): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }
  useEffect(() => {
    getMenuData();
  }, []);

  const getMenuData = async () => {
    setLoading(true);
    try {
      const data = await getMenuList();
      console.log('aaa', data);
      // if (!data) return;
      // setMenuList(deepLoopFloat(data));
      // setMenuListAction(data);
    } finally {
      setLoading(false);
    }
  };

  const deepLoopFloat = (menuList: MenuType.MenuOptions[], newArr: MenuItem[] = []) => {
    menuList.forEach(item => {
      if (!item?.children?.length) return newArr.push(getItem(item.title, item.path, addIcon(item.icon!)));
      newArr.push(getItem(item.title, item.path, addIcon(item.icon!), deepLoopFloat(item.children)));
    });
    return newArr;
  };

  const customIcons: { [key: string]: any } = Icons;
  const addIcon = (name: string) => {
    return React.createElement(customIcons[name]);
  };

  const clickMenu: MenuProps['onClick'] = e => {
    console.log('vv', e);
  };
  return (
    <div>
      <Spin spinning={loading} tip="Loading...">
        <Menu
          theme="dark"
          mode="inline"
          // openKeys={} //选中的标签
          // selectedKeys={} //点击时可以选中标签，但是刷新后该选中的标签会消失
          onClick={clickMenu} //点击菜单栏，不包含子菜单，子菜单点击不了
          // onOpenChange={} //点击子菜单
          items={menuList}
        />
      </Spin>
    </div>
  );
};

// const mapStateToProps = (state: any) => state.menu;
const mapDispatchToProps = { setMenuListAction };
export default connect(null, mapDispatchToProps)(LayoutMenu);
// export default LayoutMennu;
