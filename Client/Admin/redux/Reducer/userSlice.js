import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentUser : [],
    success: false,
    message: null,
    isLoading: false
}

export const userSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        startUser: (state) => {
            state.currentUser = []
            state.success = false
            state.message = ""
        },
        successUser: (state, action) => {
            state.currentUser = action.payload.user
            state.success = action.payload.success
            state.message = action.payload.message
        },
        errorUser: (state, action) => {
            console.log(action.payload)
            state.currentUser = []
            state.success = action.payload.success
            state.message = action.payload.message
        }
    }
})

export const { startUser, successUser, errorUser} = userSlice.actions

export default userSlice.reducer