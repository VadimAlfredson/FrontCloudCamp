import React from 'react';
import s from '../steps.module.css'
import Stepper from "../Stepper";
import {Route} from "react-router-dom";
import Step1Form from "./Step2Form";

const Step2 = () => {
    return <div className={s.stepBody}>
        <Stepper/>
        <Step1Form/>
    </div>
};

export default Step2;