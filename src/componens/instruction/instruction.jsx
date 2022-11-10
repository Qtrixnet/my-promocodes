import React from 'react';
import './instruction.scss';
import { useSelector } from 'react-redux';
import cn from 'classnames';

const Instruction = () => {
    const viewport = useSelector(state => state.containerQuery.viewport);
    return (
        <section className={`instruction instruction_${cn(viewport)}`}>
            <div className={`instruction__text-container instruction__text-container_${cn(viewport)}`}>
                <h2 className={`instruction__title instruction__title_${cn(viewport)}`}>Как получить промокод?</h2>
                <figure className={`instruction__image-container instruction__image-container_${cn(viewport)}`}>
                    <img src="https://www.technodom.kz/under/my-coupons/receive-background.png" alt=""
                         className="instruction__image"/>
                </figure>
                <p className={`instruction__subtitle instruction__subtitle_${cn(viewport)}`}>Есть несколько способов его
                    получить:</p>
                <ul className={`instruction__list list instruction__list_${cn(viewport)}`}>
                    <li className="list__item">Подпишитесь на нашу E-mail рассылку</li>
                    <li className="list__item">Получи промокод в разделе "Активные промокоды"</li>
                    <li className="list__item">Участвуй в наших акциях</li>
                </ul>
            </div>
        </section>
    );
};

export default Instruction;
