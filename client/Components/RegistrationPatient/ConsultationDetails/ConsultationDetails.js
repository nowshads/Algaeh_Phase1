import style from "./../../../styles/site.scss";
import styles from "./ConsultationDetails.scss";
import React, { Component } from "react";
import Paper from 'material-ui/Paper';
import ConsultationForm from "./ConsultationForm/ConsultationForm.js";
import MLCPatient from "./MLCPatient/MLCPatient.js";
export default class ConsultationDetails extends Component{
		constructor(props){
		super(props);
		this.state = {
			actionConsultationDetails: true,
			actionMlcDesign: true
		};
	}

	openTab(dataValue){
		if(dataValue === "Consultation-details"){
			this.setState({
				actionConsultationDetails: true,
			    actionMlcDesign: true

		  })
		} else if(dataValue === "Mlc-details"){
			this.setState({
				actionMlcDesign: false,
				actionConsultationDetails: false
			})
		}
}
	render() {

		let ConsultationDetails = (this.state.actionConsultationDetails) ? "active" : "";
		let MlcDesign = (this.state.actionMlcDesign) ? "" : "active";

		return (
			
				<div className="hptl-phase1-consultation-details">
				    <div className="container-fluid">
				        <div className="row">
					        <div className="tab-container toggle-section">
	                            <div className="row">
	        		               <div className="col col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 tab">
	                                   <button className={"tab-button " + ConsultationDetails} onClick={this.openTab.bind(this, "Consultation-details")}>Consultation Details</button>
	                                </div>

	                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 tab">
	                                   <button className={"tab-button " + MlcDesign}  onClick={this.openTab.bind(this, "Mlc-details")}>MLC Patient</button>
	                                </div>
		    					</div>
		    				</div>
		    				<div className="consultation-section">
				                {(this.state.actionConsultationDetails)?
				                <ConsultationForm />:
				                null}
				                {(this.state.actionMlcDesign)?
				                null:
				                 <MLCPatient />}
			                </div>
		    			</div>
		    		</div>
		    	</div>
		);
	}
}