import React from 'react';
import s from './card.module.css'
import {useAppSelector} from "../../../redux/store";

const Card = () => {
    const name = useAppSelector(state => state.main.name)
    const surname = useAppSelector(state => state.main.surname)
    return <div className={s.card}>
        <div className={s.avatar}>Avatar</div>
        <div className={s.info}>
            <div>{name} {surname}</div>
            <div>Contacts</div>
        </div>
    </div>
};

export default Card;