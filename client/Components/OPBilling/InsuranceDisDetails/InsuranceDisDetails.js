import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PrimaryInsurance from "./PrimaryInsurance/PrimaryInsuranceDetails.js";
import SecondaryInsurance from "./SecondaryInsurance/SecondaryInsuranceDetails.js";
import styles from "./InsuranceDisDetails.scss";
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
			<MuiThemeProvider>
				<div className="hptl-phase1-insuranceDis-details">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="ins-tab-container toggle-section">
                                <div className="row">
                                    <div className="col-xs-4 col-sm-3 col-md-3 col-lg-3 col-xl-3 tab" onClick={this.openTab.bind(this, "primary-insurance")}>
                                        <button className={"tab-button " + primaryInsurance}>PRIMARY INSURANCE</button>
                                    </div>
                                    <div className="col-xs-4 col-sm-3 col-md-3 col-lg-3 col-xl-3 tab" onClick={this.openTab.bind(this, "secondary-insurance")}>
                                        <button className={"tab-button " + secondaryInsurance}>SECONDARY INSURANCE</button>
                                    </div>
                                </div>
                            </div>
                            <div className="insurancedis-section">
                                {(this.state.actionPrimaryDesign)?
                                <PrimaryInsurance />:
                                null}
                                {(this.state.actionSecondaryDesign)?
                                null:
                                <SecondaryInsurance />}
                            </div>
                        </div>
                    </div>
				</div>
			</MuiThemeProvider>
		);
	}
}