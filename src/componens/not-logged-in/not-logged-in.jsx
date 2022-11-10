import "./not-logeed-in.scss";
import {useEffect, useState} from "react";
import Button from "../button/button";
import {useSelector} from "react-redux";
import cn from "classnames";

const NotLoggedIn = () => {
  const [isAuthButtonShow, setIsAuthButtonShow] = useState(false);
  const viewport = useSelector(state => state.containerQuery.viewport);

  const handleAuthClick = () => {
    window.signInHelper()
  }

  useEffect(() => {
    if (window.signInHelper) {
      setIsAuthButtonShow(true)
    }
  }, [])

  return (
    <div className={`not-logged-in not-logged-in_${cn(viewport)}`}>
      <div className="not-logged-in__container">
        <h2 className={`not-logged-in__title not-logged-in__title_${cn(viewport)}`}>Нужно войти</h2>
        <p className={`not-logged-in__text not-logged-in__text_${cn(viewport)}`}>Авторизуйтесь для просмотра своих купонов</p>
        {isAuthButtonShow && (
          <Button
            onClick={handleAuthClick}
            type="primary"
            className={`not-logged-in__button not-logged-in__button_${cn(viewport)}`}
          >
            Войти
          </Button>
        )}
      </div>
      <img src="https://www.technodom.kz/under/shopping-day/hmmm.png" alt="нужно войти"/>
    </div>
  );
};

export default NotLoggedIn;
