import React, { useState } from 'react';
import StepCard from '../step-card/step-card';
import './steps-list.scss';
import { useSelector } from 'react-redux';
import cn from 'classnames';

const StepsList = () => {
    const viewport = useSelector(state => state.containerQuery.viewport);
    const [steps] = useState([
        {
            id: 1,
            title: 'Выбери нужный товар',
            text: 'на который действует промокод и забери его',
        },
        {
            id: 2,
            title: 'Скопируй промокод',
            text: 'из карточки товара после того, как забрал его',
        },
        {
            id: 3,
            title: 'Вставь код в поле',
            text: '«Промокод или купон» при оформлении заказа',
        }
    ])
    return (
        <div className={`steps steps_${cn(viewport)}`}>
            {steps.map(step => <StepCard key={step.id} step={step}/>)}
        </div>
    );
};

export default StepsList;
