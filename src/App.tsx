import { HashRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Router from '@/routers';

function App() {
  return (
    <HashRouter>
      <ConfigProvider>
        <Router />
      </ConfigProvider>
    </HashRouter>
  );
}

export default App;
