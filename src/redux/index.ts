import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './modules/global';

//创建store
export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});

// 创建持久化 store
// const persistor = persistStore(store);
