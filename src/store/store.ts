import { configureStore } from "@reduxjs/toolkit";
import calculatorSlice from "./reducers/calculator.slice";
import modalSlice from "./reducers/modal.slice";

export const store = configureStore({
    reducer: {
        calculator: calculatorSlice,
        modal: modalSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch