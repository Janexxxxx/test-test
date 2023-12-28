import logo from '@/assets/logo.png';
import CustomLoginForm from './components/CustomLoginForm';
import { LoginContainer, LoginBox, LoginForm, LoginLogo, LoginText } from './style';

const Login = () => {
  return (
    <LoginContainer>
      <LoginBox>
        <div>w</div>
        <LoginForm>
          <LoginLogo>
            {/* <img width="70px" src={logo} /> */}
            <LoginText>后台管理项目</LoginText>
          </LoginLogo>
          <CustomLoginForm />
        </LoginForm>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;
