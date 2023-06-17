import React from 'react';
import {Field, FieldArray, Form, Formik} from "formik";
import s from "../steps.module.css";
import {useNavigate} from "react-router-dom";

const Step3Form = () => {
    const navigate = useNavigate()
    let arr = ['ada', 'ads']
    let arrCheckbox = [1, 2, 3]
    let arrRadio = [{value: '1', key: 1},{value: '2', key: 2}, {value: '3', key: 3}]

    return <Formik
        initialValues={{
            nickName: '',
            name: '',
            surname: '',
            gender: ''
        }}
        validateOnBlur
        onSubmit={() => console.log('afa')}>
        {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isValid,
              dirty,
              handleSubmit
          }) => (<Form className={s.stepsForm}>
            <label>About</label>
            <Field as="textarea" id="topic" name="topic"></Field>
            <div className={s.buttonsSide}>
                <button type={'submit'} className={s.backButton} onClick={() => handleSubmit()}>Назад</button>
                <button type={'submit'} onClick={() => navigate('/step3')}>Далее</button>
            </div>
        </Form>)
        }
    </Formik>
};

export default Step3Form;