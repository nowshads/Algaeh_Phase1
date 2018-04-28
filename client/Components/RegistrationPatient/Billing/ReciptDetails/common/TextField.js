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
            <div className="htpl1-textField">
                <TextField
                    style={{width: "100%", fontSize: "12px"}}
                    hintText={this.props.hintText}
                    type={this.props.type}
                    floatingLabelText={this.props.floatingLabelText}
                    errorText="This field is required"
                    errorStyle={styles.error}
                    errorText={this.props.errorText}
                />
            </div>
        );
    }
}
