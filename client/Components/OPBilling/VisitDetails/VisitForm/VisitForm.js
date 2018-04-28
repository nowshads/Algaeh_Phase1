import React, { Component } from "react";
import VisitDetails from "./VisitDetails.js";
import styles from "./VisitForm.scss";

export default class VisitForm extends Component{
		constructor(props){
		super(props);
		this.state = {

		};
	}

	render() {
		return (
			<div className="hptl-phase1-patient-form">
				<VisitDetails />
			</div>
		);
	}
}




