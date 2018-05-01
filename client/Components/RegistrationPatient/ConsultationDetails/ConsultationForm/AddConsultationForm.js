import React, { Component } from "react";
import SelectFieldDrop from "./common/SelectField.js";
import TextFieldData from "./common/TextField.js";
import styles from "./ConsultationForm.scss";
import style from "./../../../../styles/site.scss";
const FORMAT_DEFAULT = [
    { name: 'CSV', value: 0 },
    { name: 'XML', value: 1 },
    { name: 'XLS', value: 2 }
];
const MATERNITY_PATIENT = [
    { label: 'Yes', value: 'Yes' },
    { label: 'No', value: 'No' }
];
export default class AddConsultationForm extends Component{
		constructor(props){
		super(props);
		this.state = {
			value: ""
		};
	}

	handle(val){
		console.log("~~~~", val);
		this.setState({
			value: val
		})
	}

	render() {
		return (
			<div className="hptl-phase1-add-consultation-form">
				<div className="container-fluid">
					<div className="row">

						<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 primary-details">
							<div className="row primary-box-container">
								<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
									<label>VISIT ID<mark>*</mark></label><br />
									<TextFieldData hintText="Visit ID" disabled={true}/>
								</div>
								<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
									<label>VISIT TYPE<mark>*</mark></label><br />
									<SelectFieldDrop
										children={FORMAT_DEFAULT}
										onChange={this.handle.bind(this)}
										width="130px"
									/>
								</div>								
							</div>
							<div className="row primary-box-container">
								<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
									<label>DEPARTMENT<mark>*</mark></label><br />
									<SelectFieldDrop
										children={FORMAT_DEFAULT}
										onChange={this.handle.bind(this)}
										width="160px"
									/>
								</div>
								<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
									<label>DOCTOR NAME<mark>*</mark></label><br />
									<SelectFieldDrop
										children={FORMAT_DEFAULT}
										onChange={this.handle.bind(this)}
										width="130px"
									/>
								</div>
								
							</div>
							<div className="row primary-box-container">
								<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
									<label>DATE OF CONSULT<mark>*</mark></label><br />
									<TextFieldData
										id="date"
										label="Birthday"
										type="date"
										defaultValue="2017-05-24"
									/>
								</div>
								<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
									<label>MATERNITY PATIENT<mark>*</mark></label><br />
									<div className="row">
										{MATERNITY_PATIENT.map((data, idx) => {
											return (
												<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4" key={"index_value" + idx}>
												<input type="radio" name="Yes"
													className="htpl-phase1-radio-btn "
													value={data.label}
													defaultChecked={(data.value === "Yes") ? true : false}
				                        		/>
				                        		<label className="radio-design">{data.label}</label>
				                        		</div>
											);
										})}
									</div>
								</div>								
							</div>
						</div>
						<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 secondary-details">
							<table className="table table-bordered table-details">
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