import { combineReducers } from "redux";
import containerQueryReducer from './container-query';

export const rootReducer = combineReducers({
  containerQuery: containerQueryReducer,
});
