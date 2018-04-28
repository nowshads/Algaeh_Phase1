import React, { Component } from "react";
import SelectFieldDrop from "./common/SelectField.js";
import TextFieldData from "./common/TextField.js";
import Dropzone from 'react-dropzone';
import styles from "./AddBillingForm.scss";
import style from "./../../../../styles/site.scss";

const FORMAT_DEFAULT = [
    { name: 'CSV', value: 0 },
    { name: 'XML', value: 1 },
    { name: 'XLS', value: 2 }
];

export default class AddBillingForm extends Component{
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
		
			<div className="hptl-phase1-add-billing-form">
				<div className="container-fluid">
					<div className="row form-details">
						<div className="col table-responsive">
							<table className="table table-striped table-details">
								<thead style={{background: "#b4e2df"}}>
									<tr>
									<th scope="col">ACTION</th>
										<th scope="col">#</th>
										<th scope="col">SERVICE TYPE</th>
										<th scope="col">BILL NO.</th>
										<th scope="col">DEPARTMENT</th>
										<th scope="col">IN-CHARGE/PROVIDER</th>										
										<th scope="col">BILL DATE</th>
										<th scope="col">CONSULT FEE</th>
										<th scope="col">ADV. FEE</th>
										<th scope="col">DISCOUNT</th>
										<th scope="col">TOTAL AMT.</th>
									</tr>
								</thead>

								<tbody>
									<tr>
										<td>
											<button className="htpl1-phase1-btn-primary">ADD</button>
										</td>
										<td></td>
										<td><SelectFieldDrop children={FORMAT_DEFAULT} width="130px"/></td>
										<td><TextFieldData hintText="BILL NO." /></td>
										<td><SelectFieldDrop children={FORMAT_DEFAULT} width="130px"/></td>
										<td><SelectFieldDrop children={FORMAT_DEFAULT} width="130px"/></td>
										<td><TextFieldData id="date" label="BILL DATE" type="date" defaultValue="2017-05-24"/></td>
										<td><TextFieldData hintText="CONSULT FEE" /></td>
										<td><TextFieldData hintText="ADV. FEE" /></td>
										<td><TextFieldData hintText="DISCOUNT" /></td>
										<td><TextFieldData hintText="TOTAL AMT." disabled={true}/></td>

									</tr>							       
								</tbody>

								<tbody>
									<tr>
										<td>
											<span className="glyphicon glyphicon-trash" style={{paddingRight: "24px"}}></span>	
											<span className="glyphicon glyphicon-pencil"></span>
										</td>
										<td>1</td>
										<td>Otto</td>
										<td>@mdo</td>
										<td>sample</td>
										<td>Otto</td>
										<td>@mdo</td>
										<td>200.00</td>
										<td>0.00</td>
										<td>10.00</td>
										<td>190.00</td>
									</tr>
										<tr>
										<td>
											<span className="glyphicon glyphicon-trash" style={{paddingRight: "24px"}}></span>	
											<span className="glyphicon glyphicon-pencil"></span>
										</td>
										<td>2</td>
										<td>Otto</td>
										<td>@mdo</td>
										<td>sample</td>
										<td>Otto</td>
										<td>@mdo</td>
										<td>500.00</td>
										<td>0.00</td>
										<td>50.00</td>
										<td>450.00</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div className="row header-details">						

						<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
							<label>Discount By</label>							
						</div>	

						<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
							<TextFieldData disabled={true} type="number"/>
						</div>

						<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
							&nbsp;							
						</div>
						
						<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
							<label>Sub Total</label>							
						</div>

						<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 boderlabel">
							<label></label>
						</div>

						<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
							<label>Discount</label>							
						</div>

						<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 boderlabel">
							<label></label>
						</div>

						<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
							<label>Sec. Discount</label>							
						</div>

						<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 boderlabel">
							<label></label>
						</div>

						<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
							<label>Net Total</label>							
						</div>

						<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 boderlabel">
							<label></label>
						</div>
					</div>

					<div className="row form-details">						

						<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
							<label>Co-PayAmount</label>							
						</div>	

						<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 boderlabel">							
							<label></label>
						</div>

						<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
							&nbsp;							
						</div>

						<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
							<label>Total</label>							
						</div>

						<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 boderlabel">							
							<label></label>
						</div>

						<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
							<label>Gross Total</label>							
						</div>

						<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 boderlabel">							
							<label></label>
						</div>
					</div>

					<div className="row form-details">						
						<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
							<label>Deductable</label>							
						</div>						
						<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 boderlabel">							
							<label></label>
						</div>

						<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
							&nbsp;
						</div>

						<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
							<label>Total Tax</label>
						</div>

						<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 boderlabel">							
							<label></label>
						</div>

						<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
							<label>Discount</label>
						</div>

						<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">							
							<TextFieldData type="number" InputAdornment="%"/>						
						</div>

						<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 boderlabel">							
							<label></label>
						</div>
					</div>
					
					<div className="row form-details">						
						<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
							<label>Pat. Resp.</label>
						</div>						
						<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 boderlabel">							
							<label></label>
						</div>	

						<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
							&nbsp;							
						</div>

						<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
							<label>Advance</label>							
						</div>

						<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 boderlabel">							
							<label></label>
						</div>

						<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
							<label>Net Total</label>							
						</div>

						<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 boderlabel">							
							<label></label>
						</div>
					</div>

					<div className="row form-details">						
						<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
							<label>Comp. Resp.</label>
						</div>
						<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 boderlabel">							
							<label></label>
						</div>	
						
						<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
							&nbsp;							
						</div>

						<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
							<label>Credit</label>							
						</div>

						<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">							
							<TextFieldData type="number" />
						</div>
					</div>

					<div className="row form-details">						
						<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
							<label>Sec. Comp. Resp.</label>
						</div>
						<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 boderlabel">							
							<label></label>
						</div>

						<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
							&nbsp;							
						</div>

						<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
							<label>Receivable</label>							
						</div>

						<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 boderlabel">							
							<label></label>
						</div>
					</div>
				</div>
			</div>			
			
		);
	}
}