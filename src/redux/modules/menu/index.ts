import { createSlice } from '@reduxjs/toolkit';
import { Menu } from '@/api/interface';

interface GlobalState {
  menuList: Menu.MenuOptions[];
}

const initialState: GlobalState = {
  menuList: [],
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenuListAction: (state, action) => {
      state.menuList = action.payload;
    },
  },
});

export const { setMenuListAction } = menuSlice.actions;
export default menuSlice.reducer;
