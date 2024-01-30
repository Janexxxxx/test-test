import { Layout } from 'antd';
import LayoutMenu from './components/Menu';

const LayoutIndex = () => {
  const { Sider } = Layout;
  return (
    <section className="flex min-w-[950px] h-full">
      <Sider trigger={null} width={220} theme="dark" collapsed={true}>
        <LayoutMenu></LayoutMenu>
      </Sider>
    </section>
  );
};
export default LayoutIndex;
