import { createSlice } from '@reduxjs/toolkit';
import { storeData } from '../../Screens/LoginThroughEmail/LoginThroughEmail';
export const stateChanging = createSlice({
    name: 'app',
    initialState: {
        state: false,
        resposnseData: [],
        userData: {},
    },
    reducers: {
        getLoginStatus: (state, action) => {
            state.state = action.payload;
            // console.log(action.payload,'this is action payload')
            storeData(action.payload)
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





