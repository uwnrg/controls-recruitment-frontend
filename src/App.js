import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import GeneralInfo from './GeneralInfo'
import BasicQuestions from './BasicQuestions';
import ShapeQuestion from './ShapeQuestion';
import RepairManQuestion from './RepairManQuestion';
import ControlQuestion from './ControlQuestion';
import logo from './uwnrg.png';
import './App.css';
import 'react-toastify/dist/ReactToastify.min.css';

function Section(props) {
    return (
        <div className="col-sm-12">
            <h2>{props.title}
                <Button
                    onClick={props.onSaveClick}
                    className="pull-right"
                    bsStyle="primary"
                    bsSize="small"
                    style={{ paddingRight: 20, paddingLeft: 20 }}
                >Save</Button>
            </h2>
            {props.children}
        </div>
    );
}

function Question(props) {
    return (
        <Section
            title={"Question " + props.number}
            onSaveClick={props.onSaveClick}
        >
            {props.children}
        </Section>
    );
}

class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.submit = this.submit.bind(this);
        this.saveForm = this.saveForm.bind(this);
        this.clearCache = this.clearCache.bind(this);
        this.loadSavedData = this.loadSavedData.bind(this);
    }

    submit() {
        const generalInfo = this.generalInfo ? this.generalInfo.getJson() : { fullName: "", email: "", yearAndProgram: "" };
        const basicQuestions = this.basicQuestions ? this.basicQuestions.getJson() : { codingExperience: "", favoriteLanguage: "", hardestPartCoding: "" };
        const shapeQuestion = this.shapeQuestion ? JSON.parse(this.shapeQuestion.getValue()) : {};
        const controlQuestion = this.controlQuestion ? JSON.parse(this.controlQuestion.getValue()) : {};
        const repairManQuestion = this.repairManQuestion ? JSON.parse(this.repairManQuestion.getValue()) : {};
        const data = {
            fullName: generalInfo.fullName,
            email: generalInfo.email,
            yearAndProgram: generalInfo.yearAndProgram,
            favoriteLanguage: basicQuestions.favoriteLanguage,
            hardestPartCoding: basicQuestions.hardestPartCoding,
            codingExperience: basicQuestions.codingExperience,
            shapeQuestion: {
                language: shapeQuestion.mode,
                response: shapeQuestion[shapeQuestion.mode],
            },
            controlQuestion: {
                language: controlQuestion.mode,
                response: controlQuestion[controlQuestion.mode],
            },
            repairManQuestion: {
                language: repairManQuestion.mode,
                response: repairManQuestion[repairManQuestion.mode],
            },
        };
    }

    saveForm() {
        localStorage.clear();
        const generalInfo = this.generalInfo ? this.generalInfo.getJson() : { fullName: "", email: "", yearAndProgram: "" };
        const basicQuestions = this.basicQuestions ? this.basicQuestions.getJson() : { codingExperience: "", favoriteLanguage: "", hardestPartCoding: "" };
        const shapeQuestion = this.shapeQuestion ? this.shapeQuestion.getValue() : "";
        const controlQuestion = this.controlQuestion ? this.controlQuestion.getValue() : "";
        const repairManQuestion = this.repairManQuestion ? this.repairManQuestion.getValue() : "";
        for (const obj of [generalInfo, basicQuestions, { shapeQuestion, controlQuestion, repairManQuestion }]) {
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    localStorage.setItem(key, obj[key]);
                }
            }
        }
        localStorage.setItem("savedData", true);
        toast.success('Application Saved!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false
        });
    }

    clearCache() {
        localStorage.clear();
        this.generalInfo.setJson({ fullName: "", email: "", yearAndProgram: "" });
        this.basicQuestions.setJson({ shapeQuestion: "", controlQuestion: "", repairManQuestion: "" });
        for (const question of [this.shapeQuestion, this.controlQuestion, this.repairManQuestion]) {
            if (question) { question.reset(); }
        }
        toast.warn('Cache Cleared!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
        });
    }

    componentDidMount() {
        const hasSavedData = localStorage.getItem("savedData");
        if (hasSavedData) {
            this.loadSavedData();
        }
    }

    loadSavedData() {
        const generalInfo = {};
        const basicQuestions = {};
        const keyMap = [["fullName", "email", "yearAndProgram"], ["codingExperience", "favoriteLanguage", "hardestPartCoding"]];
        for (const index in keyMap) {
            for (const key of keyMap[index]) {
                [generalInfo, basicQuestions][index][key] = localStorage.getItem(key);
            }
        }
        if (this.generalInfo) { this.generalInfo.setJson(generalInfo); }
        if (this.basicQuestions) { this.basicQuestions.setJson(basicQuestions); }
        const questionNames = ["shapeQuestion", "controlQuestion", "repairManQuestion"];
        const questionMap = [this.shapeQuestion, this.controlQuestion, this.repairManQuestion];
        for (const index in questionNames) {
            if (questionMap[index]) { questionMap[index].setValue(localStorage.getItem(questionNames[index])); }
        }
    }

    render() {
        return (
            <div className="top">
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                    </header>
                </div>

                <div className="container" style={{ maxWidth: 1000 }}>
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Controls Fall 2018 Application</h2>
                            <p>
                                Welcome to the 2018 UWNRG Controls application!
                                This is the specific application for those interested
                                in the controls team. Keep in mind you must still submit
                                the general application <a>here</a>.
                            </p>
                            <p>
                                You can submit multiple applications, and we will use
                                your most recent submission. You can also save your
                                application (in browser storage).
                            </p>
                        </div>
                        <Section title="General Information" onSaveClick={this.saveForm}>
                            <GeneralInfo ref={(r) => { this.generalInfo = r; }} />
                        </Section>
                        <Section title="Basic Questions" onSaveClick={this.saveForm}>
                            <BasicQuestions ref={(r) => { this.basicQuestions = r; }} />
                        </Section>
                        <Question number={1} onSaveClick={this.saveForm}>
                            <ShapeQuestion ref={(r) => { this.shapeQuestion = r; }} />
                        </Question>
                        <Question number={2} onSaveClick={this.saveForm}>
                            <ControlQuestion ref={(r) => { this.controlQuestion = r; }} />
                        </Question>
                        <Question number={3} onSaveClick={this.saveForm}>
                            <RepairManQuestion ref={(r) => { this.repairManQuestion = r; }} />
                        </Question>
                        <div className="col-sm-12">
                            <h3>Submit Application</h3>
                            <p>
                                Finished? You can submit or save to continue later. <b>Make sure your email is correct</b> because
                                that's how we will reach out to you. Clicking "Clear Cache" will erase any saved data.
                            </p>
                            <br />
                            <Button bsStyle="success" onClick={this.submit} style={{ marginRight: 20 }}>Submit</Button>
                            <Button bsStyle="primary" onClick={this.saveForm}>Save</Button>
                            <Button className="pull-right" bsStyle="danger" onClick={this.clearCache}>Clear Cache</Button>
                        </div>
                    </div>
                </div>
                <div style={{ height: 200 }} />
                <ToastContainer />
            </div>
        );
    }
}

export default App;
