import style from "./../../../styles/site.scss";
import styles from "./VisitDetails.scss";
import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import VisitForm from "./VisitForm/VisitForm.js";

export default class VisitDetails extends Component{
		constructor(props){
		super(props);
		this.state = {

		};
	}

	render() {
		return (
			<MuiThemeProvider>
				<div className="hptl-phase1-consultation-details">
				    <div className="container-fluid">
				        <div className="row">
					        <div className="tab-container toggle-section">
	                            <div className="row">
	        		               <div className="col-xs-4 col-sm-3 col-md-3 col-lg-2 tab">
	                                   <button className={"tab-button active"}>Visit Details</button>
	                                </div>
		    					</div>
		    				</div>	
							<div className="consultation-section">
								<VisitForm />
							</div>			
		    			</div>
		    		</div>
		    	</div>
		    </MuiThemeProvider>
		);
	}
}