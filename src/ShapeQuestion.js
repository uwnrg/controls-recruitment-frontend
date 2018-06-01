import React from 'react';
import CodeQuestion from './CodeQuestion';
import triangle from './triangle.png';

// c_cpp
// java
// python
// golang
// csharp
// javascript

const templateCode = {
    'c_cpp':
        '// Function prototype\n' +
        '// void control_loop(double target_x, double target_y);\n' +
        '\n' +
        'void shape_move(double *x_values, double *y_values, int num_points) {\n' +
        '    /* move in shape */\n' +
        '}\n' +
        '\n' +
        'void move_triangle(double x_center, double y_center, double length) {\n' +
        '    /* move in equilateral triangle */\n' +
        '}\n',

    'java':
        'class Shape {\n' +
        '   // Function prototype\n' +
        '   // public static void control_loop(double target_x, double target_y);\n' +
        '   \n' +
        '   public static void shape_move(double[] x_values, double[] y_values) {\n' +
        '       /* move in shape */\n' +
        '   }\n' +
        '   \n' +
        '   public static void move_triangle(double x_center, double y_center, double length) {\n' +
        '       /* move in equilateral triangle */\n' +
        '   }\n' +
        '}\n',

    'python':
        '# Function prototype\n' +
        '# def control_loop(target_x, target_y)\n' +
        '\n' +
        'def shape_move(x_values, y_values):\n' +
        '    # move in shape\n' +
        '\n' +
        'def move_triangle(x_center, y_center, length):\n' +
        '    # move in equilateral triangle\n',

    'golang':
        '// Function prototype\n' +
        '// func control_loop(target_x float64, target_y float64)\n' +
        '\n' +
        'func shape_move(x_values []float64, y_values []float64) {\n' +
        '    /* move in shape*/\n' +
        '}\n' +
        '\n' +
        'func move_triangle(x_center float64, y_center float64, length float64) {\n' +
        '    /* move in equilateral triangle */\n' +
        '}\n',

    'csharp':
        'public class Shape {\n' +
        '   // Function prototype\n' +
        '   // public static void control_loop(double target_x, double target_y);\n' +
        '   \n' +
        '   public static void shape_move(double[] x_values, double[] y_values) {\n' +
        '       /* move in shape */\n' +
        '   }\n' +
        '   \n' +
        '   public static void move_triangle(double x_center, double y_center, double length) {\n' +
        '       /* move in equilateral triangle */\n' +
        '   }\n' +
        '}\n',

    'javascript':
        '// Function prototype\n' +
        '// function control_loop(target_x, target_y);\n' +
        '\n' +
        'function shape_move(x_values, y_values) {\n' +
        '    /* move in shape */\n' +
        '}\n' +
        '\n' +
        'function move_triangle(x_center, y_center, length) {\n' +
        '    /* move in equilateral triangle */\n' +
        '}\n',
};

export default class ShapeQuestion extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.getValue = this.getValue.bind(this);
        this.setValue = this.setValue.bind(this);
        this.reset = this.reset.bind(this);
    }

    getValue() {
        return this._r ? this._r.getValue() : "";
    }

    setValue(content) {
        if (this._r) { this._r.setValue(content); }
    }

    reset() {
        if (this._r) { this._r.resetCode(); }
    }

    render() {
        return (
            <CodeQuestion
                ref={(r) => { this._r = r; }}
                codePlaceholder={templateCode}
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
