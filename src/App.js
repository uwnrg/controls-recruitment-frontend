import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo'
import BasicQuestions from './BasicQuestions';
import ControlQuestion from './ControlQuestion';
import logo from './uwnrg.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="top">
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>

        <div className="container" style={{maxWidth: 1000}}>
          <div className="row">
            <div className="col-sm-12">
              <h2>Controls Fall 2018 Application</h2>
              <p>
                Welcome to the 2018 UWNRG Controls application!
                This is the specific application for those interested
                in the controls team. Keep in mind you must still submit
                the general application <a>here</a>.
              </p>
            </div>
            <div className="col-sm-12">
              <h2>General Information</h2>
              <GeneralInfo/>
            </div>
            <div className="col-sm-12">
              <h2>Basic Questions</h2>
              <BasicQuestions/>
            </div>
            <div className="col-sm-12">
              <h2>Question 1</h2>
              <ControlQuestion/>
            </div>
          </div>
        </div>
        <div style={{height: 200}}/>
      </div>
    );
  }
}

export default App;
