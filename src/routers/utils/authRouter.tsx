// import { useNavigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

const AuthRouter = (props: any) => {
  // const navigate = useNavigate();
  // const token = store.getState().global.token;
  const token = useSelector(state => state.global.token);
  console.log('ttttt', token);

  // if (!token) {
  //   navigate('/login', { replace: true });
  //   return null;
  // }
  // if (!token) return <Navigate to="/home/index" replace />;
  return props.children;
};
export default AuthRouter;
