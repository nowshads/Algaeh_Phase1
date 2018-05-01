import React, { Component } from "react";
import SelectFieldDrop from "./common/SelectField.js";
import TextFieldData from "./common/TextField.js";
import styles from "./PatientForm.scss";
import Dropzone from 'react-dropzone';
const FORMAT_DEFAULT = [
    { name: 'CSV', value: "CSV" },
    { name: 'XML', value: "XML" },
    { name: 'XLS', value: "XLS" }
];
export default class AddPatientForm extends Component{
		constructor(props){
		super(props);
		this.state = {
			value: "",
			TITLE:"",
			file: {filePreview: null, filePrimaryPreview: null, fileSecPreview: null},
			filePreview: null
		};
		this.widthImg = "";
	}


	handle(val){
		
		debugger;
		this.setState({
			value: val
		})
		console.log("Pat Title", this.state.value);
	}

	componentWillUpdate(){
		var width = document.getElementById('attach').offsetWidth;
		this.widthImg = width;
	}
	onDrop(file, fileType){
		this.imageDataToFile(file, fileType);
	}
	imageDataToFile(file, fileType){
		this.state.file[file] = fileType[0].preview;
		this.setState({
			file: this.state.file
		})
	}
	render() {
		return (
			<div className="hptl-phase1-add-patient-form">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 primary-details">
							<div className="row primary-box-container">
								<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
									<label>TITLE<mark>*</mark></label><br />
									<SelectFieldDrop
										children={FORMAT_DEFAULT}
										onChange={this.handle.bind(this)}										
										width="100%"										
									/>
								</div>
								<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
									<label>FIRST NAME<mark>*</mark></label><br />
									<TextFieldData
									    hintText="FIRST NAME" 
									    //floatingLabelText="FIRST NAME"
									    //onChange={onChange}
									    // value={attributes.attributeName}
									    // error={error.attributeName}
									    // focus={focus}
									/>
								</div>
								<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
									<label>MIDDLE NAME<mark>*</mark></label><br />
									<TextFieldData
									    hintText="MIDDLE NAME" 
									    //floatingLabelText="MIDDLE NAME"
									    //onChange={onChange}
									    // value={attributes.attributeName}
									    // error={error.attributeName}
									    // focus={focus}
									/>
								</div>
								<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
									<label>LAST NAME<mark>*</mark></label><br />
									<TextFieldData
									    hintText="LAST NAME" 
									    //floatingLabelText="LAST NAME"
									    //onChange={onChange}
									    // value={attributes.attributeName}
									    // error={error.attributeName}
									    // focus={focus}
									/>
								</div>
							</div>
							<div className="row primary-box-container">
								<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
									<label>GENDER<mark>*</mark></label><br />
									<SelectFieldDrop
										children={FORMAT_DEFAULT}
										onChange={this.handle.bind(this)}
										width="180px"
									/>
								</div>
								<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
									<label>DATE OF BIRTH<mark>*</mark></label><br />
									      <TextFieldData
									        id="date"
									        label="Birthday"
									        type="date"
									        defaultValue="2017-05-24"
									      />
								</div>
								<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
									<label>AGE<mark>*</mark></label><br />
									<TextFieldData
									    placeholder="YYYY" 
									    width="50px"
									    //floatingLabelText="LAST NAME"
									    //onChange={onChange}
									    // value={attributes.attributeName}
									    // error={error.attributeName}
									    // focus={focus}
									/>
									<TextFieldData
									    placeholder="MM" 
									    width="50px"
									    //floatingLabelText="LAST NAME"
									    //onChange={onChange}
									    // value={attributes.attributeName}
									    // error={error.attributeName}
									    // focus={focus}
									/>
									<TextFieldData
									    placeholder="DD" 
									    width="50px"
									    //floatingLabelText="LAST NAME"
									    //onChange={onChange}
									    // value={attributes.attributeName}
									    // error={error.attributeName}
									    // focus={focus}
									/>
								</div>
								<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
								<label>MARTIAL STATUS<mark>*</mark></label><br />
								<SelectFieldDrop
									children={FORMAT_DEFAULT}
									onChange={this.handle.bind(this)}
									width="180px"
								/>
								</div>
							</div>
							<div className="row primary-box-container">
								<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
									<label>MOBILE NUMBER<mark>*</mark></label><br />
									<TextFieldData
									    hintText="MOBILE NUMBER" 
									    //floatingLabelText="FIRST NAME"
									    //onChange={onChange}
									    // value={attributes.attributeName}
									    // error={error.attributeName}
									    // focus={focus}
									/>
								</div>
								<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
									<label>EMAIL ADDRESS<mark>*</mark></label><br />
									<TextFieldData
									    hintText="EMAIL ADDRESS" 
									    //floatingLabelText="MIDDLE NAME"
									    //onChange={onChange}
									    // value={attributes.attributeName}
									    // error={error.attributeName}
									    // focus={focus}
									/>
								</div>

								<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
								<label>VISA TYPE<mark>*</mark></label><br />
								<SelectFieldDrop
									children={FORMAT_DEFAULT}
									onChange={this.handle.bind(this)}
									width="180px"
								/>
								</div>

								<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
									<label>NATIONALITY<mark>*</mark></label><br />
									<SelectFieldDrop
										children={FORMAT_DEFAULT}
										onChange={this.handle.bind(this)}
										width="180px"
									/>
								</div>
							</div>
							<div className="row primary-box-container">
								
								<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
									<label>POSTAL CODE<mark>*</mark></label><br />
									<TextFieldData
									    hintText="POSTAL CODE" 
									    //floatingLabelText="MIDDLE NAME"
									    //onChange={onChange}
									    // value={attributes.attributeName}
									    // error={error.attributeName}
									    // focus={focus}
									/>
								</div>

								<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
									<label>EMERG.CONTACT NO<mark>*</mark></label><br />
									<TextFieldData
									    hintText="EMERG.CONTACT NO" 
									    //floatingLabelText="LAST NAME"
									    //onChange={onChange}
									    // value={attributes.attributeName}
									    // error={error.attributeName}
									    // focus={focus}
									/>
								</div>

								<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
									<label>EMERG.CONTACT PERSON<mark>*</mark></label><br />
									<TextFieldData
									    hintText="EMERG.CONTACT PERSON" 
									    //floatingLabelText="LAST NAME"
									    //onChange={onChange}
									    // value={attributes.attributeName}
									    // error={error.attributeName}
									    // focus={focus}
									/>
								</div>
								<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
								<label>RELATION WITH PATIENT<mark>*</mark></label><br />
								<SelectFieldDrop
									children={FORMAT_DEFAULT}
									onChange={this.handle.bind(this)}
									width="180px"
								/>
								</div>
							</div>
						</div>
						<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 secondary-details">
							<div className="row secondary-box-container">
								<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
									<label>PRIMARY ID TYPE<mark>*</mark></label><br />
									<SelectFieldDrop
										children={FORMAT_DEFAULT}
										onChange={this.handle.bind(this)}
										width="180px"
									/>
								</div>
								<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
									<label>PRIMARY ID NO<mark>*</mark></label><br />
									<TextFieldData
										hintText="PRIMARY ID NO" 
										//floatingLabelText="LAST NAME"
										//onChange={onChange}
										// value={attributes.attributeName}
										// error={error.attributeName}
										// focus={focus}
									/>
								</div>
							</div>
							<div className="row secondary-box-container">
								<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
									<label>SEC. ID TYPE<mark>*</mark></label><br />
									<SelectFieldDrop
										children={FORMAT_DEFAULT}
										onChange={this.handle.bind(this)}
										width="180px"
									/>
								</div>
								<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
									<label>SEC. ID NO<mark>*</mark></label><br />
									<TextFieldData
										hintText="PRIMARY ID NO" 
										//floatingLabelText="LAST NAME"
										//onChange={onChange}
										// value={attributes.attributeName}
										// error={error.attributeName}
										// focus={focus}
									/>
								</div>
							</div>
							<div className="row secondary-box-container">
								<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
									<div className="image-drop-area">
										<Dropzone onDrop={this.onDrop.bind(this, "filePreview")} id="attach" className="dropzone" accept="image/*" multiple={false} name="image" >
											<div className="attach-design text-center" id="attach">ATTACH PHOTO</div>
										</Dropzone>
									</div>
									<div>
										<img className="preview-image" src={this.state.file['filePreview']} style={{width: this.widthImg, height: "110px"}} />
									</div>
								</div>
								<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
								<div className="image-drop-area">
									<Dropzone  className="dropzone" onDrop={this.onDrop.bind(this, "filePrimaryPreview")} 
									id="attach-primary-id" accept="image/*" multiple={false} name="image" >
										<div className="attach-design text-center" id="attach-primary-id">ATTACH PRIM. ID</div>
									</Dropzone>
									</div>
									<div>
										<img className="preview-image" src={this.state.file['filePrimaryPreview']} style={{width: this.widthImg, height: "110px"}} />
									</div>
									
								</div>
								<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
								<div className="image-drop-area">
									<Dropzone  className="dropzone" onDrop={this.onDrop.bind(this, "fileSecPreview")} 
									id="attach-sec-id" accept="image/*" multiple={false} name="image" >
										<div className="attach-design text-center" id="attach-sec-id">ATTACH SEC. ID</div>
									</Dropzone>
									</div>
									<div>
										<img className="preview-image" src={this.state.file['fileSecPreview']} style={{width: this.widthImg, height: "110px"}} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}