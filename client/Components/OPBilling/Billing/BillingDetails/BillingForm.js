import React, { Component } from "react";
import AddBillingForm from "./AddBillingForm.js";
import styles from "./AddBillingForm.scss";

export default class BillingForm extends Component{
		constructor(props){
		super(props);
		this.state = {

		};
	}

	render() {
		return (
			<div className="hptl-phase1-billing-form">
				<AddBillingForm />
			</div>
		);
	}
}