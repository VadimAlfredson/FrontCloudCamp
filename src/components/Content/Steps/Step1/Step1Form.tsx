import React, {useState} from 'react';
import {Field, Form, Formik} from "formik";
import s from "../steps.module.css";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../redux/store";
import {
    AddGenderActionCreator,
    AddNameActionCreator,
    AddNicknameActionCreator,
    AddSurnameActionCreator
} from "../../../../redux/reducers/step1_reducer";
import * as yup from "yup";

const Step1Form = () => {
    const nickName = useAppSelector(state => state.step1.nickName)
    const name = useAppSelector(state => state.step1.name)
    const surname = useAppSelector(state => state.step1.surname)
    const gender = useAppSelector(state => state.step1.gender)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [validNickName, setValidNickName] = useState(nickName)
    const [validName, setValidName] = useState(name)
    const [validSurname, setValidSurname] = useState(surname)

    const validationSchema = yup.object().shape({
        nickName: yup.string().required('Required').max(30),
        name: yup.string().required('Required').max(50),
        surname: yup.string().required('Required').max(50),
        gender: yup.string().required('Required'),
    })


    function nickNameValidate(nickNameValue: string) {
        setValidNickName(nickNameValue
            .replace(/[^\d\w]/g, '')
            .slice(0, 30))
    }
    let handelValidateChange = (e: React.ChangeEvent<any>) => {
        nickNameValidate(e.target.value)
    }

    function nameValidate(name: string) {
        setValidName(name
            .replace(/[^a-zA-Z]/g, '')
            .slice(0, 50))
    }
    let handelNameValidChange = (e: React.ChangeEvent<any>) => {
        nameValidate(e.target.value)
    }

    function surnameValidate(surname: string) {
        setValidSurname(surname
            .replace(/[^a-zA-Z]/g, '')
            .slice(0, 50))
    }
    let handelSurnameValidChange = (e: React.ChangeEvent<any>) => {
        surnameValidate(e.target.value)
    }



    return <Formik
        initialValues={{
            nickName: nickName,
            name: name,
            surname: surname,
            gender: gender
        }}
        validateOnBlur
        onSubmit={(values) => {
            dispatch(AddNicknameActionCreator(values.nickName))
            dispatch(AddNameActionCreator(values.name))
            dispatch(AddSurnameActionCreator(values.surname))
            dispatch(AddGenderActionCreator(values.gender))
        }}
        validationSchema={validationSchema}
    >
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
          }) => (<Form className={s.stepsForm}>
            <label>Nickname</label>
            <Field
                className={s.inputSteps}
                type={'text'}
                name={'nickName'}
                onChange={(e: React.ChangeEvent) => {
                    handelValidateChange(e);
                    setFieldValue('nickName', validNickName)
                }}
                onBlur={handleBlur}
                value={validNickName}
                placeholder={'Nickname'}
            />
            {touched.nickName && errors.nickName && <p className={s.error}>{errors.nickName}</p>}
            <label>Name</label>
            <Field
                className={s.inputSteps}
                type={'text'}
                name={'name'}
                onChange={(e: React.ChangeEvent) => {
                    handelNameValidChange(e);
                    setFieldValue('name', validName)
                }}
                onBlur={handleBlur}
                value={validName}
                placeholder={'Name'}
            />
            {touched.name && errors.name && <p className={s.error}>{errors.name}</p>}
            <label>Surname</label>
            <Field
                className={s.inputSteps}
                type={'text'}
                name={'surname'}
                onChange={(e: React.ChangeEvent) => {
                    handelSurnameValidChange(e);
                    setFieldValue('surname', validSurname)
                }}
                onBlur={handleBlur}
                value={validSurname}
                placeholder={'Surname'}
            />
            {touched.surname && errors.surname && <p className={s.error}>{errors.surname}</p>}
            <label>Gender</label>
            <Field as={'select'}
                   className={s.selectInput}
                   type={'select'}
                   name={'gender'}
                   onChange={handleChange}
                   onBlur={handleBlur}
                   value={values.gender}
                   placeholder={'Gender'}
            >
                <option className={s.selectDefaultItem} value={''}>Select...</option>
                <option className={s.selectItem} value={'male'}>Male</option>
                <option className={s.selectItem} value={'female'}>Female</option>

            </Field>
            {touched.gender && errors.gender && <p className={s.error}>{errors.gender}</p>}
            <div className={s.buttonsSide}>
                <button type={'submit'} className={s.backButton} onClick={() => navigate('/main')
                }>Назад
                </button>
                <button type={'submit'} onClick={() => navigate('/step2')
                }>Далее
                </button>
            </div>

        </Form>)
        }
    </Formik>
};

export default Step1Form;