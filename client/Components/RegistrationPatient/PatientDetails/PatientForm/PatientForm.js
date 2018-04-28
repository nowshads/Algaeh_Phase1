import React, { Component } from "react";
import AddPatientForm from "./AddPatientForm.js";
import styles from "./PatientForm.scss";

export default class PatientForm extends Component{
		constructor(props){
		super(props);
		this.state = {

		};
	}

	render() {
		return (
			<div className="hptl-phase1-patient-form">
				<AddPatientForm />
			</div>
		);
	}
}