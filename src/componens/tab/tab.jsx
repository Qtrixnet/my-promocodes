import React from 'react';
import './tab.scss';
import {useSelector} from 'react-redux';
import cn from 'classnames';

const Tab = ({text, number, cb, id, currentTab, isCountShow}) => {
  const viewport = useSelector(state => state.containerQuery.viewport);
  const isLogin = useSelector(state => state.promocodesData.isLogin);

  return (
    <button className={`tab tab_${cn(viewport)} ${currentTab === id ? 'tab--active' : ''}`} onClick={() => cb(id)}>
      <span>{text}</span>
      {isCountShow && <span className="tab__number">{isLogin ? number : '?'}</span>}
    </button>
  );
};

export default Tab;
