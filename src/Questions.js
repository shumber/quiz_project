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
                            <button className="deleteButton" onClick={() => this.props.deleteQuestion(this.props.quizId, this.props.question.id)}>Delete Question</button>
                        </div>
                    </div>
                    <div className="questionsRight">
                        <div id="answers_container">
                        {this.props.question.answers.map((answer) =>
                            <Answer
                              quizId = {this.props.quizId}
                              answer = {answer}
                              questionId = {this.props.question.id} 
                              answerId={answer.id}
                              deleteAnswer={this.props.deleteAnswer}   
                              results = {this.props.results}
                              />
                        )}
                        </div>
                        <button className="addButton" onClick={() => this.props.addAnswer(this.props.quizId, this.props.question.id, this.state.description, 1)}>Add answer</button>
                    </div>
   
                </div>
        );
    }
}

export default Questions