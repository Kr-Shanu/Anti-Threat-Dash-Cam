import {combineReducers} from "redux";
// import { alertCloseBtn } from "../actionCreaters";
import threatReducer from "./threatReducer";

const reducers = combineReducers({
    ifThreat : threatReducer,
})

export default reducers;