import React from 'react';
import s from './card.module.css'

const Card = () => {
    return <div className={s.card}>
        <div className={s.avatar}>Avatar</div>
        <div className={s.info}>
            <div>Name</div>
            <div>Contacts</div>
        </div>
    </div>
};

export default Card;