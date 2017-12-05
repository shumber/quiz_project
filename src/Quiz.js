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

    };
  }

  render() {
    return (
      <div id="Quiz_container" className="box_red"> <blink>Create a quiz!</blink><div>
        <button className="saveButton" onClick={() => this.props.updateTest()}> >Save Quiz</button></div>
        <Quiz_info />
        Add your results:<div id="Results_container" className="resultsContainer">
          {this.props.quiz.results.map((result) => 
            <Results 
              result = {result}
              quizId = {this.props.quiz.id}
              updateResultTitle={(...args) => this.props.updateResultTitle(...args)}
              updateResultDescription={(...args) => this.props.updateResultDescription(...args)}  
              addResult={(...args) => this.props.addResult(...args)} 
              deleteResult={(...args) => this.props.deleteResult(...args)} 
              />
          )}
        </div>
        <button className="addButton" onClick={() => this.props.addResult()}>Add result</button>
        <div id="questions_container" class="questionsContainer"> Add your questions:

          {this.props.quiz.questions.map((question) =>
              <Questions 
                quizId = {this.props.quiz.id}
                question = {question}
                results = {this.props.quiz.results} 
                addQuestion={(...args) => this.props.addQuestion(...args)}
                deleteQuestion={(...args) => this.props.deleteQuestion(...args)}
                addAnswer={(...args) => this.props.addAnswer(...args)}
                deleteAnswer={(...args) => this.props.deleteAnswer(...args)}   
                />
          )}
        </div>
        <button className="addButton" onClick={() => this.props.addQuestion(this.props.quizId)}>Add question</button>
      </div>
    );
  }
}   
            
export default Quiz;