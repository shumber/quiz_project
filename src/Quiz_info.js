import React, { Component } from 'react';
import Results from './Results';

class Quiz_info extends Component {
  render() {
    return (
        <div id="Quiz_info" className="box">Quiz Information
              <div id="quiz_title">Add quiz title:<input type="text"></input></div>
              <div id="quiz_description">Add quiz description:
                  <input type="text"></input>
              </div>
              
        </div>

    );
  }
}

export default Quiz_info
