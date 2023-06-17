import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const step3Slice = createSlice({
    name: 'step3',
    initialState: {
        about: '' as string,
    },
    reducers: {
        AddAboutActionCreator(state, action: PayloadAction<string>) {
            return {
                ...state,
                about: action.payload
            }
        },
    }
})

export const {
    AddAboutActionCreator,
} = step3Slice.actions
export default step3Slice.reducer
