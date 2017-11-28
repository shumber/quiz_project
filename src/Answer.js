import React, { Component } from 'react';

class Answer extends Component {
    render() {
        return (
            <div id="Answer" class="box_yellow">
                <div id="answer_text" >{this.props.addAnswerButtonText}<input type="text"></input></div>
                <div id="answer_correct"><input type="checkbox"></input>correct</div>
                <div id="related_result">select related result
                    <select>Select related results
                        <option name="option1" value="option1">Option 1</option>
                    </select>
                </div>
            </div>
        );
    }
}
export default Answer