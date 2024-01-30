import logo from '@/assets/logo.png';
import CustomLoginForm from './components/CustomLoginForm';

const Login = () => {
  return (
    <div className="relative flex items-center justify-center min-w-[550px] h-full min-h-[550px] bg-[url('src/assets/login_bg.svg')] bg-[#eeeeee] bg-cover bg-center">
      <div className="flex items-center justify-around w-[96%] h-[94%] bg-white bg-opacity-80 rounded-10">
        <div>w</div>
        <div className="rounded-10 pt-[40px] pb-[25px] px-[45px] shadow-md">
          <div className="flex items-center justify-center mb-[40px]">
            {/* <img width="70px" src={logo} /> */}
            <span className="pl-[24px] text-[48px] font-blod whitespace-nowrap">后台管理项目</span>
          </div>
          <CustomLoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
