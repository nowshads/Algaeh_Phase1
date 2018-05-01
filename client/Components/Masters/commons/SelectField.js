import React, { Component } from "react";
import dept from "./../../styles/dept.css";
import { Select, MenuItem } from "material-ui";

class SelectField extends Component {
  constructor(args) {
    super(args);
    this.state = {
      values: [],
      deptType: ""
    };
  }

  menuItems(data) {
    return data.map(dataValue => (
      <MenuItem value={dataValue.value} key={dataValue.key}>
        {dataValue.value}
      </MenuItem>
    ));
  }

  handleChange(event) {
    this.props.selected(event.target.value);
    this.setState({ deptType: event.target.value });
  }

  render() {
    return (
      <div>
        <Select
          className="select-fld"
          width="100%"
          value={this.state.deptType}
          inputProps={{
            name: "deptType"
          }}
          onChange={this.handleChange.bind(this)}
        >
          {this.menuItems(this.props.children)}
        </Select>
      </div>
    );
  }
}

export default SelectField;
