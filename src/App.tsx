import { HashRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Router from '@/routers';
import AuthRouter from '@/routers/utils/authRouter';
import '@/styles/globals.css';

function App() {
  return (
    <HashRouter>
      <ConfigProvider>
        <AuthRouter>
          <Router />
        </AuthRouter>
      </ConfigProvider>
    </HashRouter>
  );
}

export default App;
