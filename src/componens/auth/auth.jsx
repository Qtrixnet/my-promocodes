import "./auth.scss";
import {useSelector} from "react-redux";
import PromocodesContainer from "../promocodes-container/promocodes-container";
import NotLoggedIn from "../not-logged-in/not-logged-in";

const Auth = () => {
  const isLogin = useSelector(state => state.promocodesData.isLogin);
  return (
    <>
      {
        isLogin ? (<PromocodesContainer/>) : (<NotLoggedIn/>)
      }
    </>
  )
};

export default Auth;
