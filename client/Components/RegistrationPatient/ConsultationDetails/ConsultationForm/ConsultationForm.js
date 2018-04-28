import React, { Component } from "react";
import AddConsultationForm from "./AddConsultationForm.js";
import styles from "./ConsultationForm.scss";

export default class ConsultationForm extends Component{
		constructor(props){
		super(props);
		this.state = {

		};
	}

	render() {
		return (
			<div className="hptl-phase1-patient-form">
				<AddConsultationForm />
			</div>
		);
	}
}




