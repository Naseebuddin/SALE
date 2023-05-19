import { configureStore,applyMiddleware } from "@reduxjs/toolkit";
import stateChanging from "./reducer/stateChanging";
// import { applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
const middleware = [thunk]

export const store = configureStore({
    reducer: {
        stateChanging: stateChanging
    }
},applyMiddleware(...middleware))
export default store


