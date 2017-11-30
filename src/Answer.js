import React, { Component } from 'react';

class Answer extends Component {
    render() {
        return (
            <div id="Answer" class="answer">Add answer text:
                <div id="answer_text"><input type="text"></input></div>
                <div id="related_result">Select related result:
                    <select>
                        <option name="option1" value="option1">Option 1</option>
                    </select>
                </div>
            </div>
        );
    }
}
export default Answer