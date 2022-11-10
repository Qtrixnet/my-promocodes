import React from 'react';
import './step-card.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';

const StepCard = ({ step }) => {
    const viewport = useSelector(state => state.containerQuery.viewport);

    const { title, text, id } = step;
    return (
        <div className={`card card_${cn(viewport)}`}>
            <div className={`card__container card__container_${cn(viewport)}`}>
                <span className="card__number">{id}</span>
                <figure className="card__image-container">
                    <img src={`https://www.technodom.kz/under/my-coupons/step-${id}.png`} alt=""/>
                </figure>
            </div>
            <div className="card__text-container">
                <h3 className="card__title">{title}</h3>
                <p className="card__text">{text}</p>
            </div>
        </div>
    );
};

export default StepCard;
