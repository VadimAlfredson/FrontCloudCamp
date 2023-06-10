import React from 'react';
import {Field, Form, Formik} from "formik";
import s from "../steps.module.css";
import {useNavigate} from "react-router-dom";

const Step2Form = () => {
    const navigate = useNavigate()
    let arr = ['ada', 'ads']

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
            <label>Advantages</label>
            {arr.map((i, index) => <Field
                key={index}
                className={s.inputSteps}
                type={'text'}
                name={i}
                onChange={handleChange}
                onBlur={handleBlur}
                value={i}
                placeholder={'advantage'}
            />)}
            <div className={s.buttonsSide}>
                <button type={'submit'} className={s.backButton} onClick={() => handleSubmit()}>Назад</button>
                <button type={'submit'} onClick={() => handleSubmit()}>Далее</button>
            </div>

        </Form>)
        }
    </Formik>
};

export default Step2Form;