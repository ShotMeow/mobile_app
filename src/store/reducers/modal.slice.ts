import { createSlice } from "@reduxjs/toolkit";


interface IState {
    isActive: boolean,
    title?: string | null
}

const initialState: IState = {
    isActive: false,
    title: null
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        changeView: (state, action) => {
            state.isActive = !state.isActive
            state.title = action.payload
        }
    }
})

export const { changeView } = modalSlice.actions;
export default modalSlice.reducer;