

import {combineReducers} from "redux";
import {TokenDetails} from "./Login/Loginreducers.js";


export default combineReducers({
	tokensDtl: TokenDetails
});