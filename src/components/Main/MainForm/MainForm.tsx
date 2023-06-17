import React, {useEffect, useState} from 'react';
import {Field, Formik} from "formik";
import s from './mainForm.module.css'
import {useNavigate} from "react-router-dom";
import * as yup from 'yup'
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {AddEmailActionCreator, AddPhoneActionCreator} from "../../../redux/reducers/main_reducer";

const MainForm = () => {
    const phoneRegExp = /\+7\s\([0-9]{3}\)\s[0-9]{3}\-[0-9]{2}\-[0-9]+/
    const phoneNumberSelector = useAppSelector(state => state.main.phone)
    const email = useAppSelector(state => state.main.email)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [inputValue, setInputValue] = useState(phoneNumberSelector)

    let handleInputPhone = (e: React.ChangeEvent<any>) => {
        setInputValue(phoneForm(e.target.value))
    }

    let handleSubmitNext = (phoneNumber: string, email: string) => {
        dispatch(AddPhoneActionCreator(phoneNumber))
        dispatch(AddEmailActionCreator(email))
        navigate('/step1')
        console.log(phoneNumber, email)
    }


    const validationSchema = yup.object().shape({
        phoneNumber: yup.string().required('Required').matches(phoneRegExp, 'Phone number is not valid'),
        email: yup.string().required('Required').email('Invalid email')
    })




    return <Formik
        initialValues={{
            phoneNumber: phoneNumberSelector,
            email: email,
        }}
        validationSchema={validationSchema}
        validateOnBlur
        onSubmit={(values, formikHelpers) => handleSubmitNext(values.phoneNumber, values.email)}>
        {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isValid,
              dirty,
              handleSubmit,
              setFieldValue
          }) => (<div className={s.mainForm}>
            <label className={s.titleInputMain}>phone number</label>
            <input
                className={(touched.phoneNumber && errors.phoneNumber) ? s.inputMainError : s.inputMain}
                type={'tel'}
                name={'phoneNumber'}
                onChange={(e) => {
                    handleInputPhone(e); setFieldValue('phoneNumber', inputValue)
                }}
                /*onBlur={() => dispatch(AddPhoneActionCreator(inputValue))}*/
                value={inputValue}
                placeholder={'+7 (___) ___-__-__'}
            />
            {touched.phoneNumber && errors.phoneNumber && <p className={s.error}>{errors.phoneNumber}</p>}
            <label className={s.titleInputMain}>email</label>
            <input
                className={(touched.email && errors.email) ? s.inputMainError : s.inputMain}
                type={'text'}
                name={'email'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder={'email'}
            />
            {touched.email && errors.email && <p className={s.error}>{errors.email}</p>}
            <button onClick={() => handleSubmit()} disabled={!isValid && !dirty} type={'submit'}
                    className={!isValid && !dirty ? s.buttonDisabled : s.buttonMain}>Начать
            </button>
        </div>)
        }
    </Formik>
};

export default MainForm;







function phoneForm(value: string){
    if (!value) return value;
if (value === '+7 ('){ return ''}
    let phoneNumber = value.replace(/[^\d]/g, '');
    if (phoneNumber.length > 1){phoneNumber = phoneNumber.slice(1, 13)}
    let phoneNumberLength = phoneNumber.length;
    if (phoneNumber.slice(0, 1) !== '+7'){
        phoneNumber = '+7' + phoneNumber
    }
    if (phoneNumberLength < 4) {
        return `${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2)}`
    }
    if (phoneNumberLength < 7) {
        return `${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2, 5)}) ${phoneNumber.slice(5)}`
    }
    if (phoneNumberLength < 9) {
        return `${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2, 5)}) ${phoneNumber.slice(5, 8)}-${phoneNumber.slice(8)}`
    }
    return `${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2, 5)}) ${phoneNumber.slice(5, 8)}-${phoneNumber.slice(8, 10)}-${phoneNumber.slice(10, 12)}`
}