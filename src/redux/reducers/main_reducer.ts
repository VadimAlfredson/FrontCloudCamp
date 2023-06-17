import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type mainType = {
    name: string,
    surname: string,
    contacts: {
        telegram: string,
        github: string,
        resume: string
    }
    phone: string,
    email: string
}

const mainSlice = createSlice({
    name: 'main',
    initialState: {
        name: 'Вадим',
        surname: 'Аллаяров',
        contacts: {
            telegram: '',
            github: '',
            resume: ''
        },
        phone: '',
        email: ''
    } as mainType,
    reducers: {
        AddPhoneActionCreator(state, action: PayloadAction<string>) {
            debugger
            return {
                ...state,
                phone: action.payload
            }
        },
        AddEmailActionCreator(state, action: PayloadAction<string>) {
            return {
                ...state,
                email: action.payload
            }
        },
    }
})

export const {
    AddPhoneActionCreator,
    AddEmailActionCreator,
} = mainSlice.actions
export default mainSlice.reducer
