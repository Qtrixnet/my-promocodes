import { combineReducers } from "redux";
import containerQueryReducer from './container-query';
import promocodesReducer from './promocodes';

export const rootReducer = combineReducers({
  containerQuery: containerQueryReducer,
  promocodesData: promocodesReducer
});
