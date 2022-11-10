import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  promocodesRequest: false,
  promocodes: [],
  isLogin: false,
};

export const containerQuerySlice = createSlice({
  name: 'container-query',
  initialState,
  reducers: {
    promocodesRequestAction: (state) => {
      state.promocodes = [];
      state.promocodesRequest = true;
    },
    promocodesRequestSuccessAction: (state, action) => {
      state.promocodes = action.payload;
      state.promocodesRequest = false;
    },
    setIsLoginAction: (state, action) => {
      state.isLogin = action.payload;
    }
  }
});

const {actions, reducer} = containerQuerySlice;

export const {
  promocodesRequestAction,
  promocodesRequestSuccessAction,
  setIsLoginAction
} = actions;

export default reducer
