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
        id: shortid.generate(),
        title: 'ok',
        description: null,
      }],
      questions: [{
        id: shortid.generate(),
        title: null,
        description: null,
        answers: [{
          id: shortid.generate(),
          description: null,
          associatedResult: null,
        }]
      }]
    };
  }

  addResult() {
    const results = this.state.results.slice();
    results.push({id: shortid.generate()});
    this.setState({'results': results});
    //this.setState({'numResults': this.state.numResults + 1});
  }

  updateResultTitle(resultId, title) {
    const results = this.state.results.slice();
    let i = results.map(item => item.id).indexOf(resultId);
    results[i].title = title;
    this.setState({'results':results})
  }

  updateResultDescription(resultId, description) {
    const results = this.state.results.slice();
    let i = results.map(item => item.id).indexOf(resultId);
    results[i].description = description;
    this.setState({'results':results})
  }

  deleteResult(resultId) {
    const results = this.state.results.slice();
    let i = results.map(item => item.id).indexOf(resultId);
    results.splice(i, 1);
    this.setState({'results': results});
  }

  addAnswer(questionId, description, associatedResult) {
    const questions = this.state.questions
    let i = questions.map(item => item.id).indexOf(questionId);
    questions[i].answers.push({id: shortid.generate(), description: description, associatedResult: associatedResult});
    this.setState({'questions': questions});
  }

  deleteAnswer(questionId, answerId) {
    const questions = this.state.questions.slice();
    let i = questions.map(item => item.id).indexOf(questionId);
    let j = questions[i].answers.map(item => item.id).indexOf(answerId)
    questions[i].answers.splice(j, 1);
    this.setState({'questions': questions});
  }

  addQuestion(title, description) {
    const questions = this.state.questions.slice();
    let answers = [{
      id: shortid.generate(),
      description: null,
      associatedResult: null}]
    questions.push({id: shortid.generate(), title: title, description: description, answers: answers});
    this.setState({'questions': questions});
  }

  deleteQuestion(questionId) {
    const questions = this.state.questions.slice();
    let i = questions.map(item => item.id).indexOf(questionId);
    questions.splice(i, 1);
    this.setState({'questions': questions});
  }

  render() {
    return (
      <div id="Quiz_container" className="box_red"> Create a quiz!<div><button>Save Quiz</button></div>
        <Quiz_info />
        Add your results:<div id="Results_container" className="resultsContainer">
          {this.state.results.map((result) => 
            <Results 
              resultId={result.id}
              updateResultTitle={(...args) => this.updateResultTitle(...args)}
              updateResultDescription={(...args) => this.updateResultDescription(...args)}  
              addResult={(...args) => this.addResult(...args)} 
              deleteResult={(...args) => this.deleteResult(...args)} 
              addResultsButtonText={this.state.addResultsButtonText} 
              deleteResultsButtonText={this.state.deleteResultButtonText}
              />
          )}
        </div>
        <button onClick={() => this.addResult()}>{this.state.addResultsButtonText}</button>
        <div id="questions_container" class="questionsContainer"> Add your questions:

          {this.state.questions.map((question) =>
              <Questions 
                questionId={question.id}
                answers = {question.answers}
                results = {this.state.results} 
                addAnswers={() => this.addAnswer()} 
                addAnswerButtonText={this.state.addAnswerButtonText} 
                addQuestion={(...args) => this.addQuestion(...args)}
                deleteQuestion={(...args) => this.deleteQuestion(...args)}
                addAnswer={(...args) => this.addAnswer(...args)}
                deleteAnswer={(...args) => this.deleteAnswer(...args)}   
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