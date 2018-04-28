import React, { Component } from "react";
import DisInsuranceDetails from "./DisInsuranceDetails.js";
import styles from "./SecondaryInsuranceDetails.scss";

export default class InsuranceForm extends Component{
		constructor(props){
		super(props);
		this.state = {

		};
	}

	render() {
		return (
			<div className="hptl-phase1-secinsurancedis-form">
				<DisInsuranceDetails />
			</div>
		);
	}
}