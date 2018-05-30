import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

export default class GeneralInfo extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        };
    }

    getValidationState() {
        return null;
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <form>
                <FormGroup
                    controlId="generalInfo-name"
                    validationState={this.getValidationState()}
                >
                    <ControlLabel>Name</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Enter your full name"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup
                    controlId="generalInfo-email"
                    validationState={this.getValidationState()}
                >
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Enter your email"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <HelpBlock>Please use the same email as in the general application</HelpBlock>
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup
                    controlId="generalInfo-program"
                    validationState={this.getValidationState()}
                >
                    <ControlLabel>Year and Program</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Enter your program"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <HelpBlock>e.g. 1B Software Engineering</HelpBlock>
                    <FormControl.Feedback />
                </FormGroup>
            </form>
        );
    }
}
