import React, { Component } from 'react';

class Answer extends Component {
    render() {
        return (
            <div id="Answer" class="answer">
                <div id="answer_text"><input type="text" class="textInput" placeholder="Insert answer text"></input></div>
                <div id="related_result">
                    <select class="textInput">
                        <option selected disabled>Select Related Result</option>
                        <option name="option1" value="option1">Option 1</option>
                    </select>
                </div>
                <button onClick={() => this.props.deleteAnswer(this.props.questionId, this.props.answerId)}>{this.props.deleteAnswerButtonText}</button>
            </div>
        );
    }
}
export default Answer