import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class GeneralInfo extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.getValidationState = this.getValidationState.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getJson = this.getJson.bind(this);
        this.setJson = this.setJson.bind(this);

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

    getJson() {
        const codingExperience = this.codingExperience ? this.codingExperience.value : "";
        const favoriteLanguage = this.favoriteLanguage ? this.favoriteLanguage.value : "";
        const hardestPartCoding = this.hardestPartCoding ? this.hardestPartCoding.value : "";
        return { codingExperience, favoriteLanguage, hardestPartCoding };
    }

    setJson(json) {
        if (this.codingExperience) { this.codingExperience.value = json.codingExperience || ""; }
        if (this.favoriteLanguage) { this.favoriteLanguage.value = json.favoriteLanguage || ""; }
        if (this.hardestPartCoding) { this.hardestPartCoding.value = json.hardestPartCoding || ""; }
    }

    render() {
        return (
            <form>
                <FormGroup controlId="basicQuestions_codingExperience">
                    <ControlLabel>Briefly describe your coding experience (it's okay if you don't have much!)</ControlLabel>
                    <FormControl
                        inputRef={(r) => { this.codingExperience = r; }}
                        componentClass="textarea"
                        rows={4}
                        placeholder="In grade 12, I made a video game"
                    />
                </FormGroup>
                <FormGroup controlId="basicQuestions_favoriteLanguage">
                    <ControlLabel>What is your favorite language and why?</ControlLabel>
                    <FormControl
                        inputRef={(r) => { this.favoriteLanguage = r; }}
                        componentClass="textarea"
                        rows={3}
                        placeholder="Java because it's easy"
                    />
                </FormGroup>
                <FormGroup controlId="basicQuestions_hardestPartCoding">
                    <ControlLabel>What do you think is the hardest part of coding?</ControlLabel>
                    <FormControl
                        inputRef={(r) => { this.hardestPartCoding = r; }}
                        componentClass="textarea"
                        rows={3}
                        placeholder="The typing; it hurts my hands"
                    />
                </FormGroup>
            </form>
        );
    }
}

