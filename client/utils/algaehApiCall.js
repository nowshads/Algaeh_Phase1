import axios from "axios";
import extend from "extend";
import { getTokenDetals } from "../actions/Login/Loginactions.js";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

export function algaehApiCall(options) {
  const baseUrl = "http://192.168.0.129:3000/api/";
  var settings = extend(
    {
      uri: null,
      data: null,
      method: "POST",
      token: null,
      onSuccess: null,
      onFailure: null
    },
    options
    
  );
  debugger;
  if (settings.uri != null || settings.uri != "") {
    axios({
      method: settings.method,
      url: baseUrl + settings.uri,
      headers: { "x-access-token": settings.tokensDtl },
      data: settings.data
    })
      .then(response => {
        if (typeof settings.onSuccess == "function")
          settings.onSuccess(response);
      })
      .catch(err => {
        if (typeof settings.onFailure == "function")
          settings.onFailure(err);
      });
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
  connect(mapStateToProps, mapDispatchToProps)(algaehApiCall)
);