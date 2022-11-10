import {promocodesRequestAction, promocodesRequestSuccessAction, setIsLoginAction} from "../reducers/promocodes";

export const promocodesRequest = () => dispatch => dispatch(promocodesRequestAction());
export const promocodesRequestSuccess = promocodes => dispatch => {
  const filteredPromocodes = promocodes.filter(promocode => promocode.isReceived);
  dispatch(promocodesRequestSuccessAction(filteredPromocodes));
};
export const setIsLogin = status => dispatch => dispatch(setIsLoginAction(status));
