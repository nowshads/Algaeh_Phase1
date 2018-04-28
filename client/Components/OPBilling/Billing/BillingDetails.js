import React, { Component } from "react";
import BillingForm from "./BillingDetails/BillingForm"
import ReciptForm from "./ReciptDetails/ReciptForm"
import styles from "./BillingDetails.scss";
import style from "./../../../styles/site.scss";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class BillingDetails extends Component{
	constructor(props){
		super(props);
		this.state = {
			actionBillingDetails: true,
			actionReciptDetails: true
		};
	}

	openTab(dataValue){
		if(dataValue === "Billing-details"){
			this.setState({
				actionBillingDetails: true,
			    actionReciptDetails: true

		  })
		} else if(dataValue === "Recipts-details"){
			this.setState({
				actionReciptDetails: false,
				actionBillingDetails: false
			})
		}
	}

	render() {
		let BillingDetails = (this.state.actionBillingDetails) ? "active" : "";
		let ReciptDetails = (this.state.actionReciptDetails) ? "" : "active";

		return (
			<MuiThemeProvider>
				<div className="hptl-phase1-billing-details">
				    <div className="container-fluid">
				        <div className="row">
					        <div className="tab-container toggle-section">
	                            <div className="row">
	        		               <div className="col-xs-4 col-sm-3 col-md-3 col-lg-2 tab">
	                                   <button className={"tab-button " + BillingDetails} onClick={this.openTab.bind(this, "Billing-details")}>Billing Details</button>
	                                </div>

									<div className="col-xs-4 col-sm-3 col-md-3 col-lg-2 tab">
										<button className={"tab-button " + ReciptDetails}  onClick={this.openTab.bind(this, "Recipts-details")}>Recipts</button>
									</div>
		    					</div>
		    				</div>
							<div className="billing-section">
								{(this.state.actionBillingDetails)?
				                	<BillingForm />:
				                null}
				                {(this.state.actionReciptDetails)?
				                	null:
				                <ReciptForm />}		    					
							</div>
							
		    			</div>
		    		</div>
		    	</div>
		    </MuiThemeProvider>
		);
	}
}