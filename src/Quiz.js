import React, { Component } from 'react';
import './Quiz.css';
import Quiz_info from './Quiz_info';
import Results from './Results';
import Questions from './Questions';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizInfoTitle: null,
      resultsBoxTitle: 'Enter each of the results',
      numResults: 2,
      questionsBoxTitle: 'Enter each of the questions, and their answer options',
      addResultsButtonText: 'Add Result',
      addQuestionButtonText: 'Add Question',
      addAnswerButtonText: 'Add Answer',
      numAnswers: 2,

    };
  }

  addResult() {
    this.setState({'numResults': this.state.numResults + 1});
  }

  addAnswer() {
    this.setState({'numAnswers': this.state.numAnswers + 1});
  }

  
  render() {
    return (
      <div id="Quiz_container" className="box_red">quiz box <button>Save Quiz</button>
        <Quiz_info />
        <div id="Results_container" class="box">results box
          <Results addResult={() => this.addResult()} addResultsButtonText={this.state.addResultsButtonText}/>
        </div>
        <div id="questions_container" class="box"> questions box
          <Questions addAnswers={() => this.addAnswer()} addAnswerButtonText={this.state.addAnswerButtonText}/>
        </div>
      </div>
    );
  }
}   
            
export default Quiz;