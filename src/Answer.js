import React, { Component } from 'react';

class Answer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            selectOption: '',
        }
    }

    handleTitleChange(event) {
        this.setState({
            title: event.target.value
        });
    }

    handleDescriptionChange(event) {
        this.setState({
            selectOption: event.target.value
        });
    }

    render() {
        return (
            <div id="Answer" className="answer">
                <div id="answer_text"><input type="text" className="textInput" placeholder={this.props.answer.description}></input></div>
                <div id="related_result">
                    <select className="textInput">
                        <option selected disabled>Select Related Result</option>
                        {this.props.results.map((result) =>
                            <option value={result.title} onChange={(e) => this.handleDescriptionChange(e)}>{result.title}</option>
                        )}
                    </select>
                </div>
                <button className="deleteButton" onClick={() => this.props.deleteAnswer(this.props.quizId, this.props.questionId, this.props.answerId)}>Delete answer</button>
            </div>
        );
    }
}
export default Answer