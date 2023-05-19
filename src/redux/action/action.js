import { storeData } from "../../Screens/LoginThroughEmail/LoginThroughEmail";
import { getLoginStatus, setUserData } from "../reducer/stateChanging";
import {store} from "../store";
const {dispatch} = store
export const StateSet = (data) => {
    dispatch(getLoginStatus(data));
    // console.log(data, 'data in the actions')
}
const saveUserDatatToRedux = (_data) => {
    dispatch(setUserData(_data))
}

