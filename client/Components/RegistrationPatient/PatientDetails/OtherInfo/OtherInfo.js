import React, { Component } from "react";
import styles from "./OtherInfo.scss";
import SelectFieldDrop from "./common/SelectField.js";
import TextFieldData from "./common/TextField.js";

const FORMAT_DEFAULT = [
    { name: 'CSV', value: "CSV" },
    { name: 'XML', value: "XML" },
    { name: 'XLS', value: "XLS" }
];

export default class OtherInfo extends Component{
		constructor(props){
		super(props);
		this.state = {

		};
	}

	handle(val){
		debugger;
		this.setState({
			value: val
		})
		console.log("Pat Title", value);
	}

	render() {
		return (
			<div className="hptl-phase1-add-patient-form">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
							<label>ADDRESS<mark>*</mark></label><br />
							<TextFieldData/>
						</div>
					</div>
					<div className="row">						
						<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
							<label>STATE<mark>*</mark></label><br />
							<SelectFieldDrop
								children={FORMAT_DEFAULT}
								onChange={this.handle.bind(this)}										
								width="100%"								
								//value={this.state.value}
							/>
						</div>

						<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
							<label>CITY<mark>*</mark></label><br />
							<SelectFieldDrop
								children={FORMAT_DEFAULT}
								onChange={this.handle.bind(this)}										
								width="100%"								
								//value={this.state.value}
							/>
						</div>

						<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
							<label>COUNTRY<mark>*</mark></label><br />
							<SelectFieldDrop
								children={FORMAT_DEFAULT}
								onChange={this.handle.bind(this)}										
								width="100%"								
								//value={this.state.value}
							/>
						</div>
					</div>								
				</div>
			</div>
		);
	}
}