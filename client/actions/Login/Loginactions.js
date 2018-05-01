//PatientDetals

"use strict";
import axios from "axios";

export function getTokenDetals(dataValue) {
	return function(dispatch) {
		axios.post('http://192.168.0.129:3000/api/v1/apiAuth', dataValue)
		.then((response) => {
			dispatch({
				type: "GET_DATA", payload: response.data.token
			})
		})
		.catch((err) => {
			dispatch({
				type: "GET_ERR_DATA", payload: err
			})
		})
	}
}
