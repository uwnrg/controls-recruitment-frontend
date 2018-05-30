import React from 'react';
import CodeQuestion from './CodeQuestion';

export default class ControlQuestion extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.getValue = this.getValue.bind(this);
    }

    getValue() {
        return this._r ? this._r.getValue() : "";
    }

    render() {
        return (
            <CodeQuestion
                ref={(r) => { this._r = r; }}
                codePlaceholder={"void control_loop(double target_x, double target_y) {\n    /* move robot */\n}\n"}
                formId="controlQuestion"
            >
                <p>
                    You are writing code to control a robot moving in a plane,
                    starting at <code>(0, 0)</code>. The code is inside a
                    function <code>void control_loop(double target_x, double target_y)</code>
                    which should move the robot to
                    <code>(target_x, target_y)</code>. The function finishes when the
                    robot is at or close enough to the target coordinates.
                </p>
                <div>
                    Three functions are <b>given to you</b> (you can use them without defining them)
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
                    Notice that the robot moves mostly upwards, but moved a little to the left (you need to find a way to deal with the errors).
                </div>
            </CodeQuestion>
        );
    }
}
