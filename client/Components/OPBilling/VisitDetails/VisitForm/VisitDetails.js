import React, { Component } from "react";
import SelectFieldDrop from "./common/SelectField.js";
import TextFieldData from "./common/TextField.js";
import styles from "./VisitForm.scss";
import style from "./../../../../styles/site.scss";

export default class VisitDetails extends Component{
		constructor(props){
		super(props);
		this.state = {
			
		};
	}

	render() {
		return (
			<div className="hptl-phase1-add-visit-form">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
							<table className="table table-striped table-details" style={{fontSize: "12px"}}>
							  <thead style={{background: "#b4e2df"}}>
							    <tr>
							      <th scope="col">#</th>
							      <th scope="col">VISIT CODE</th>
							      <th scope="col">VISIT DATE</th>
							      <th scope="col">VISIT TYPE</th>
							      <th scope="col">BILL NO.</th>
							      <th scope="col">DEPT. NAME</th>
							      <th scope="col">DEPT. CODE</th>
							      <th scope="col">IN-CHARGE NAME</th>
							    </tr>
							  </thead>
							  <tbody>
							    <tr>
							      <td>1</td>
							      <td>Otto</td>
							      <td>@mdo</td>
							      <td>sample</td>
							      <td>Otto</td>
							      <td>@mdo</td>
							      <td>sample</td>
							      <td>sample</td>
							    </tr>
							       <tr>
							      <td>2</td>
							      <td>Otto</td>
							      <td>@mdo</td>
							      <td>sample</td>
							      <td>Otto</td>
							      <td>@mdo</td>
							      <td>sample</td>
							      <td>sample</td>
							    </tr>
							  </tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}