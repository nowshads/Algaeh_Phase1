import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PatientDisplayForm from "./PatientDisplayForm/PatientDisplayForm.js";
import OtherInfo from "./OtherInfo/OtherInfo.js";
import style from "./../../../styles/site.scss";
import styles from "./PatientDetails.scss";

export default class PatientDetails extends Component{
		constructor(props){
		super(props);
		this.state = {
			actionPatientDesign: true,
			actionInformationDesign: true
		};
	}

	openTab(dataValue){
		if(dataValue === "patient-details"){
			this.setState({
				actionPatientDesign: true,
				actionInformationDesign: true
			})
		} else if(dataValue === "other-information"){
			this.setState({
				actionInformationDesign: false,
				actionPatientDesign: false
			})
		}
	}

	render() {
		let patientSelect = (this.state.actionPatientDesign) ? "active" : "";
		let informationSelect = (this.state.actionInformationDesign) ? "" : "active";
		return (
			<MuiThemeProvider>
				<div className="hptl-phase1-patient-details">
				<div className="container-fluid">
				<div className="row">
					<div className="tab-container toggle-section">
	                    <div className="row">
	        		       <div className="col-xs-4 col-sm-3 col-md-3 col-lg-2 tab" onClick={this.openTab.bind(this, "patient-details")}>
	                            <button className={"tab-button " + patientSelect}>PATIENT DETAILS</button>
	                        </div>
	                        <div className="col-xs-4 col-sm-3 col-md-3 col-lg-2 tab" onClick={this.openTab.bind(this, "other-information")}>
	                            <button className={"tab-button " + informationSelect}>OTHER INFORMATION</button>
	                        </div>
	                    </div>
	                </div>
	                <div className="patient-section">
		                {(this.state.actionPatientDesign)?
		                <PatientDisplayForm />:
		                null}
		                {(this.state.actionInformationDesign)?
		                null:
		                <OtherInfo />}
	                </div>
	            </div>
				</div>
				</div>
			</MuiThemeProvider>
		);
	}
}