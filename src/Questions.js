import React, { Component } from 'react';
import Answer from './Answer';

class Questions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            questionId: '',
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
                <div id="question" class="questions">
                    <div class="questionsLeft">
                        <div id="questions_title"><input type="text" class="textInput" placeholder="Add question text" onChange={(e) => this.handleTitleChange(e)}></input></div>
                        <div id="questions_description"><textarea name="questionDescription" class="textInput" cols="40" rows="4" placeholder="Add question description" onChange={(e) => this.handleDescriptionChange(e)}></textarea></div>
                        <div id="questions_add_button">
                        </div>
                        <div id="questions_add_button">
                            <button onClick={() => this.props.deleteQuestion(this.state.questionId)}>{this.props.deleteQuestionButtonText}</button>
                        </div>
                    </div>
                    <div class="questionsRight">
                        <div id="answers_container">
                            <Answer />
                            <button onClick={() => this.props.addAnswer(this.state.description)}>{this.props.addAnswerButtonText}</button>
                            <button onClick={() => this.props.deleteAnswer(this.state.description)}>{this.props.deleteAnswerButtonText}</button>
                        </div>
                    </div>
   
                </div>
        );
    }
}

export default Questions