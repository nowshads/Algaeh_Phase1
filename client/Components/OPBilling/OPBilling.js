import React, { Component } from "react";
import Header from "./../common/Header/Header.js";
import PatientDetails from "./PatientDisDetails/PatientDetails.js";
import VisitDetails from "./VisitDetails/VisitDetails.js";
import Billing from "./Billing/BillingDetails";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import styles from "./OPBilling.scss";



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
				<VisitDetails />	
				<Billing />		
			</div>
		);
	}
}