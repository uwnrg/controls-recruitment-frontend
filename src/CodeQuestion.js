import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import AceEditor from 'react-ace';

import 'brace/mode/c_cpp';
import 'brace/mode/java';
import 'brace/mode/python';
import 'brace/mode/golang';
import 'brace/mode/csharp';

import 'brace/mode/javascript';
import 'brace/mode/ruby';
import 'brace/mode/typescript';

import 'brace/theme/monokai';

export default class CodeQuestion extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.languageChanged = this.languageChanged.bind(this);
        this.contentChange = this.contentChange.bind(this);

        this.state = {
            mode: 'c_cpp'
        };

        this.content = "";
    }

    languageChanged(e) {
        this.setState({ mode: e.target.value });
    }

    contentChange(newValue) {
        this.content = newValue;
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-12" style={{ marginBottom: 15 }}>
                    {this.props.children}
                </div>
                <div className="col-sm-2">
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Language</ControlLabel>
                        <FormControl
                            onChange={this.languageChanged}
                            componentClass="select">
                            <option value="c_cpp">C/C++</option>
                            <option value="java">Java</option>
                            <option value="python">Python</option>
                            <option value="golang">Go</option>
                            <option value="csharp">C#</option>
                            <option value="javascript">JavaScript</option>
                            <option value="typescript">TypeScript</option>
                            <option value="ruby">Ruby</option>
                        </FormControl>
                    </FormGroup>
                </div>
                <div className="col-sm-10">
                    <AceEditor
                        width={null}
                        height={(this.props.codeHeight || 750) + "px"}
                        mode={this.state.mode}
                        theme="monokai"
                        name={this.props.formId}
                        onLoad={this.onLoad}
                        onChange={this.contentChange}
                        fontSize={14}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        value={this.props.codePlaceholder}
                        setOptions={{
                            showLineNumbers: true,
                            tabSize: 4,
                        }}
                    />
                </div>
            </div>
        )
    }
}
