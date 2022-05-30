import { createSlice } from "@reduxjs/toolkit";


interface IState {
    platform_result: number,
    auth_result: number,
    anim_result: number,
    screens_result: number,
    extra_result: number,
    result: number,
    days: number
}

const initialState: IState = {
    platform_result: 0,
    auth_result: 0,
    anim_result: 0,
    screens_result: 0,
    extra_result: 0,
    result: 0,
    days: 0

}

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        calcResult: (state) => {
            state.result = state.platform_result + state.auth_result + state.anim_result + state.screens_result + state.extra_result
            state.days = Math.round(state.result / 5000)
        },
        platformCalc: (state, action) => {
            console.log(action.payload)
            state.platform_result = 20000 * action.payload
        },
        authCalc: (state, action) => {
            state.auth_result = 5000 * action.payload 
        },
        animsCalc: (state, action) => {
            state.anim_result = 10000 * action.payload
        },
        screensCalc: (state, action) => {
            state.screens_result = 5000 * action.payload
        },
        extraCalc: (state, action) => {
            state.extra_result = 5000 * action.payload
        }
    }
})

export const { calcResult, platformCalc, authCalc, animsCalc, screensCalc, extraCalc } = calculatorSlice.actions;
export default calculatorSlice.reducer;