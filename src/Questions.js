import React, { Component } from 'react';
import Answer from './Answer';

class Questions extends Component {
    render() {
        return (
          
              <div id="question">
                <div id="questions_title">questions title <input type="text"></input></div>
                <div id="questions_description">questions description <input type="text"></input></div>
                <div id="answers_container">
                  <Answer />
                  <button>Add Answer Option</button>
                </div>
                <div id="questions_add_button">questions add button <button>Add Question</button></div>
              </div>
        );
    }
}

export default Questions