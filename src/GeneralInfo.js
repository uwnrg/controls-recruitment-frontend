import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

export default class GeneralInfo extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.getValidationState = this.getValidationState.bind(this);
        this.getJson = this.getJson.bind(this);
        this.setJson = this.setJson.bind(this);

        this.state = {
            value: ''
        };
    }

    getValidationState() {
        return null;
    }

    getJson() {
        const fullName = this.fullName ? this.fullName.value : "";
        const email = this.email ? this.email.value : "";
        const yearAndProgram = this.yearAndProgram ? this.yearAndProgram.value : "";
        return { fullName, email, yearAndProgram };
    }

    setJson(json) {
        if (this.fullName) { this.fullName.value = json.fullName || ""; }
        if (this.email) { this.email.value = json.email || ""; }
        if (this.yearAndProgram) { this.yearAndProgram.value = json.yearAndProgram || ""; }
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
                        inputRef={(r) => { this.fullName = r; }}
                        type="text"
                        placeholder="Enter your full name"
                    />
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup
                    controlId="generalInfo-email"
                    validationState={this.getValidationState()}
                >
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        inputRef={(r) => { this.email = r; }}
                        type="text"
                        placeholder="Enter your email"
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
                        inputRef={(r) => { this.yearAndProgram = r; }}
                        type="text"
                        placeholder="Enter your program"
                    />
                    <HelpBlock>e.g. 1B Software Engineering</HelpBlock>
                    <FormControl.Feedback />
                </FormGroup>
            </form>
        );
    }
}
