import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const stepperSlice = createSlice({
    name: 'stepper',
    initialState: {
        step1: false,
        step2: false,
        step3: false
        },
    reducers: {
        Step1ActionCreator(state, action: PayloadAction<boolean>) {
            return {
                ...state,
                step1: action.payload
            }
        },
        Step2ActionCreator(state, action: PayloadAction<boolean>) {
            return {
                ...state,
                step2: action.payload
            }
        },
        Step3ActionCreator(state, action: PayloadAction<boolean>) {
            return {
                ...state,
                step3: action.payload
            }
        },
    }
})

export const {
    Step1ActionCreator,
    Step2ActionCreator,
    Step3ActionCreator,
} = stepperSlice.actions
export default stepperSlice.reducer