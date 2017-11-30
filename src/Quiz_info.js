import React, { Component } from 'react';
import Results from './Results';

class Quiz_info extends Component {
  render() {
    return (
        <div id="Quiz_info" className="box">Quiz Information
              <div id="quiz_title">
                <input type="text" class="textInput" value="Add quiz title"></input>
              </div>
              <div id="quiz_description">
                <textarea name="quizDescription" class="textInput" cols="40" rows="5" value="Add quiz description"></textarea>
              </div>
        </div>

    );
  }
}

export default Quiz_info
