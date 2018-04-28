import React, { Component } from "react";
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

export default class SelectFieldDrop extends Component {

    constructor(args) {
        super(args);
        this.state = {
            values: [],
            age: '',
            name: 'hai',
        };
    }


  //   selection(values, data) {
  //   	console.log("adhi", values, data.props.primaryText);
  //   	return data.props.primaryText;
  // }

  	// handleChange(event, index, values){
  	// 	console.log("hello", values);
  	// 	this.setState({values: values});
  	// } 

    handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
    }


	  menuItems(data) {
	    return data.map((dataValue) => (
	      <MenuItem
	        value={dataValue.value}
	      >
        {dataValue.value}
        </MenuItem>
	    ));
	  }

    render() {
        const { classes } = this.props;
        return (
            <div className="htpl1-select-dropdown">
                    {/* <FormControl className={styles.formControl}> */}
                    <Select 
                        style={{width: "100%", backgroundColor:"#FBFBFB"}}
                        value={this.state.age}
                        //value={this.props.value}
                        inputProps={{
                          name: 'age',
                          id: 'age-simple',
                        }}
                        onChange={this.handleChange.bind(this)}
                        >
                        {this.menuItems(this.props.children)}   
                    </Select>
                    {/* </FormControl> */}
         
            </div>
        );
    }
}
