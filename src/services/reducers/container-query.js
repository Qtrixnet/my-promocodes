import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  viewport: null
};

export const containerQuerySlice = createSlice({
  name: 'container-query',
  initialState,
  reducers: {
    setContainerViewportAction: (state, action) => {
      state.viewport = action.payload
    }
  }
});

const {actions, reducer} = containerQuerySlice;

export const {
  setContainerViewportAction
} = actions;

export default reducer
