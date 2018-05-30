import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import GeneralInfo from './GeneralInfo'
import BasicQuestions from './BasicQuestions';
import ShapeQuestion from './ShapeQuestion';
import RepairManQuestion from './RepairManQuestion';
import ControlQuestion from './ControlQuestion';
import logo from './uwnrg.png';
import './App.css';

function Section(props) {
    return (
        <div className="col-sm-12">
            <h2>{props.title}
                <Button
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
        <Section title={"Question " + props.number}>
            {props.children}
        </Section>
    );
}

class App extends Component {
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
                        <Section title="General Information">
                            <GeneralInfo />
                        </Section>
                        <Section title="Basic Questions">
                            <BasicQuestions />
                        </Section>
                        <Question number={1}>
                            <ShapeQuestion />
                        </Question>
                        <Question number={2}>
                            <ControlQuestion />
                        </Question>
                        <Question number={3}>
                            <RepairManQuestion />
                        </Question>
                    </div>
                </div>
                <div style={{ height: 200 }} />
            </div>
        );
    }
}

export default App;
