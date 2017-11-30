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

<<<<<<< HEAD
=======
    handleAssociatedResultChange(event) {
        this.setState({
            description: event.target.value
        });
    }



>>>>>>> master
    render() {
        return (
                <div id="question" class="questions">
                    <div class="questionsLeft">
                        <div id="questions_title"><input type="text" class="textInput" placeholder="Add question text" onChange={(e) => this.handleTitleChange(e)}></input></div>
                        <div id="questions_description"><textarea name="questionDescription" class="textInput" cols="40" rows="4" placeholder="Add question description" onChange={(e) => this.handleDescriptionChange(e)}></textarea></div>
                        <div id="questions_add_button">
                        </div>
                        <div id="questions_delete_button">
                            <button onClick={() => this.props.deleteQuestion(this.props.questionId)}>{this.props.deleteQuestionButtonText}</button>
                        </div>
                    </div>
                    <div class="questionsRight">
                        <div id="answers_container">
                        {this.props.answers.map((answer) =>
                            <Answer
                              questionId = {this.props.questionId} 
                              answerId={answer.id}
                              deleteAnswer={this.props.deleteAnswer}   
                              deleteAnswerButtonText={this.props.deleteAnswerButtonText}
                              />
                        )}

                            
                        </div>
                        <button onClick={() => this.props.addAnswer(this.props.questionId, this.state.description, 1)}>{this.props.addAnswerButtonText}</button>
                    </div>
   
                </div>
        );
    }
}

export default Questions