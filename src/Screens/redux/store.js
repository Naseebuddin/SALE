import { configureStore } from "@reduxjs/toolkit";
import stateChanging from "./reducer/stateChanging";
export const store = configureStore({
    reducer:{
        AppStatus :stateChanging
    }
})
export default store;