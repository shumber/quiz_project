import React, { Component } from 'react';
import Answer from './Answer';

class Questions extends Component {
    render() {
        return (
              <div id="question" class="questions">
                <div id="questions_title">Add questions title: <input type="text"></input></div>
                <div id="questions_description">Add questions description: <input type="text"></input></div>
                <div id="answers_container">
                  <Answer />
                  <button onClick={this.props.addAnswer}>{this.props.addAnswerButtonText}</button>
                </div>
                <div id="questions_add_button">
                  <button onClick={this.props.addQuestion}>{this.props.saveQuestionButtonText}</button></div>
              </div>
        );
    }
}

export default Questions