import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import main_reducer from "./reducers/main_reducer";
import stepper_reducer from "./reducers/stepper_reducer";
import step1_reducer from "./reducers/step1_reducer";
import step2_reducer from "./reducers/step2_reducer";
import step3_reducer from "./reducers/step2_reducer";


let store = configureStore({
    reducer: {
        main: main_reducer,
        stepper: stepper_reducer,
        step1: step1_reducer,
        step2: step2_reducer,
        step3: step3_reducer

    }
});

// @ts-ignore
window.store = store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store