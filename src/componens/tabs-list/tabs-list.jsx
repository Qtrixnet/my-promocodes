import React, {useState} from 'react';
import Tab from '../tab/tab';
import './tabs-list.scss';
import {useSelector} from "react-redux";

const TabsList = ({currentTab, setCurrentTab}) => {
  const promocodes = useSelector(state => state.promocodesData.promocodes);
  const [tabs, setTabs] = useState([
    {
      id: 1,
      text: 'Моя коллекция',
      isCountsShow: true,
    },
    {
      id: 2,
      text: 'Как использовать',
      isCountsShow: false,
    }
  ])

  const handleTabClick = (id) => setCurrentTab(id);

  return (
    <div className="tabs">
      {tabs.map(tab => <Tab
        text={tab.text}
        currentTab={currentTab}
        cb={handleTabClick}
        id={tab.id}
        number={promocodes ? promocodes.length : '?'}
        isCountShow={tab.isCountsShow}
        key={tab.id}/>)}
    </div>
  );
};

export default TabsList;
