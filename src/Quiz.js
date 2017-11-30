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
      questionsBoxTitle: 'Enter each of the questions, and their answer options',
      addResultsButtonText: 'Add Result',
      saveResultButtonText: 'Save Result',
      deleteResultButtonText: 'Delete Result',
      addQuestionButtonText: 'Add Question',
      saveQuestionButtonText: 'Save Question',
      addAnswerButtonText: 'Add Answer',
      saveAnswerButtonText: 'Save Answer',
      deleteAnswerButtonText: 'Delete Answer',

      quizTitle: null,
      quizDescription: null,
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

  addResult(title, description) {
    const results = this.state.results.slice();
    results.push({id: shortid.generate(), title: title, description: description});
    this.setState({'results': results});
    //this.setState({'numResults': this.state.numResults + 1});
  }

  deleteResult(resultId) {
    const results = this.state.results.slice();
    let i = results.map(item => item.id).indexOf(resultId);
    results.splice(i, 1);
    this.setState({'results': results});
  }

  addAnswer() {
    //todo
  }

  deleteAnswer() {
    //todo
  }

  addQuestion() {
    //todo
  }

  deleteQuestion(questionId) {
    //todo
  }



  render() {
    return (
      <div id="Quiz_container" className="box_red"> Create a quiz!<button>Save Quiz</button>
        <Quiz_info />
        Add your results:<div id="Results_container" class="resultsContainer">
          {this.state.results.map((id) => 
            <Results 
              resultId={id} 
              addResult={(...args) => this.addResult(...args)} 
              deleteResult={(...args) => this.deleteResult(...args)} 
              addResultsButtonText={this.state.addResultsButtonText} 
              deleteResultsButtonText={this.state.deleteResultButtonText}
              />
          )}
        </div>
        <div id="questions_container" class="questionsContainer"> Add your questions:
          {this.state.questions.map((id) =>
              <Questions 
                questionsId={id} 
                addAnswers={() => this.addAnswer()} 
                addAnswerButtonText={this.state.addAnswerButtonText} 
                addQuestion={() => this.addQuestion()} 
                addQuestionButtonText={this.state.addQuestionButtonText}/>
          )}
        </div>
      </div>
    );
  }
}   
            
export default Quiz;