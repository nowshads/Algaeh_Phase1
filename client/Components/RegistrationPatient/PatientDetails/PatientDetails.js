import React, { Component } from "react";
import PatientForm from "./PatientForm/PatientForm.js";
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
			<div className="hptl-phase1-patient-details">
				<div className="container-fluid">
					<div className="row">
						<div className="tab-container toggle-section">
							<div className="row">							
								<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 tab" onClick={this.openTab.bind(this, "patient-details")}>
									<button className={"tab-button " + patientSelect}>PATIENT DETAILS</button>
								</div>
								<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 tab" onClick={this.openTab.bind(this, "other-information")}>
									<button className={"tab-button " + informationSelect}>OTHER INFORMATION</button>
								</div>
							</div>
						</div>
						<div className="patient-section">
							{(this.state.actionPatientDesign)?
							<PatientForm />:
							null}
							{(this.state.actionInformationDesign)?
							null:
							<OtherInfo />}
						</div>
					</div>
				</div>
			</div>
		);
	}
}