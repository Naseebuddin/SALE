import { createSlice } from '@reduxjs/toolkit';
const stateChanging = createSlice({
    name: 'AppStatus',
    initialState: {
        state: false,
        resposnseData: [],
        userData: {},
    },
    reducers: {
        getLoginStatus: (state, action) => {
            state.status = action.payload;
        },
        getResponse: (state, action) => {
            state.resposnseData.push(action.payload);
        },
        setUserData: (state, action) => {
            console.log(action, "action");
            state.userData = action.payload
        },
    },
});
export const { getLoginStatus, getResponse,setUserData} = stateChanging.actions;
export default stateChanging.reducer;
