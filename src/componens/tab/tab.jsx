import React from 'react';
import './tab.scss';
import { useSelector } from 'react-redux';
import cn from 'classnames';

const Tab = ({ text, number, cb, id, currentTab }) => {
    const viewport = useSelector(state => state.containerQuery.viewport);

    return (
        <button className={`tab tab_${cn(viewport)} ${currentTab === id ? 'tab--active' : ''}`} onClick={() => cb(id)}>
            <span>{text}</span>
            {number && <span className="tab__number">{number}</span>}
        </button>
    );
};

export default Tab;
