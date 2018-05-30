import React from 'react';
import CodeQuestion from './CodeQuestion';

const codeStr =
    "#include <vector>\n" +
    "\n" +
    "std::vector<int> repair_order(int num_robots, int *spare_parts_needed) {\n" +
    "    /* determine an optimal repair order */\n" +
    "}\n";

export default class RepairManQuestion extends React.Component {
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
        if (this._r) {this._r.resetCode(); }
    }

    render() {
        return (
            <CodeQuestion
                ref={(r) => { this._r = r; }}
                codePlaceholder={codeStr}
                formId="repairManQuestion"
                codeHeight={800}
            >
                <p>
                    Jimmy Neutron needs to repair his robots. He has <code>num_robots</code> spaced <b>one meter</b> apart
                    along a line in his (very long) garage. Jimmy starts one meter to the left of the first robot, where he
                    keeps his stash of spare parts. Jimmy needs spare parts to repair his robots, but he can
                    only carry <b>50 at a time</b>. Each of the robots requires a certain number of parts to repair, but each
                    number will be less than or equal to 50. These are given in the array <code>spare_parts_needed</code>.
                    Jimmy can resupply his parts by returning to his start position.
                </p>
                <p>
                    The function <code>repair_order</code> should return the order in which Jimmy should
                    repair his robots. For example, for three robots and <code>{"spare_parts_needed = {25, 25, 50}"}</code>,
                    the function can return <code>{"{1, 2, 0, 3}"}</code>, to repair the first robot, 1 meter from the start,
                    then the second robot, 2 meters from the start, <code>0</code> to resupply at the start, then the third robot.
                </p>
                <p>
                    But Jimmy has a hard time carrying around all those parts. He wants to minimize the distance he walks.
                    Your function should try to return a repair order that minimizes the total walking distance. For example,
                    six robots with <code>{"spare_parts_needed = {20, 20, 20, 20, 10, 10}"}</code> can be repaired left-to-right
                    <code>{"{1, 2, 0, 3, 4, 0, 5, 6}"}</code> for a total of 18 meters or <code>{"{1, 2, 5, 0, 3, 4, 6}"}</code>
                    for a total of 16 meters travelled.
                </p>
                <p>
                    You can change the array and vector to whichever array and list types are available
                    in your language of choice, e.g. <code>int[] spare_parts_needed</code> and
                    <code>{"List<Integer>"}</code> in Java. If you're not familiar with lists,
                    use an array with size <code>2 * num_robots</code>.
                </p>
            </CodeQuestion>
        );
    }
}
