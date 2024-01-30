import welcome from '@/assets/welcome01.png';
// import { HomeCard } from './style';
import { useSelector } from 'react-redux';
// import { connect } from 'react-redux';

//1、为什么store.getState().global.token获取不到token;2、为什么路由守卫不生效
//解答1、在 Redux Toolkit 中，通过 configureStore 创建的 Redux store 使用了 immer 库，
// 它允许直接在 reducer 中修改 state，而不需要返回新的 state 对象。
// 这就意味着您在 reducer 中使用的 state 对象和 store.getState() 返回的对象可能不是同一个引用。

//解答2、问题出在路由守卫的逻辑中，不能直接if (!token) return <Navigate to="/home/index" replace />;
// 应该用这个逻辑：
// if (!route.meta?.requiresAuth) {
//   console.log("route", route);
//   console.log("props.children", props.children);
//   return props.children;
// }
//目前可不使用该路由守卫功能

const Home = () => {
  // const token = store.getState();
  const token = useSelector(state => state.global.token);
  console.log('tokenhome', token);

  return (
    <div className="flex items-center justify-center h-full">
      <img width="70%" src={welcome} alt="welcome" />
      <div>{}</div>
    </div>
  );
};

// const mapStateToProps = (state: any) => state.global;
// export default connect(mapStateToProps, null)(Home);
export default Home;
