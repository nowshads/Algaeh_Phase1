import React, { Component } from "react";
import Header from "./../common/Header/Header.js";
import PatientDetails from "./PatientDetails/PatientDetails.js";
import ConsultationDetails from "./ConsultationDetails/ConsultationDetails.js";
import InsuranceDetails from "./InsuranceDetails/InsuranceDetails.js";
import Billing from "./Billing/BillingDetails";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import styles from "./registration.scss";



export default class RegistrationPatient extends Component{
		constructor(props){
		super(props);
		this.state = {

		};
	}

	render() {
		let addcls = '';
		return (
			<div className="">
				<Header />
				<PatientDetails />
				<ConsultationDetails />
				<InsuranceDetails />
				<Billing />
			</div>
		);
	}
}