import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type AdvantageType = {
    value: string,
    key: number
}

type CheckboxItemType = {
    name: string
    value: boolean
    key: number
}

type RadioItemType = {
    name: string
    value: boolean
    key: number
}

type step2Type = {
    advantages: Array<AdvantageType>,
    checkboxGroup: Array<CheckboxItemType>,
    radioGroup: Array<RadioItemType>,
}

const step2Slice = createSlice({
    name: 'step2',
    initialState: {
        advantages: [{
            value: '',
            key: 1
        }],
        checkboxGroup: [{name: '1', value: false, key: 1,}, {name: '2', value: false, key: 2,}, {name: '3', value: false, key: 3,}],
        radioGroup: [{name: '1', value: false, key: 1,}, {name: '2', value: false, key: 2,}, {name: '3', value: false, key: 3,}],
    },
    reducers: {
        SetAdvantageValueActionCreator(state, action: PayloadAction<Array<AdvantageType>>) {
            return {
                ...state,
                advantages: [...action.payload]
            }
        },
        AddAdvantageItemActionCreator(state, action: PayloadAction<AdvantageType>) {
            return {
                ...state,
                advantages: [...state.advantages, action.payload]
            }
        },
        DeleteAdvantageItemActionCreator(state, action: PayloadAction<number>) {
            return {
                ...state,
                advantages: state.advantages.length > 1 ? [...state.advantages.filter((i, index) => index !== action.payload)] : [{value: '', key: 1}]
            }
        },
        /*SetCheckboxGroupActionCreator(state, action: PayloadAction<number>){
            let newCheckboxGroup = state.checkboxGroup.map((i, index) => index === action.payload ? state.checkboxGroup[index].value = !state.checkboxGroup[index].value : null)
            return {
                ...state,
                checkboxGroup: [...newCheckboxGroup]
            }
        }*/
    }
})

export const {
    SetAdvantageValueActionCreator,
    AddAdvantageItemActionCreator,
    DeleteAdvantageItemActionCreator,
} = step2Slice.actions
export default step2Slice.reducer
