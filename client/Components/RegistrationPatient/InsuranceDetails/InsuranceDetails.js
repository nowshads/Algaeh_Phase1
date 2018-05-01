import React, { Component } from "react";
import InsuranceForm from "./InsuranceForm/InsuranceForm.js";
import SecondaryInsurance from "./SecondaryInsurance/SecondaryInsurance.js";
import InsuranceList from "./InsuranceList/InsuranceList.js";
import styles from "./InsuranceDetails.scss";
import style from "./../../../styles/site.scss";

export default class InsuranceDetails extends Component{
		constructor(props){
		super(props);
		this.state = {
			actionPrimaryDesign: true,
			actionSecondaryDesign: true,
		};
	}

	openTab(dataValue){
		if(dataValue === "primary-insurance"){
			this.setState({
				actionPrimaryDesign: true,
				actionSecondaryDesign: true
			})
		} else if(dataValue === "secondary-insurance"){
			this.setState({
				actionSecondaryDesign: false,
				actionPrimaryDesign: false
			})
		}
	}

	render() {
		let primaryInsurance = (this.state.actionPrimaryDesign) ? "active" : "";
		let secondaryInsurance = (this.state.actionSecondaryDesign) ? "" : "active";
		return (
				<div className="hptl-phase1-insurance-details">
				<div className="container-fluid">
				<div className="row">
					<div className="tab-container toggle-section">
	                    <div className="row">
	        		       <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 tab" onClick={this.openTab.bind(this, "primary-insurance")}>
	                            <button className={"tab-button " + primaryInsurance}>PRIMARY INSURANCE DETAILS</button>
	                        </div>
	                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 tab" onClick={this.openTab.bind(this, "secondary-insurance")}>
	                            <button className={"tab-button " + secondaryInsurance}>SECONDARY INSURANCE DETAILS</button>
	                        </div>
	                    </div>
	                </div>
	                <div className="insurance-section">
		                {(this.state.actionPrimaryDesign)?
		                <InsuranceForm />:
		                null}
		                {(this.state.actionSecondaryDesign)?
		                null:
		                <SecondaryInsurance />}
	                </div>
					<div>
						<InsuranceList />
					</div>
	            </div>
				</div>
				</div>
		);
	}
}