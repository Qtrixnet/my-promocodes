import './app.scss';
import {useEffect, useState} from 'react';
import {useContainerQuery} from 'react-container-query';
import breakPoints from '../../utils/break-points';
import {useDispatch} from 'react-redux';
import {setContainerViewport} from '../../services/actions/container-query';
import Header from '../header/header';
import TabsList from '../tabs-list/tabs-list';
import NotesList from '../notes-list/notes-list';
import Instruction from '../instruction/instruction';
import StepCard from '../step-card/step-card';
import StepsList from '../steps-list/steps-list';
import cn from 'classnames';
import RedirectBanner from '../redirect-banner/redirect-banner';
import promocodesHelper from "../../utils/PromocodesHelper";
import {promocodesRequest, promocodesRequestSuccess, setIsLogin} from "../../services/actions/promocodes";
import Redirect from "../redirect/redirect";
import EmptyPromocodes from "../empty-promocodes/empty-promocodes";
import getCookie from "../../utils/getCookie";
import useInterval from "../../hooks/useInterval";
import Auth from "../auth/auth";

function App() {
  const [currentTab, setCurrentTab] = useState(1);

  const dispatch = useDispatch();
  const [viewport, containerRef] = useContainerQuery(breakPoints);

  const handleSavePromocodes = (promocodes) => {
    dispatch(promocodesRequestSuccess(promocodes))
  }

  const handleCheckAuth = () => {
    const isLoggedIn = getCookie('accessToken');

    if (Boolean(isLoggedIn)) {
      dispatch(setIsLogin(true));
    } else {
      dispatch(setIsLogin(false));
    }
  }

  useInterval(handleCheckAuth, 200);

  useEffect(() => {
    dispatch(setContainerViewport(viewport));
  }, [viewport, dispatch])

  useEffect(() => {
    dispatch(promocodesRequest());
    promocodesHelper.getPromocodesData(handleSavePromocodes);
  }, [])

  return (
    <div className={`app app_${cn(viewport)}`} ref={containerRef}>
      <div className="app__container">
        <Header/>
        <TabsList currentTab={currentTab} setCurrentTab={setCurrentTab}/>
        {
          currentTab === 1 && (<Auth />)
        }
        {
          currentTab === 2 && (
            <>
              <StepsList/>
              <NotesList/>
              <Instruction/>
            </>
          )
        }
      </div>
    </div>
  );
}

export default App;
