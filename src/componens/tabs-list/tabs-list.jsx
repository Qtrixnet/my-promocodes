import React, { useState } from 'react';
import Tab from '../tab/tab';
import './tabs-list.scss';

const TabsList = () => {
    const [tabs, setTabs] = useState([
        {
            id: 1,
            text: 'Моя коллекция',
        },
        {
            id: 2,
            text: 'Как использовать',
        }
    ])
    const [currentTab, setCurrentTab] = useState(2);

    const handleTabClick = (id) => setCurrentTab(id);

    return (
        <div className="tabs">
            {tabs.map(tab => <Tab text={tab.text} currentTab={currentTab} cb={handleTabClick} id={tab.id}
                                  key={tab.id}/>)}
        </div>
    );
};

export default TabsList;
