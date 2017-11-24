import React, { Component } from 'react';
import Results from './Results';

class Quiz_info extends Component {
  render() {
    return (
        <div id="Quiz_info" className="box">quiz info
              <div id="quiz_title">quiz title <input type="text"></input></div>
              <div id="quiz_description">Quize description
                  <input type="text"></input>
              </div>
              
        </div>

    );
  }
}

export default Quiz_info
