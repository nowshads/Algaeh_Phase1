import React, { Component } from "react";
import {
  Paper,
  FontIcon,
  RadioGroup,
  Radio,
  TextField,
  MenuItem
} from "material-ui";
import dept from "../styles/dept.scss";
import { MuiThemeProvider, createMuiTheme } from "material-ui";
import {
  FormLabel,
  FormControl,
  FormControlLabel,
  FormHelperText
} from "material-ui/Form";
import { Select } from "material-ui";
import { Button } from "material-ui";
import { InputLabel } from "material-ui";
import SelectField from "./commons/SelectField.js";
import moment from "moment";
import { algaehApiCall } from "../utils/algaehApiCall";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#00BCB0",
      main: "#00BCB0",
      dark: "#00BFC2",
      contrastText: "#fff"
    }
  }
});

const DEPT_TYPE = [
  { name: "Clinical", value: "Clinical", key: "hd" },
  { name: "Non Clinical", value: "Non Clinical", key: "sd" }
];

const HEAD_DEPT = [
  { name: "Cardiology", value: "Cardiology", key: "c" },
  { name: "Finance", value: "Finance", key: "f" },
  { name: "IT", value: "IT", key: "i" }
];

class DeptMaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      department_code: "",
      department_name: "",
      department_desc: "",
      department_type: "",
      hospital_id: "1",
      effective_start_date: moment(String(new Date())).format("YYYY-MM-DD"),
      effective_end_date: "",
      department_status: "",
      created_by: "1",
      headDept: "",
      deptList:[]
    };
  }

  // {
  //   ""department_code"": ""DPT0003"",
  //   ""department_name"": ""ENT"",
  //   ""department_desc"": ""Ear Nose And Throught"",
  //   ""department_type"": ""CLINICAL"",
  //   ""hospital_id"": 1,
  //   ""effective_start_date"": ""1900-01-01"",
  //   ""effective_end_date"": ""9999-12-31"",
  //   ""department_status"": ""A"",
  //   ""created_by"": 1
  // }

  handleDel(e) {
    alert("Are you sure you want to delete this item ?");
  }

  selectedDeptType(deptType) {
    this.setState({ department_type: deptType });
  }

  selectedHeadDept(headDept) {
    this.setState({ headDept: headDept });
  }

  changeDeptCode(e) {
    this.setState({ department_code: e.target.value });
  }

  changeDeptName(e) {
    this.setState({ department_name: e.target.value });
    this.setState({ department_desc: e.target.value });
  }

  changeStatus(e) {
    this.setState({ department_status: e.target.value });

    if (e.target.value == "A")
      this.setState({ effective_end_date: "9999-12-31" });
    else if (e.target.value == "I") {
      this.setState({
        effective_end_date: moment(String(new Date())).format("YYYY-MM-DD")
      });
    }
  }
  addBtnClick(e) {
    e.preventDefault();

    console.log("myState", this.state);
    algaehApiCall({
      uri: "v1/department/add",
      data: this.state,
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MjUwNjk5NjcsImV4cCI6MTUyNzY2MTk2N30.7jVtM39kz3hPVAdX82v1JSQpgREJjQCFnVmDpvPN17g",
      onSuccess: response => {
        console.log("Res Data", response.data);
      },
      onFailure: error => {
        console.log(error);
      }
    });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="dept">
          <Paper className="container-fluid">
            <form>
              <div
                className="row"
                style={{
                  padding: 20,
                  marginTop: 20,
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              >
                <div className="col-lg-3">
                  <label>
                    Status <span className="imp">*</span>
                  </label>
                  <br />
                  <input
                    onChange={this.changeStatus.bind(this)}
                    style={{
                      padding: 8,
                      margin: 8
                    }}
                    type="radio"
                    name="status"
                    value="A"
                  />
                  <label className="center">Active </label>

                  <input
                    onChange={this.changeStatus.bind(this)}
                    style={{
                      padding: 8,
                      margin: 8
                    }}
                    type="radio"
                    name="status"
                    value="I"
                  />
                  <label className="center">Inactive </label>
                </div>

                <div className="col-lg-3">
                  <label>
                    DEPARTMENT CODE <span className="imp">*</span>
                  </label>
                  <br />
                  <TextField
                    onChange={this.changeDeptCode.bind(this)}
                    value={this.state.department_code}
                    className="txt-fld"
                  />
                </div>

                <div className="col-lg-3">
                  <label>
                    DEPARTMENT NAME <span className="imp">*</span>
                  </label>
                  <br />
                  <TextField
                    onChange={this.changeDeptName.bind(this)}
                    value={this.state.department_name}
                    className="txt-fld"
                  />
                </div>

                <div className="col-lg-3">
                  <label>
                    DEPARTMENT TYPE <span className="imp"> *</span>
                  </label>
                  <br />
                  <SelectField
                    selected={this.selectedDeptType.bind(this)}
                    children={DEPT_TYPE}
                  />
                </div>
              </div>

              <div
                className="row"
                style={{
                  marginTop: 20,
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              >
                <div className="col-lg-3">
                  <label>
                    HEAD DEPARTMENT <span className="imp"> *</span>
                  </label>
                  <br />
                  <SelectField
                    selected={this.selectedHeadDept.bind(this)}
                    children={HEAD_DEPT}
                  />
                </div>

                <div className="col-lg-3">
                  <label>
                    HEAD DEPT. CODE <span className="imp">*</span>
                  </label>
                  <br />
                  <TextField className="txt-fld" />
                </div>
                <div className="col-lg-3 align-middle">
                  <br />
                  <Button
                    onClick={this.addBtnClick.bind(this)}
                    variant="raised"
                    color="primary"
                  >
                    ADD TO LIST
                  </Button>
                </div>
              </div>
            </form>

            <div className="row form-details">
              <div className="col-lg-10">
                <label> DEPARTMENT LIST</label>
                <table className="table table-striped table-details table-hover">
                  <thead style={{ background: "#A9E5E0" }}>
                    <tr>
                      <td scope="col">ACTION</td>
                      <td scope="col">#</td>
                      <td scope="col">DEPT. CODE</td>
                      <td scope="col">DEPARTMENT NAME</td>
                      <td scope="col">DEPARTMENT TYPE</td>
                      <td scope="col">DIVISION CODE</td>
                      <td scope="col">ADDED DATE</td>
                      <td scope="col">MODIFIED DATE</td>
                      <td scope="col">STATUS</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span
                          onClick={this.handleDel}
                          className="fas fa-trash-alt"
                          style={{ paddingRight: "24px" }}
                        />
                        <span className="fas fa-pencil-alt" />
                      </td>
                      <td> 1</td>
                      <td> 0001</td>
                      <td> Cardiology</td>
                      <td> Head Department</td>
                      <td> ------ </td>
                      <td> 06-04-2018</td>
                      <td> 06-04-2018</td>
                      <td> ACTIVE</td>
                    </tr>

            
                  </tbody>
                </table>
              </div>
              <div className="col-lg-2">
                <label> SUB DEPT. LIST</label>
                <table className="table table-striped table-details">
                  <thead style={{ background: "#A9E5E0" }}>
                    <tr>
                      <td scope="col">SUB DEPT. NAME</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> CARDIO - 1</td>
                    </tr>

                    <tr>
                      <td> CARDIO - 2</td>
                    </tr>
                    <tr>
                      <td> CARDIO - 3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default DeptMaster;
