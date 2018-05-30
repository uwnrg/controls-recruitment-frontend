import React from 'react';
import CodeQuestion from './CodeQuestion';
import triangle from './triangle.png';

const codeStr =
    "void shape_move(double *x_values, double *y_values, int num_points) {\n" +
    "    /* move in shape */\n" +
    "}\n" +
    "\n" +
    "void move_triangle(double x_center, double y_center, double length) {\n" +
    "    /* move in equilateral triangle */\n" +
    "}\n";

export default class ShapeQuestion extends React.Component {
    render() {
        return (
            <CodeQuestion
                codePlaceholder={codeStr}
                formId="shapeQuestion"
                codeHeight={600}
            >
                <p>
                    You are going to implement two functions that move a robot in a plane, starting at <code>(0, 0)</code>.
                    <b>You are given</b> (and do not need to define) the function <code>void control_loop(double target_x, double target_y)</code>
                    which moves the robot to <code>(target_x, target_y)</code> and finishes when the robot is there.
                </p>
                <p>
                    The function <code>void shape_move(double *x_values, double *y_values, int num_points)</code>
                    should move the robot from its starting position through a series
                    of points. For instance the code
                </p>
                <pre>
                    <code>
                        {
                            "int x[] = {1, 3.5, 6.7};\n" +
                            "int y[] = {0, -2.1, 2};\n" +
                            "shape_move(x, y, 3);"
                        }
                    </code>
                </pre>
                <p>
                    Will move the robot to the points <code>(1.0, 0.0)</code>, <code>(3.5, -2.1)</code>, and <code>(6.7, 2.0)</code>.
                    You can change the array types to whichever suits your language of choice. For example,
                    <code>void shape_move(int[] x_values, int[] y_values)</code> in Java.
                </p>
                <p>
                    The second function, <code>void move_triangle(double x_center, double y_center, double length)</code>, 
                    should use <code>shape_move</code> to move the robot <b>clockwise</b> through
                    the vertices of an upright equilateral triangle, centered at <code>(x_center, y_center)</code> with side
                    length <code>length</code> starting at the top (see diagram).
                </p>
                    <div style={{ textAlign: "center" }}>
                        <img src={triangle} alt="upright-triangle" style={{ height: 300 }} />
                    </div>
            </CodeQuestion>
                );
    }
}
