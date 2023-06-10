import React from 'react';
import {Formik} from "formik";
import s from './mainForm.module.css'
import {useNavigate} from "react-router-dom";

const MainForm = () => {
    const navigate = useNavigate()
    let testClick = () => {
        navigate('/step1')
        return console.log('test')
    }
    return <Formik
        initialValues={{
            phoneNumber: 231313,
            email: 'email@mail.com'
        }}
        validateOnBlur
        onSubmit={testClick}>
        {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isValid,
              dirty,
            handleSubmit
          }) => (<div className={s.mainForm}>
            <a className={s.titleInputMain}>phone number</a>
            <input
                className={s.inputMain}
                type={'text'}
                name={'phoneNumber'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phoneNumber}
                placeholder={'+7(000)0000000'}
            />
            <a className={s.titleInputMain}>email</a>
            <input
                className={s.inputMain}
                type={'text'}
                name={'email'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder={'email'}
            />
            <button onClick={() => handleSubmit()}>Начать</button>
        </div>)
        }
    </Formik>
};

export default MainForm;