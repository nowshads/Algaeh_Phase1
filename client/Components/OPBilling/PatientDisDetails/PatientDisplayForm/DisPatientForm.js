import React, { Component } from "react";
import SelectFieldDrop from "./common/SelectField.js";
import TextFieldData from "./common/TextField.js";
import styles from "./PatientDisplayForm.scss";
import Dropzone from "react-dropzone";
import InsuranceDisDetails from "./../../InsuranceDisDetails/InsuranceDisDetails.js";

const FORMAT_DEFAULT = [
  { name: "CSV", value: 0 },
  { name: "XML", value: 1 },
  { name: "XLS", value: 2 }
];

export default class DisPatientForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      file: {
        filePreview: null,
        filePrimaryPreview: null,
        fileSecPreview: null
      },
      filePreview: null
    };
    this.widthImg = "";
  }

  handle(val) {
    this.setState({
      value: val
    });
  }

  componentWillUpdate() {
    var width = document.getElementById("attach").offsetWidth;
    this.widthImg = width;
  }
  onDrop(file, fileType) {
    this.imageDataToFile(file, fileType);
  }
  imageDataToFile(file, fileType) {
    this.state.file[file] = fileType[0].preview;
    this.setState({
      file: this.state.file
    });
  }
  render() {
    return (
      <div className="hptl-phase1-add-patient-form">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 form-details">
              <div className="row">                
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                  <label>PATIENT ID<mark>*</mark></label><br />
                  <TextFieldData/>                  
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                  <label>NAME</label><br />
                  <TextFieldData disabled={true}/>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                  <label>PATIENT TYPE</label><br />
                  <TextFieldData disabled={true}/>
                </div>

                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                  <label>MODE OF PAYMENT</label><br />
                  <TextFieldData disabled={true}/>
                </div>
              </div>
              <br />
              <div className="container-fluid">
                <div className="row">       
                  <InsuranceDisDetails />
                  <br />
                </div>
              </div>              
            </div>      
          </div>
        </div>
      </div>
    );
  }
}