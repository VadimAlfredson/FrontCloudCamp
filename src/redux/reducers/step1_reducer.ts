import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type GenderType = null | 'male' | 'female'

type step1Type = {
    nickName: string,
    name: string,
    surname: string,
    gender: GenderType
}

const step1Slice = createSlice({
    name: 'step1',
    initialState: {
        nickName: '',
        name: '',
        surname: '',
        gender: null
    } as step1Type,
    reducers: {
        AddNicknameActionCreator(state, action: PayloadAction<string>) {
            debugger
            return {
                ...state,
                nickname: action.payload
            }
        },
        AddNameActionCreator(state, action: PayloadAction<string>) {
            return {
                ...state,
                name: action.payload
            }
        },
        AddSurnameActionCreator(state, action: PayloadAction<string>) {
            return {
                ...state,
                surname: action.payload
            }
        },
        AddGenderActionCreator(state, action: PayloadAction<GenderType>) {
            return {
                ...state,
                gender: action.payload
            }
        },
    }
})

export const {
    AddNicknameActionCreator,
    AddNameActionCreator,
    AddSurnameActionCreator,
    AddGenderActionCreator
} = step1Slice.actions
export default step1Slice.reducer
