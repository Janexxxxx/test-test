// import { UnknownAction } from 'redux';
// import produce from 'immer';
// import * as types from '@/redux/mutation-types';
// import { GlobalState } from '@/redux/interface';

// const globalState: GlobalState = {
//   token: '',
// };

// const global = (state: GlobalState = globalState, action: any) =>
//   produce(state, (draftState: GlobalState) => {
//     switch (action.type) {
//       case types.SET_TOKEN:
//         draftState.token = action.token;
//         break;
//       default:
//         break;
//     }
//   });
// export default global;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GlobalState {
  token: string;
}

const initialState: GlobalState = {
  token: '',
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = globalSlice.actions;
export default globalSlice.reducer;
