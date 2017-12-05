import React, { Component } from 'react';
import Answer from './Answer';

class Questions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
        }
    }

    handleTitleChange(event) {
        this.setState({
            title: event.target.value
        });
    }

    handleDescriptionChange(event) {
    this.setState({
        description: event.target.value
    });
    }

    render() {
        return (
                <div id="question" className="questions">
                    <div className="questionsLeft">
                        <div id="questions_title"><input type="text" className="textInput" placeholder={this.props.question.title} onChange={(e) => this.handleTitleChange(e)}></input></div>
                        <div id="questions_description"><textarea name="questionDescription" className="textInput" cols="40" rows="4" placeholder={this.props.question.description} onChange={(e) => this.handleDescriptionChange(e)}></textarea></div>
                        <div id="questions_add_button">
                        </div>
                        <div id="questions_delete_button">
                            <button onClick={() => this.props.deleteQuestion(this.props.question.id)}>Delete Question</button>
                        </div>
                    </div>
                    <div className="questionsRight">
                        <div id="answers_container">
                        {this.props.question.answers.map((answer) =>
                            <Answer
                              answer = {answer}
                              questionId = {this.props.questionId} 
                              answerId={answer.id}
                              deleteAnswer={this.props.deleteAnswer}   
                              deleteAnswerButtonText={this.props.deleteAnswerButtonText}
                              results = {this.props.results}
                              />
                        )}
                        </div>
                        <button onClick={() => this.props.addAnswer(this.props.questionId, this.state.description, 1)}>Add answer</button>
                    </div>
   
                </div>
        );
    }
}

export default Questions