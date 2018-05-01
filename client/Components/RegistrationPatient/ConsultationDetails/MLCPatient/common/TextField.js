import React, { Component } from "react";
import TextField from 'material-ui/TextField';

const styles = {
    error: {
        color: 'brown',
    }
}

export default class TextFieldData extends Component {
    render() {
        return (
                <TextField
                    style={{width: (this.props.width)? this.props.width : "100%", backgroundColor:"#FBFBFB", fontSize: "25px", marginRight: "5px"}}
                    hintText={this.props.hintText}
                    type={this.props.type}
                    floatingLabelText={this.props.floatingLabelText}
                    errorText="This field is required"
                    errorStyle={styles.error}
                    errorText={this.props.errorText}
                    disabled={this.props.disabled}
                />
        );
    }
}
