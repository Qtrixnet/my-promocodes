import React from 'react';
import './note.scss';
import { useSelector } from 'react-redux';
import cn from 'classnames';

const Note = ({ imgSrc, text }) => {
    const viewport = useSelector(state => state.containerQuery.viewport);
    return (
        <div className={`note note_${cn(viewport)}`}>
            <figure className="note__image-container">
                <img width={60} height={60} src={imgSrc} alt=""/>
            </figure>
            <p className="note__text">{text}</p>
        </div>
    );
};

export default Note;
