import React, { Component } from 'react';

class Answer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectOption: '',
        }
    }

    handleTitleChange(event) {
        this.setState({
            selectOption: event.target.value
        });
    }
    render() {
        return (
            <div id="Answer" className="answer">
                <div id="answer_text"><input type="text" className="textInput" placeholder="Insert answer text"></input></div>
                <div id="related_result">
                    <select className="textInput">
                        <option selected disabled>Select Related Result</option>
                        {this.props.results.map((result) =>
                            <option value={result.title} onChange={(e) => this.handleDescriptionChange(e)}>{result.title}</option>

                        )}
                    </select>
                </div>
                <button onClick={() => this.props.deleteAnswer(this.props.questionId, this.props.answerId)}>{this.props.deleteAnswerButtonText}</button>
            </div>
        );
    }
}
export default Answer