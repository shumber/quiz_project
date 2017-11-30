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
      label_quizTitle: 'Add a quiz title:',
      label_quizDescription: 'Add a description of the quiz',
      label_resultTitle: 'Add a result title',
      label_resultDescription: 'Add a result Description',
      label_questionTitle: 'Add a question title',
      label_questionDescription: 'Add a question description',
      label_answerText: 'Add answer text',
      label_selectRelatedResult: 'Select related result',

      resultsBoxTitle: 'Enter each of the results',
      questionsBoxTitle: 'Enter each of the questions, and their answer options',
      addResultsButtonText: 'Add Result',
      saveResultButtonText: 'Save Result',
      deleteResultButtonText: 'Delete Result',
      addQuestionButtonText: 'Add Question',
      saveQuestionButtonText: 'Save Question',
      deleteQuestionButtonText: 'Delete Question',
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

  addAnswer(questionId, description, associatedResult) {
    const answer = this.state.questions[questionId].answers.slice();
    answer.push({id: shortid.generate(), description: description, associatedResult: associatedResult});
    //this.setState({'question': results}); do we have to delete the question from questions, add the answer to the question, and then add question back into questions?
  }

  deleteAnswer(questionId, answerId) {
    const answer = this.state.questions[questionId].answers.slice();
    let i = answer.map(item => item.id).indexOf(answerId);
    answer.splice(i, 1);
    //this.setState({'results': results});
  }

  addQuestion(title, description) {
    const question = this.state.questions.slice();
    question.push({id: shortid.generate(), title: title, description: description});
    this.setState({'questions': question});
  }

  deleteQuestion(questionId) {
    const questions = this.state.questions.slice();
    let i = questions.map(item => item.id).indexOf(questionId);
    questions.splice(i, 1);
    this.setState({'questions': questions});
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
                addQuestion={(...args) => this.addQuestion(...args)}
                deleteQuestion={(...args) => this.deleteQuestion(...args)}
                addAnswer={(...args) => this.addQuestion(...args)}
                deleteAnswer={(...args) => this.addQuestion(...args)}   
                addQuestionButtonText={this.state.addQuestionButtonText}
                deleteQuestionButtonText={this.state.deleteQuestionButtonText}
                deleteAnswerButtonText={this.state.deleteAnswerButtonText}
                />
          )}
        </div>
        <button onClick={() => this.addQuestion(this.state.questions.title, this.state.questions.description)}>{this.state.addQuestionButtonText}</button>
      </div>
    );
  }
}   
            
export default Quiz;