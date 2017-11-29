import React, { Component } from 'react';
import './Quiz.css';
import Quiz_info from './Quiz_info';
import Results from './Results';
import Questions from './Questions';
var shortid = require('shortid');

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
      numQuestions: 2,

      title: null,
      description: null,
      results: [{
        id: null,
        title: null,
        description: null,
      }],
      questions: [{
        id: null,
        title: null,
        description: null,
        answers: [{
          id: null,
          description: null,
          associatedResult: null,
        }]
      }]
      

    };
  }

  addResult() {
    const results = this.state.results.slice();
    results.push({id: shortid.generate(), title: 'Temp Title', description: 'Temp description'});
    this.setState({'results': results});
    //this.setState({'numResults': this.state.numResults + 1});
  }

  addAnswer() {
    this.setState({'numAnswers': this.state.numAnswers + 1});
  }

  addQuestion() {
    this.setState({'numQuestions': this.state.numQuestions + 1});
  }

  
  render() {
    return (
      <div id="Quiz_container" className="box_red">quiz box <button>Save Quiz</button>
        <Quiz_info />
        <div id="Results_container" class="box">results box
          {this.state.results.map((id) => 
            <Results resultId={id} addResult={() => this.addResult()} addResultsButtonText={this.state.addResultsButtonText}/>
          )}
        </div>
        <div id="questions_container" class="box"> questions box
          {this.state.questions.map((id) =>
              <Questions questionsId={id} addAnswers={() => this.addAnswer()} addAnswerButtonText={this.state.addAnswerButtonText} 
                addQuestion={() => this.addQuestion()} addQuestionButtonText={this.state.addQuestionButtonText}/>
          )}
        </div>
      </div>
    );
  }
}   
            
export default Quiz;