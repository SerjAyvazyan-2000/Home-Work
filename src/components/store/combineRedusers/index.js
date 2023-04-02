import  {combineReducers} from "redux"
import AddUsers from "./reducers/addUsers";
import loginKey from "./reducers/login";
import AddRemoveCash from "./reducers";
import InputValue from "./reducers/input-value";


const rootReducer = combineReducers({
    AddUsers,
    loginKey,
    AddRemoveCash,
    InputValue

})



export default rootReducer