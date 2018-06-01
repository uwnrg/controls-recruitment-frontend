import React from 'react';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import tryParseJSON from './tryParseJSON';

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
        this.onLoad = this.onLoad.bind(this);
        this.resetCode = this.resetCode.bind(this);
        this.getValue = this.getValue.bind(this);
        this.setValue = this.setValue.bind(this);

        this.state = {
            mode: 'c_cpp'
        };

        this.editor = null;
        this.savedValues = {};
    }

    languageChanged(e) {
        this.savedValues[this.state.mode] = this.editor ? this.editor.getValue() : '';
        this.setState({ mode: e.target.value });
    }

    onLoad(instance) {
        this.editor = instance;
    }

    resetCode() {
        if (this.editor) {
            this.savedValues = {};
            this.editor.setValue(this.props.codePlaceholder[this.state.mode] || '', 1);
        }
    }

    getValue() {
        this.savedValues[this.state.mode] = this.editor ? this.editor.getValue() : '';
        const value = Object.assign({}, this.savedValues);
        value.mode = this.state.mode;
        return JSON.stringify(value);
    }

    setValue(content) {
        const value = tryParseJSON(content);
        if (!value) { return localStorage.clear(); }
        const mode = value.mode;
        if (this.language) this.language.value = mode;
        delete value.mode;
        this.savedValues = value;
        this.setState({ mode });
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
                        <FormControl inputRef={(r) => { this.language = r; }}
                            onChange={this.languageChanged}
                            componentClass="select">
                            <option value="c_cpp">C/C++</option>
                            <option value="java">Java</option>
                            <option value="python">Python</option>
                            <option value="golang">Go</option>
                            <option value="csharp">C#</option>
                            <option value="javascript">JavaScript</option>
                            <option value="ruby">Other</option>
                        </FormControl>
                    </FormGroup>
                    <Button
                        bsStyle="danger"
                        bsSize="small"
                        style={{ paddingRight: 20, paddingLeft: 20, marginBottom: 20 }}
                        onClick={this.resetCode}
                    >Reset</Button>
                </div>
                <div className="col-sm-10">
                    <AceEditor
                        width={null}
                        height={(this.props.codeHeight || 750) + "px"}
                        mode={this.state.mode}
                        theme="monokai"
                        name={this.props.formId}
                        onLoad={this.onLoad}
                        onChange={this.onChange}
                        fontSize={14}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        value={
                            this.savedValues[this.state.mode] ||
                            this.props.codePlaceholder[this.state.mode] ||
                            ''
                        }
                        editorProps={{ $blockScrolling: true }}
                        setOptions={{
                            showLineNumbers: true,
                            tabSize: 4
                        }}
                    />
                </div>
            </div>
        )
    }
}
