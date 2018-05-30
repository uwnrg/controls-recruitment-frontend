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

export default class ControlQuestion extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.languageChanged = this.languageChanged.bind(this);

        this.state = {
            mode: 'c_cpp'
        };
    }

    languageChanged(e) {
        this.setState({ mode: e.target.value });
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <p>
                        You are writing code to control a robot moving in a plane,
                        starting at <code>(0, 0)</code>. The code is inside a
                        function <code>control_loop(double target_x, double target_y)</code>
                        which should move the robot to
                        <code>(target_x, target_y)</code>. The function finishes when the
                        robot is at or close enough to the target coordinates.
                    </p>
                    <p>
                        Three functions are given to you (you can use them without defining them)
                        <br />
                        <pre>
                            <code>
                                double get_robot_x();
                            </code>
                            <br />
                            <code>
                                double get_robot_y();
                            </code>
                            <br />
                            <code>
                                void move_robot(Direction dir);
                            </code>
                        </pre>
                        Where <code>dir</code> is one of
                        <code>UP</code> <code>DOWN</code>, <code>LEFT</code>, <code>RIGHT</code>. The function <code>move_robot</code>
                        moves the robot <b>a little bit</b> (around 1.0 unit) in the specified direction, but may introduce small
                        errors in the perpendicular directions (less than 0.3 units). The function returns when the move is done. For example,
                        <pre>
                            <code>// robot is at (0.0, 0.0)</code>
                            <br />
                            <code>move_robot(UP);</code>
                            <br />
                            <code>// robot is now at (-0.2, 1.1)</code>
                        </pre>
                        Notice that the robot moves mostly upwards, but moved a little to the left.
                        <br />
                    </p>
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
                <div id="controlQuestion_edit_parent" className="col-sm-10">
                    <AceEditor
                        width={null}
                        height="750px"
                        mode={this.state.mode}
                        theme="monokai"
                        name="controlQuestion"
                        onLoad={this.onLoad}
                        onChange={this.onChange}
                        fontSize={14}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        value={`\nvoid control_loop(double target_x, double target_y) { /* control the robot */ }\n`}
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
