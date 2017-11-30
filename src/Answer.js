import React, { Component } from 'react';

class Answer extends Component {
    render() {
        return (
            <div id="Answer" class="answer">Answer text
                <div id="answer_text"><input type="text"></input></div>
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