import React, { useState } from 'react';
import Note from '../note/note';
import './notes-list.scss';
import { useSelector } from 'react-redux';
import cn from 'classnames';

const NotesList = () => {
    const viewport = useSelector(state => state.containerQuery.viewport);
    const [notes] = useState([
        {
            imgSrc: 'https://www.technodom.kz/under/my-coupons/auth.svg',
            text: 'Только авторизованные покупатели могут получать купоны',
            id: 1,
        },
        {
            imgSrc: 'https://www.technodom.kz/under/my-coupons/mail.svg',
            text: 'Если пришел промокод на e-mail, введи его при оформлении заказа',
            id: 2,
        },
        {
            imgSrc: 'https://www.technodom.kz/under/my-coupons/coupon.svg',
            text: 'Для одного заказа можно использовать и применить только один промокод',
            id: 3,
        },
        {
            imgSrc: 'https://www.technodom.kz/under/my-coupons/time.svg',
            text: 'Промокод имееет ограниченный срок действия - успей потратить их',
            id: 4,
        },
    ])
    return (
        <div className={`notes notes_${cn(viewport)}`}>
            {notes.map(note => <Note key={note.id} text={note.text} imgSrc={note.imgSrc}/>)}
        </div>
    );
};

export default NotesList;
