import { getLoginStatus, setUserData } from "../reducer/stateChanging";
import store from "../store";
const dispatch = store.dispatch;

const StateSet = (data) => {
    dispatch(getLoginStatus(data));
};
const saveUserDatatToRedux = (_data) => {
    dispatch(setUserData(_data))
}
export default StateSet;