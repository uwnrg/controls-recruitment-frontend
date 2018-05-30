import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

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
                <FormGroup controlId="basicQuestions_codingExperience">
                    <ControlLabel>Briefly describe your coding experience (it's okay if you don't have much!)</ControlLabel>
                    <FormControl
                        componentClass="textarea" rows={4}
                        placeholder="In grade 12, I made a video game"
                    />
                </FormGroup>
                <FormGroup controlId="basicQuestions_codingExperience">
                    <ControlLabel>What is your favorite language and why?</ControlLabel>
                    <FormControl
                        componentClass="textarea" rows={3}
                        placeholder="Java because it's easy"
                    />
                </FormGroup>
                <FormGroup controlId="basicQuestions_codingExperience">
                    <ControlLabel>What do you think is the hardest part of coding?</ControlLabel>
                    <FormControl
                        componentClass="textarea" rows={3}
                        placeholder="The typing; it hurts my hands"
                    />
                </FormGroup>
            </form>
        );
    }
}

