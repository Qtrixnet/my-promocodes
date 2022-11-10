import React from 'react';
import './redirect-banner.scss';
import {useSelector} from "react-redux";
import cn from "classnames";

const RedirectBanner = () => {
  const viewport = useSelector(state => state.containerQuery.viewport);

  return (
    <div className={`banner banner_${cn(viewport)}`}>
      <h2 className={`banner__title banner__title_${cn(viewport)}`}>Распродажа<br/>11.11</h2>
      <a href="https://www.technodom.kz/cms/shoppingday" className={`banner__link banner__link_${cn(viewport)}`}>К товарам!</a>
    </div>
  );
};

export default RedirectBanner;
