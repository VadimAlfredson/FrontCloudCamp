import React, {useState} from 'react';
import s from './Main.module.css'
import Card from "./Card/Card";
import MainForm from "./MainForm/MainForm";

const Main = () => {
    return <div className={s.main}>
        <Card />
        <div className={s.border} />
        <MainForm />
    </div>
};

export default Main;