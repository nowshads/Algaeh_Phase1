import React, { Component } from "react";
import SelectFieldDrop from "./common/SelectField.js";
import TextFieldData from "./common/TextField.js";
import Dropzone from 'react-dropzone';
import styles from "./SecondaryInsuranceDetails.scss";
import style from "./../../../../styles/site.scss";

export default class AddInsuranceForm extends Component{
		constructor(props){
		super(props);
		this.state = {
			filePreview: ""
		};
	}

	handle(val){

	}

	onDrop(file){
		console.log("!!!!!", file);
		this.setState({
			filePreview: file[0].name
		})
	}

	render() {
		return (
			<div className="htpl-phase1-primary-secinsurancedis-form">
				<div className="container-fluid">
					<div className="row form-details">						
						<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
							<label>INSURANCE COMPANY</label><br />
							<TextFieldData disabled={true}/>
						</div>
						<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
							<label>PLAN DESCRIPTION</label><br />
							<TextFieldData disabled={true}/>
						</div>
						<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
							<label>POLICY GROUP</label><br />
							<TextFieldData disabled={true}/>
						</div>

						<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
							<label>POLICY NO</label><br />
							<TextFieldData disabled={true}/>
						</div>

						<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
							<div className="ins-Dis-image-drop-area">
								<Dropzone className="dropzone">
									<div className="text-center">FRONT SIDE</div>
								</Dropzone>
							</div>                  
						</div>

						<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
							<div className="ins-Dis-image-drop-area">
								<Dropzone className="dropzone">
									<div className="text-center">BACK SIDE</div>
								</Dropzone>
							</div>                  
						</div>
					</div>									
				</div>
			</div>
		);
	}
}