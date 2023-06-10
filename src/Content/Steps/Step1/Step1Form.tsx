import React from 'react';
import {Field, Form, Formik} from "formik";
import s from "../steps.module.css";
import {useNavigate} from "react-router-dom";

const Step1Form = () => {
    const navigate = useNavigate()
    return <Formik
        initialValues={{
            nickName: '',
            name: '',
            surname: '',
            gender: ''
        }}
        validateOnBlur
        onSubmit={() => navigate('/step2')}>
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
            <label>Nickname</label>
            <Field
                className={s.inputSteps}
                type={'text'}
                name={'nickname'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nickName}
                placeholder={'Nickname'}
            />
            <label>Name</label>
            <Field
                className={s.inputSteps}
                type={'text'}
                name={'name'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder={'Name'}
            />
            <label>Surname</label>
            <Field
                className={s.inputSteps}
                type={'text'}
                name={'surname'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.surname}
                placeholder={'Surname'}
            />
            <label>Gender</label>
            <Field as={'select'}
                   className={s.selectInput}
                   type={'text'}
                   name={'gender'}
                   onChange={handleChange}
                   onBlur={handleBlur}
                   value={values.gender}
                   placeholder={'Gender'}
            >
                <option className={s.selectItem} value={'male'}>Male</option>
                <option className={s.selectItem} value={'Female'}>Female</option>

            </Field>
            <div className={s.buttonsSide}>
                <button type={'submit'} className={s.backButton} onClick={() => handleSubmit()}>Назад</button>
                <button type={'submit'} onClick={() => handleSubmit()}>Далее</button>
            </div>

        </Form>)
        }
    </Formik>
};

export default Step1Form;