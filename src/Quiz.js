import React, { Component } from 'react';
import './Quiz.css';
import Quiz_info from './Quiz_info';
import Results from './Results';
import Questions from './Questions';

class Quiz extends Component {
  render() {
    return (
      <div id="Quiz_container" className="box_red">quiz box <button>Save Quiz</button>
        <Quiz_info />
        <div id="Results_container" class="box">results box
          <Results />
        </div>
        <div id="questions_container" class="box"> questions box
          <Questions />
        </div>
      </div>
    );
  }
}   
            
export default Quiz;