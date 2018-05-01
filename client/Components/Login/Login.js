import React, { Component } from "react";
import style from "./Login.scss";
import {
  TextField,
  Button,
  createMuiTheme,
  CircularProgress,
  LinearProgress
} from "material-ui";
import { MuiThemeProvider } from "material-ui/styles";
import { algaehApiCall } from "../../Utils/algaehApiCall.js";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getTokenDetals } from "../../actions/Login/Loginactions.js";

const styles = {
  root: {
    height: "100%"
  },
  textField: {
    margin: 10,
    width: 200,
    textAlign: "center"
  },
  login_btn: {
    margin: 40,
    width: 200,
    backgroundColor: "#3A95AA"
  },
  paper: {
    textAlign: "center"
  }
};

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#3A95AA",
      main: "#3A95AA",
      dark: "#3A95AA",
      contrastText: "#fff"
    }
  }
});

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userErrorText: "",
      pwdErrorText: "",
      userError: false,
      pwdError: false,
      username: "",
      password: "",
      token: ""
    };
  }

  handleLogin(e) {
    e.preventDefault();

    if (this.state.username.length === 0 && this.state.password.length === 0) {
      this.setState({
        userError: true,
        pwdError: true,
        userErrorText: "Please enter a Username",
        pwdErrorText: "Password cannot be empty"
      });
     
    } else if (this.state.username.length === 0) {
      this.setState({
        userError: true,
        userErrorText: "Please enter a Username",
        pwdError: false,
        pwdErrorText: ""
      });
      
    } else if (this.state.password.length === 0) {
      this.setState({
        pwdError: true,
        pwdErrorText: "Password cannot be empty",
        userError: false,
        userErrorText: ""
      });
      
    } else if (this.state.password.length < 6) {
      this.setState({
        pwdError: true,
        pwdErrorText: "Password too short.",
        userError: false,
        userErrorText: ""
      });
     
    } else {
      this.setState({
        userError: false,
        pwdError: false,
        userErrorText: "",
        pwdErrorText: ""
      });

    let x = document.getElementById("myProg");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
    }

      algaehApiCall({
        uri: "v1/apiAuth/authUser",
        data: this.state,
        token: this.state.token,
        onSuccess: response => {
          console.log("Res", response.data.success);
          console.log("Res Data", response.data);

          if (response.data.success == true) {
            console.log("Take me to Home");
            //window.location.hash("/DeptMaster");
          } else {
            console.log("No not now");
          }
        },
        onFailure: error => {
          console.log(error);
        }
      });
    }
  };

  changeUserName(e) {
    this.setState({ username: e.target.value });
  };

  changePwd(e){
    this.setState({ password: e.target.value });
  };

  componentDidMount() {    
    const objdata = { username: "devteam", password: "devteam" };
    this.props.getTokenDetals(objdata);    
   let height= document.getElementById("loginForm").clientHeight;
//document.getElementById("emptyDiv").style.height=height+"px";
  }

  componentWillUnmount() {
    console.log("Login Component will unmount");
    let x = document.getElementById("myProg");
    x.style.display = "none";
  }


  render() {
    console.log("Length--",this.props.tokensDtl.length)
    if ((this.props.tokensDtl === 0) && (this.props.tokensDtl.length === 0)) {
      return (
        <MuiThemeProvider theme={theme}>
          <div className="container">
            <div className="row" style={{ marginTop: "30%" }}>
              <div className="col-lg-1 offset-5">
                <CircularProgress size={100} style={{ color: "white" }} />
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      );
    }

    return (
      <MuiThemeProvider theme={theme}>
        <div className="center login bg">
          <div className="container margintop15">
            <div className="row-eq-height">
              <div id="emptyDiv"
                className="col-lg-5 offset-2"
                style={{ backgroundColor: "#007379CC"}}
              >                
                {/* Add Client's Logo and other details here */}
              </div>

              <div id="loginForm"
                className="col-lg-4"
                style={{
                  backgroundColor: "#EDEDED"
                }}
              >
                <LinearProgress id="myProg" style={{ display: "none" }} />

                <h3 style={{ marginTop: 40 }}>
                  <span style={{ color: "#3A95AA" }}> ALGAEH</span> ERP
                </h3>

                <form onSubmit={this.handleLogin}>
                  <TextField
                    onChange={this.changeUserName.bind(this)}
                    value={this.state.username}
                    style={styles.textField}
                    error={this.state.userError}
                    helperText={this.state.userErrorText}
                    label="User Name"
                  />

                  <br />
                  <TextField
                    onChange={this.changePwd.bind(this)}
                    value={this.state.password}
                    error={this.state.pwdError}
                    helperText={this.state.pwdErrorText}
                    style={styles.textField}
                    label="Password"
                    type="password"
                  />

                  <br />

                 
                    <Button
                      type="submit"
                      style={styles.login_btn}
                      variant="raised"
                      color="primary"
                    >
                      Log In
                    </Button>
                  
                  <br />
                </form>
              </div>
            </div>
          </div>
        </div>      
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    tokensDtl: state.tokensDtl.tokensDtl
  };  
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTokenDetals: getTokenDetals }, dispatch);
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Login)
);
